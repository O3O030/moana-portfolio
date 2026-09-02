import type { Skill, SkillCategory } from "../types/content";

// 主要內容編輯區：技能可依分類新增；level 與 description 都可省略。
export const skills: Skill[] = [
  { name: "資訊蒐集與整理", level: "Research & Information Gathering", category: "01 — EXPLORE / 探索" },
  { name: "趨勢與案例探索", level: "Trend & Case Exploration", category: "01 — EXPLORE / 探索" },
  { name: "對話與 AI 輔助釐清", level: "Collaborative Exploration with AI", category: "01 — EXPLORE / 探索" },
  { name: "品牌與需求考量", level: "Brand & Need Consideration", category: "02 — CHOOSE / 選擇" },
  { name: "內容與方向選擇", level: "Content & Direction Selection", category: "02 — CHOOSE / 選擇" },
  { name: "人的判斷與取捨", level: "Human Judgment & Trade-offs", category: "02 — CHOOSE / 選擇" },
  { name: "提示與任務拆解", level: "Prompt & Task Structuring", category: "03 — COLLABORATE / 協作" },
  { name: "AI 輔助研究與發想", level: "AI-assisted Research & Ideation", category: "03 — COLLABORATE / 協作" },
  { name: "多工具協作", level: "Multi-tool Collaboration", category: "03 — COLLABORATE / 協作" },
  { name: "AI 輔助原型製作", level: "AI-assisted Prototyping", category: "04 — MAKE & LEARN / 實作與學習" },
  { name: "Web 實作協作", level: "Web Implementation Collaboration", category: "04 — MAKE & LEARN / 實作與學習" },
  { name: "測試、調整與迭代", level: "Testing, Refinement & Iteration", category: "04 — MAKE & LEARN / 實作與學習" },
];

export const skillGroupDescriptions: Record<SkillCategory, string> = {
  "01 — EXPLORE / 探索": "從好奇開始，透過研究與交流慢慢找到方向。",
  "02 — CHOOSE / 選擇": "從不同可能裡，選一個值得動手試試看的方向。",
  "03 — COLLABORATE / 協作": "和人與 AI 一起，把模糊的想法逐漸變得具體。",
  "04 — MAKE & LEARN / 實作與學習": "把選定的方向做出來，在實作裡繼續修正。",
};
