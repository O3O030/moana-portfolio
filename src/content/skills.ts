import type { Skill } from "../types/content";

// 主要內容編輯區：技能可依分類新增；level 與 description 都可省略。
export const skills: Skill[] = [
  { name: "Brand Strategy", category: "Marketing" },
  { name: "Trend Research", category: "Marketing" },
  { name: "Content Planning", category: "Marketing" },
  { name: "Prompt Design", category: "AI / Workflow" },
  { name: "AI Workflow Design", category: "AI / Workflow" },
  { name: "Decision Frameworks", category: "Product / Strategy" },
  { name: "Rapid Prototyping", category: "Product / Strategy" },
  { name: "React", category: "Technical" },
  { name: "TypeScript", category: "Technical" },
  { name: "Figma", category: "Tools" },
];
