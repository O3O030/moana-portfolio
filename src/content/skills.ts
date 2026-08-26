import type { Skill } from "../types/content";

// 主要內容編輯區：技能可依分類新增；level 與 description 都可省略。
export const skills: Skill[] = [
  { name: "品牌與受眾脈絡", level: "Brand & Audience Context", category: "01 — MARKETING JUDGMENT / 行銷判斷" },
  { name: "趨勢研究與機會判讀", level: "Trend Research", category: "01 — MARKETING JUDGMENT / 行銷判斷" },
  { name: "內容方向規劃", level: "Content Direction", category: "01 — MARKETING JUDGMENT / 行銷判斷" },
  { name: "提示與任務拆解", level: "Prompt & Task Structuring", category: "02 — AI COLLABORATION / AI 協作" },
  { name: "AI 輔助研究與產出", level: "AI-assisted Research & Creation", category: "02 — AI COLLABORATION / AI 協作" },
  { name: "多工具協作流程", level: "Multi-tool Workflow", category: "02 — AI COLLABORATION / AI 協作" },
  { name: "問題定義", level: "Problem Framing", category: "03 — PROBLEM → WORKFLOW / 問題轉成流程" },
  { name: "決策框架", level: "Decision Frameworks", category: "03 — PROBLEM → WORKFLOW / 問題轉成流程" },
  { name: "流程設計與快速驗證", level: "Workflow Design & Validation", category: "03 — PROBLEM → WORKFLOW / 問題轉成流程" },
  { name: "AI 輔助原型製作", level: "AI-assisted Prototyping", category: "04 — AI-ASSISTED BUILD / AI 協作實作" },
  { name: "測試、除錯與迭代", level: "Testing & Iteration", category: "04 — AI-ASSISTED BUILD / AI 協作實作" },
  { name: "Web 工具實作協作", level: "Web Implementation Collaboration", category: "04 — AI-ASSISTED BUILD / AI 協作實作" },
];
