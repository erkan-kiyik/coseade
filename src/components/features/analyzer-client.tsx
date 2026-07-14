"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  FileDown,
  FileUp,
  Lightbulb,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useAi } from "@/hooks/use-ai";
import { SCORE_DIMENSIONS, type ProfileAnalysis, type ScoreDimension } from "@/lib/ai/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { ScoreRing } from "@/components/shared/score-ring";
import { ScoreRadar } from "@/components/shared/score-radar";
import { cn, scoreLabel } from "@/lib/utils";

const SECTIONS: Array<{ key: keyof ProfileAnalysis["sections"]; label: string }> = [
  { key: "headline", label: "Headline" },
  { key: "about", label: "About" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "certifications", label: "Certifications" },
  { key: "projects", label: "Projects" },
];

const CONFIDENCE_STYLE: Record<ScoreDimension["confidence"], string> = {
  high: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  low: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
};

export function AnalyzerClient() {
  const [profileText, setProfileText] = React.useState("");
  const [targetRole, setTargetRole] = React.useState("");
  const [extracting, setExtracting] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const { run, loading, result } = useAi<
    { profileText: string; targetRole?: string },
    ProfileAnalysis
  >({ endpoint: "/api/ai/analyze" });

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setExtracting(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/extract-pdf", { method: "POST", body: formData });
      const body = await res.json();
      if (!res.ok) {
        toast.error(body.error ?? "Could not read the PDF");
        return;
      }
      setProfileText(body.data.text);
      toast.success("PDF text extracted — review it below, then analyze");
    } catch {
      toast.error("Could not read the PDF");
    } finally {
      setExtracting(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const analyze = () => {
    if (profileText.trim().length < 100) {
      toast.error("Please provide at least 100 characters of profile content");
      return;
    }
    void run({ profileText, targetRole: targetRole || undefined });
  };

  const exportPdf = React.useCallback(() => {
    document.body.classList.add("printing-report");
    window.print();
    document.body.classList.remove("printing-report");
  }, []);

  const radarData = React.useMemo(
    () =>
      result
        ? SCORE_DIMENSIONS.map((d) => ({
            dimension: d.label.replace(" Score", ""),
            score: result.scores[d.key].score,
          }))
        : [],
    [result]
  );

  return (
    <div className="space-y-8">
      {/* Input */}
      <Card className="print:hidden">
        <CardContent className="space-y-4 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <Label htmlFor="target-role">Target role (optional)</Label>
              <Input
                id="target-role"
                placeholder="e.g. Senior Product Manager"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
              />
            </div>
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={onFileChange}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={extracting}
              >
                {extracting ? <Loader2 className="animate-spin" /> : <FileUp />}
                Upload LinkedIn PDF
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile-text">Profile content</Label>
            <Textarea
              id="profile-text"
              rows={10}
              placeholder={
                "Paste your LinkedIn profile here — headline, about, experience, education, skills, certifications, projects…\n\nTip: on LinkedIn go to your profile → More → Save to PDF, then upload it above."
              }
              value={profileText}
              onChange={(e) => setProfileText(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              {profileText.length.toLocaleString()} characters
            </p>
          </div>

          <Button variant="gradient" size="lg" onClick={analyze} loading={loading}>
            {!loading && <Sparkles />}
            {loading ? "Analyzing your profile…" : "Analyze my profile"}
          </Button>
        </CardContent>
      </Card>

      {loading && <AnalysisSkeleton />}

      {/* Results */}
      {result && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 print:hidden"
        >
          {/* Overall + radar */}
          <Card className="overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center gap-8 lg:flex-row">
                <div className="flex flex-col items-center gap-3 text-center">
                  <ScoreRing score={result.overallScore} size={160} label="Overall" />
                  <Badge
                    variant={result.overallScore >= 80 ? "success" : result.overallScore >= 60 ? "warning" : "destructive"}
                  >
                    {scoreLabel(result.overallScore)}
                  </Badge>
                  <Button variant="outline" size="sm" onClick={exportPdf}>
                    <FileDown />
                    Export PDF report
                  </Button>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-muted-foreground">{result.summary}</p>
                  <div className="mt-4">
                    <ScoreRadar data={radarData} height={300} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dimension deep-dives */}
          <Card>
            <CardHeader>
              <CardTitle>Score breakdown</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              {SCORE_DIMENSIONS.map((d, i) => (
                <DimensionCard
                  key={d.key}
                  label={d.label}
                  data={result.scores[d.key]}
                  delay={0.1 + i * 0.05}
                />
              ))}
            </CardContent>
          </Card>

          {/* Top actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                Highest-impact improvements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {result.topActions.map((action, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border p-4">
                  <Badge
                    variant={
                      action.impact === "high"
                        ? "destructive"
                        : action.impact === "medium"
                          ? "warning"
                          : "secondary"
                    }
                    className="mt-0.5 shrink-0 uppercase"
                  >
                    {action.impact}
                  </Badge>
                  <div>
                    <div className="font-medium">{action.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Section-by-section */}
          <Card>
            <CardHeader>
              <CardTitle>Section breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="headline">
                <TabsList className="h-auto flex-wrap">
                  {SECTIONS.map((section) => (
                    <TabsTrigger key={section.key} value={section.key} className="gap-1.5">
                      {section.label}
                      <span className="tabular-nums text-xs text-muted-foreground">
                        {result.sections[section.key].score}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                {SECTIONS.map((section) => {
                  const data = result.sections[section.key];
                  return (
                    <TabsContent key={section.key} value={section.key} className="mt-4 space-y-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <FeedbackList
                          title="Strengths"
                          items={data.strengths}
                          icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                        />
                        <FeedbackList
                          title="Issues"
                          items={data.issues}
                          icon={<AlertTriangle className="h-4 w-4 text-rose-500" />}
                        />
                        <FeedbackList
                          title="Suggestions"
                          items={data.suggestions}
                          icon={<Lightbulb className="h-4 w-4 text-amber-500" />}
                        />
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </CardContent>
          </Card>

          {/* Missing keywords */}
          <Card>
            <CardHeader>
              <CardTitle>Missing keywords</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {result.missingKeywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="px-3 py-1">
                  {keyword}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {result && <PrintReport result={result} targetRole={targetRole} />}
    </div>
  );
}

/** One expandable premium-report dimension. */
function DimensionCard({
  label,
  data,
  delay,
}: {
  label: string;
  data: ScoreDimension;
  delay: number;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-xl border"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 p-4 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-center justify-between gap-2 text-sm">
            <span className="font-medium">{label}</span>
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  CONFIDENCE_STYLE[data.confidence]
                )}
              >
                {data.confidence}
              </span>
              <span className="font-semibold tabular-nums">{data.score}</span>
            </span>
          </div>
          <Progress
            value={data.score}
            indicatorClassName={
              data.score >= 80 ? "bg-emerald-500" : data.score >= 60 ? "bg-amber-500" : "bg-rose-500"
            }
          />
        </div>
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 border-t px-4 py-3 text-sm">
              <p className="leading-relaxed text-muted-foreground">{data.explanation}</p>
              <MiniList label="Strengths" items={data.strengths} tone="text-emerald-600 dark:text-emerald-400" />
              <MiniList label="Weaknesses" items={data.weaknesses} tone="text-rose-600 dark:text-rose-400" />
              <MiniList label="Actions" items={data.actions} tone="text-blue-600 dark:text-blue-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MiniList({ label, items, tone }: { label: string; items: string[]; tone: string }) {
  if (!items.length) return null;
  return (
    <div>
      <div className={cn("text-xs font-semibold uppercase tracking-wide", tone)}>{label}</div>
      <ul className="mt-1 list-disc space-y-1 pl-4 text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  );
}

/** Shimmer placeholders shown while the analysis runs. */
function AnalysisSkeleton() {
  return (
    <div className="space-y-6" aria-hidden>
      <Card>
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <Skeleton className="h-40 w-40 rounded-full" />
            <div className="w-full flex-1 space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-56 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="grid gap-3 p-6 md:grid-cols-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

/** Print-only professional report (rendered via window.print → save as PDF). */
function PrintReport({ result, targetRole }: { result: ProfileAnalysis; targetRole?: string }) {
  return (
    <div id="print-report" className="hidden print:block">
      <div style={{ fontFamily: "Georgia, serif" }}>
        <h1 style={{ fontSize: 24, marginBottom: 4 }}>LinkedBoost AI — Profile Report</h1>
        <p style={{ fontSize: 11, color: "#555" }}>
          {targetRole ? `Target role: ${targetRole} · ` : ""}
          Generated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <h2 style={{ fontSize: 16, marginTop: 20 }}>Executive Summary</h2>
        <p style={{ fontSize: 12, lineHeight: 1.6 }}>{result.summary}</p>
        <p style={{ fontSize: 32, fontWeight: 700, margin: "12px 0" }}>
          {result.overallScore}
          <span style={{ fontSize: 14, fontWeight: 400, color: "#555" }}> / 100 — {scoreLabel(result.overallScore)}</span>
        </p>

        <h2 style={{ fontSize: 16, marginTop: 16 }}>Score Breakdown</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #333", textAlign: "left" }}>
              <th style={{ padding: "6px 4px" }}>Dimension</th>
              <th style={{ padding: "6px 4px" }}>Score</th>
              <th style={{ padding: "6px 4px" }}>Confidence</th>
              <th style={{ padding: "6px 4px" }}>Assessment</th>
            </tr>
          </thead>
          <tbody>
            {SCORE_DIMENSIONS.map((d) => {
              const dim = result.scores[d.key];
              return (
                <tr key={d.key} style={{ borderBottom: "1px solid #ccc", verticalAlign: "top" }}>
                  <td style={{ padding: "6px 4px", fontWeight: 600, whiteSpace: "nowrap" }}>{d.label}</td>
                  <td style={{ padding: "6px 4px", fontWeight: 700 }}>{dim.score}</td>
                  <td style={{ padding: "6px 4px", textTransform: "capitalize" }}>{dim.confidence}</td>
                  <td style={{ padding: "6px 4px", lineHeight: 1.5 }}>{dim.explanation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {SCORE_DIMENSIONS.map((d) => {
          const dim = result.scores[d.key];
          return (
            <div key={d.key} style={{ marginTop: 14, breakInside: "avoid" }}>
              <h3 style={{ fontSize: 13, marginBottom: 4 }}>
                {d.label} — {dim.score}/100
              </h3>
              <PrintList label="Strengths" items={dim.strengths} />
              <PrintList label="Weaknesses" items={dim.weaknesses} />
              <PrintList label="Recommended actions" items={dim.actions} />
            </div>
          );
        })}

        <h2 style={{ fontSize: 16, marginTop: 20, breakBefore: "page" }}>Improvement Roadmap</h2>
        <ol style={{ fontSize: 12, lineHeight: 1.6, paddingLeft: 18 }}>
          {result.topActions.map((action, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              <strong>
                [{action.impact.toUpperCase()}] {action.title}
              </strong>
              <br />
              {action.description}
            </li>
          ))}
        </ol>

        <h2 style={{ fontSize: 16, marginTop: 16 }}>Missing Keywords</h2>
        <p style={{ fontSize: 12, lineHeight: 1.7 }}>{result.missingKeywords.join(" · ")}</p>

        <p style={{ fontSize: 9, color: "#999", marginTop: 24 }}>
          Generated by LinkedBoost AI. Scores are model estimates intended as guidance, not guarantees.
        </p>
      </div>
    </div>
  );
}

function PrintList({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div style={{ fontSize: 11, marginBottom: 4 }}>
      <strong>{label}:</strong>
      <ul style={{ margin: "2px 0 0", paddingLeft: 16, lineHeight: 1.5 }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FeedbackList({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon}
        {title}
      </div>
      {items.length ? (
        <ul className="mt-3 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="text-sm leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">Nothing flagged.</p>
      )}
    </div>
  );
}
