import OpenAI from "openai";

let _client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!_client) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not configured");
    }
    _client = new OpenAI({ apiKey });
  }
  return _client;
}

const PRIMARY_MODEL = process.env.OPENAI_MODEL ?? "gpt-5.5";
const FALLBACK_MODELS = ["gpt-5", "gpt-4.1", "gpt-4o"];

export interface GenerateOptions {
  system: string;
  user: string;
  temperature?: number;
  maxTokens?: number;
  /** Pro users get the primary (latest) model; free users may be routed to a fallback. */
  priority?: boolean;
}

/**
 * Calls the chat completion API in JSON mode, transparently falling back to
 * older models if the configured model is unavailable on the account.
 */
export async function generateJSON<T = unknown>(opts: GenerateOptions): Promise<T> {
  const client = getClient();
  const models = [PRIMARY_MODEL, ...FALLBACK_MODELS.filter((m) => m !== PRIMARY_MODEL)];

  let lastError: unknown;
  for (const model of models) {
    try {
      const completion = await client.chat.completions.create({
        model,
        temperature: opts.temperature ?? 0.7,
        max_tokens: opts.maxTokens ?? 4096,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: opts.system },
          { role: "user", content: opts.user },
        ],
      });

      const raw = completion.choices[0]?.message?.content;
      if (!raw) throw new Error("Empty completion");
      return JSON.parse(raw) as T;
    } catch (error) {
      lastError = error;
      // Only fall through on "model not found" style errors; rethrow others.
      const status = (error as { status?: number })?.status;
      if (status !== 404 && status !== 400) throw error;
    }
  }
  throw lastError;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/** Streaming chat used by the Career Coach. Returns a text stream. */
export async function streamChat(opts: {
  system: string;
  messages: ChatMessage[];
  temperature?: number;
}) {
  const client = getClient();
  const models = [PRIMARY_MODEL, ...FALLBACK_MODELS.filter((m) => m !== PRIMARY_MODEL)];

  let lastError: unknown;
  for (const model of models) {
    try {
      return await client.chat.completions.create({
        model,
        temperature: opts.temperature ?? 0.7,
        max_tokens: 2048,
        stream: true,
        messages: [
          { role: "system" as const, content: opts.system },
          ...opts.messages.map((m) => ({ role: m.role, content: m.content })),
        ],
      });
    } catch (error) {
      lastError = error;
      const status = (error as { status?: number })?.status;
      if (status !== 404 && status !== 400) throw error;
    }
  }
  throw lastError;
}
