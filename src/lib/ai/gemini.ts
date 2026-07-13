import { GoogleGenAI } from "@google/genai";

let _client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (!_client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }
    _client = new GoogleGenAI({ apiKey });
  }
  return _client;
}

const PRIMARY_MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-pro";
const FALLBACK_MODELS = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"];

export interface GenerateOptions {
  system: string;
  user: string;
  temperature?: number;
  maxTokens?: number;
  /** Pro users get the primary (latest) model; free users may be routed to a fallback. */
  priority?: boolean;
}

/**
 * Calls Gemini in JSON mode, transparently falling back to older models if
 * the configured model is unavailable on the account.
 */
export async function generateJSON<T = unknown>(opts: GenerateOptions): Promise<T> {
  const client = getClient();
  const models = [PRIMARY_MODEL, ...FALLBACK_MODELS.filter((m) => m !== PRIMARY_MODEL)];

  let lastError: unknown;
  for (const model of models) {
    try {
      const response = await client.models.generateContent({
        model,
        contents: opts.user,
        config: {
          systemInstruction: opts.system,
          temperature: opts.temperature ?? 0.7,
          maxOutputTokens: opts.maxTokens ?? 4096,
          responseMimeType: "application/json",
        },
      });

      const raw = response.text;
      if (!raw) throw new Error("Empty completion");
      return JSON.parse(raw) as T;
    } catch (error) {
      lastError = error;
      // Only fall through on "model not found / unavailable" style errors; rethrow others.
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

/** Streaming chat used by the Career Coach. Returns an async-iterable text stream. */
export async function streamChat(opts: {
  system: string;
  messages: ChatMessage[];
  temperature?: number;
}) {
  const client = getClient();
  const models = [PRIMARY_MODEL, ...FALLBACK_MODELS.filter((m) => m !== PRIMARY_MODEL)];

  const contents = opts.messages.map((m) => ({
    role: m.role === "assistant" ? ("model" as const) : ("user" as const),
    parts: [{ text: m.content }],
  }));

  let lastError: unknown;
  for (const model of models) {
    try {
      return await client.models.generateContentStream({
        model,
        contents,
        config: {
          systemInstruction: opts.system,
          temperature: opts.temperature ?? 0.7,
          maxOutputTokens: 2048,
        },
      });
    } catch (error) {
      lastError = error;
      const status = (error as { status?: number })?.status;
      if (status !== 404 && status !== 400) throw error;
    }
  }
  throw lastError;
}
