import { z } from "zod";

const score = z.number().min(0).max(100);

// ─── Feature 1: Profile Analyzer ────────────────────────────────────

export const sectionFeedbackSchema = z.object({
  score,
  strengths: z.array(z.string()),
  issues: z.array(z.string()),
  suggestions: z.array(z.string()),
});

/** One scored dimension of the premium report. */
export const scoreDimensionSchema = z.object({
  score,
  confidence: z.enum(["low", "medium", "high"]),
  explanation: z.string(),
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  actions: z.array(z.string()),
});
export type ScoreDimension = z.infer<typeof scoreDimensionSchema>;

export const SCORE_DIMENSIONS = [
  { key: "recruiter", label: "Recruiter Score" },
  { key: "ats", label: "ATS Score" },
  { key: "personalBranding", label: "Personal Branding" },
  { key: "leadership", label: "Leadership" },
  { key: "networking", label: "Networking" },
  { key: "keywordOptimization", label: "Keyword Optimization" },
  { key: "profileCompleteness", label: "Profile Completeness" },
  { key: "careerGrowth", label: "Career Growth" },
] as const;
export type ScoreDimensionKey = (typeof SCORE_DIMENSIONS)[number]["key"];

export const profileAnalysisSchema = z.object({
  overallScore: score,
  summary: z.string(),
  scores: z.object({
    recruiter: scoreDimensionSchema,
    ats: scoreDimensionSchema,
    personalBranding: scoreDimensionSchema,
    leadership: scoreDimensionSchema,
    networking: scoreDimensionSchema,
    keywordOptimization: scoreDimensionSchema,
    profileCompleteness: scoreDimensionSchema,
    careerGrowth: scoreDimensionSchema,
  }),
  sections: z.object({
    headline: sectionFeedbackSchema,
    about: sectionFeedbackSchema,
    experience: sectionFeedbackSchema,
    education: sectionFeedbackSchema,
    skills: sectionFeedbackSchema,
    certifications: sectionFeedbackSchema,
    projects: sectionFeedbackSchema,
  }),
  topActions: z.array(
    z.object({
      title: z.string(),
      impact: z.enum(["high", "medium", "low"]),
      description: z.string(),
    })
  ),
  missingKeywords: z.array(z.string()),
});
export type ProfileAnalysis = z.infer<typeof profileAnalysisSchema>;

// ─── Feature 2: Headline Generator ──────────────────────────────────

export const headlinesSchema = z.object({
  headlines: z
    .array(
      z.object({
        text: z.string(),
        style: z.string(),
        keywords: z.array(z.string()),
        charCount: z.number(),
      })
    )
    .min(1),
  tips: z.array(z.string()),
});
export type HeadlinesResult = z.infer<typeof headlinesSchema>;

export const HEADLINE_STYLES = [
  "Executive",
  "Startup Founder",
  "Software Engineer",
  "Product Manager",
  "Student",
  "Business",
  "Marketing",
  "AI Engineer",
] as const;

// ─── Feature 3: About Generator ─────────────────────────────────────

export const aboutSchema = z.object({
  variants: z
    .array(
      z.object({
        tone: z.string(),
        content: z.string(),
        hook: z.string(),
        wordCount: z.number(),
      })
    )
    .min(1),
  tips: z.array(z.string()),
});
export type AboutResult = z.infer<typeof aboutSchema>;

export const ABOUT_TONES = [
  "Professional",
  "Friendly",
  "Executive",
  "Inspirational",
  "Startup",
  "Technical",
] as const;

// ─── Feature 4: Experience Optimizer ────────────────────────────────

export const WRITING_TONES = [
  "Professional",
  "Executive",
  "Startup Founder",
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "Marketing",
  "Finance",
  "Student",
] as const;
export type WritingTone = (typeof WRITING_TONES)[number];

export const experienceSchema = z.object({
  optimized: z
    .array(
      z.object({
        original: z.string(),
        rewritten: z.string(),
        star: z.object({
          situation: z.string(),
          task: z.string(),
          action: z.string(),
          result: z.string(),
        }),
        metricsAdded: z.array(z.string()),
        keywords: z.array(z.string()),
      })
    )
    .min(1),
  overallAdvice: z.array(z.string()),
});
export type ExperienceResult = z.infer<typeof experienceSchema>;

// ─── Feature 5: Skills Analyzer ─────────────────────────────────────

export const skillsSchema = z.object({
  currentSkillsAssessment: z.array(
    z.object({
      skill: z.string(),
      marketDemand: score,
      note: z.string(),
    })
  ),
  missingSkills: z.array(
    z.object({
      skill: z.string(),
      importance: score,
      reason: z.string(),
    })
  ),
  trendingSkills: z.array(
    z.object({
      skill: z.string(),
      trendScore: score,
      note: z.string(),
    })
  ),
  atsKeywords: z.array(z.string()),
  summary: z.string(),
});
export type SkillsResult = z.infer<typeof skillsSchema>;

// ─── Feature 6: Post Generator ──────────────────────────────────────

export const postSchema = z.object({
  post: z.object({
    hook: z.string(),
    story: z.string(),
    cta: z.string(),
    fullText: z.string(),
    hashtags: z.array(z.string()),
    emojisUsed: z.array(z.string()),
  }),
  carouselIdeas: z.array(
    z.object({
      title: z.string(),
      slides: z.array(z.string()),
    })
  ),
  imageIdeas: z.array(z.string()),
  bestPostingTime: z.object({
    day: z.string(),
    time: z.string(),
    reason: z.string(),
  }),
  engagementScore: score,
  engagementReason: z.string(),
});
export type PostResult = z.infer<typeof postSchema>;

// ─── Feature 8: ATS Checker ─────────────────────────────────────────

export const atsCheckSchema = z.object({
  matchPercentage: score,
  summary: z.string(),
  missingKeywords: z.array(
    z.object({
      keyword: z.string(),
      importance: z.enum(["critical", "important", "nice-to-have"]),
      whereToAdd: z.string(),
    })
  ),
  matchedKeywords: z.array(z.string()),
  missingSkills: z.array(
    z.object({
      skill: z.string(),
      importance: z.enum(["critical", "important", "nice-to-have"]),
      howToGain: z.string(),
    })
  ),
  missingExperience: z.array(z.string()),
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  suggestions: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      impact: z.enum(["high", "medium", "low"]),
    })
  ),
  linkedinImprovements: z.array(z.string()),
  formattingIssues: z.array(z.string()),
});
export type AtsCheckResult = z.infer<typeof atsCheckSchema>;

// ─── Bonus Toolkit ──────────────────────────────────────────────────

export const toolkitSchema = z.object({
  title: z.string(),
  variants: z
    .array(
      z.object({
        label: z.string(),
        content: z.string(),
      })
    )
    .min(1),
  tips: z.array(z.string()),
});
export type ToolkitResult = z.infer<typeof toolkitSchema>;

export const TOOLKIT_TOOLS = [
  "cover-letter",
  "networking-message",
  "referral-request",
  "interview-questions",
  "content-calendar",
  "career-roadmap",
] as const;
export type ToolkitTool = (typeof TOOLKIT_TOOLS)[number];
