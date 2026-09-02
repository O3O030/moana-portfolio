export interface LinkItem { label: string; href: string; external?: boolean }
export interface Experience { company: string; role: string; startDate: string; endDate?: string; location?: string; summary?: string; responsibilities: string[]; highlights: string[]; tags: string[]; link?: string }
export type SkillCategory = "01 — EXPLORE / 探索" | "02 — CHOOSE / 選擇" | "03 — COLLABORATE / 協作" | "04 — MAKE & LEARN / 實作與學習";
export interface Skill { name: string; category: SkillCategory; level?: string; description?: string }
export interface VideoProject { id: string; title?: string; titleZh?: string; description?: string; poster?: string; videoUrl?: string; duration?: string; category?: string; status?: string }
export interface SelectedWork { id: string; category: string; number: string; title: string; description: string; cta: string; image?: string; alt: string; kind: "video" | "preview" | "external"; href?: string; videoUrl?: string }
export interface ProjectStat { value: string; label: string }
export interface ProjectImage { src?: string; plannedSrc?: string; alt: string; caption?: string; note?: string; stageLabels?: string[] }
export interface ProjectSectionItem { title: string; description?: string; meta?: string; label?: string; details?: string[] }
export type CaseStudySectionType = "text" | "image" | "stats" | "process" | "comparison" | "quote" | "gallery";
export type CaseStudyVariant = "challenge" | "insight" | "decision" | "brand" | "pillars" | "output" | "workflow" | "value" | "roles" | "validation";
export interface CaseStudySection { id: string; type: CaseStudySectionType; variant?: CaseStudyVariant; eyebrow?: string; title?: string; body?: string | string[]; image?: ProjectImage; stats?: ProjectStat[]; items?: ProjectSectionItem[]; highlight?: string; footer?: string }
export interface ValidationResult { label: string; result: string; note?: string }
export interface ProjectHero { eyebrow: string; title: string; description: string; metrics: ProjectStat[] }
export interface ProjectClosing { eyebrow?: string; title: string; body: string; primaryCta: LinkItem; contactCta: LinkItem }
export interface Project {
  id: string; slug: string; title: string; subtitle: string; shortDescription: string;
  status: string; projectType: string; tags: string[]; featured: boolean;
  thumbnail?: ProjectImage; heroImage?: ProjectImage; gallery: ProjectImage[]; challenge?: string;
  solution?: string; impact?: string; role?: string; tools: string[]; techStack: string[];
  validation: ValidationResult[]; hero: ProjectHero; featuredMetrics?: ProjectStat[]; caseStudySections: CaseStudySection[]; closing: ProjectClosing; externalLinks: LinkItem[];
}
