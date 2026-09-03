import type { LinkItem } from "../types/content";

// 主要內容編輯區：全站導覽、聯絡方式、CTA 與頁尾資訊都在這裡修改。
export const siteContent = {
  name: "Moana",
  nav: [
    { label: "作品 Work", href: "/#work" },
    { label: "關於 About", href: "/#about" },
    { label: "技能 Skills", href: "/#skills" },
    { label: "RESUME", href: "/resume" },
  ] satisfies LinkItem[],
  primaryCta: { label: "查看作品 · View Work", href: "/#work" },
  email: "onaku2022@gmail.com",
  sectionLabels: {
    work: { en: "SELECTED WORK", zh: "精選作品", title: "讓策略，成為可以實際運作的方法。" },
    capabilities: { en: "WHAT I DO", zh: "我做什麼", title: "從思考，走向實踐。" },
    about: { en: "ABOUT", zh: "關於我" },
    skills: { en: "HOW I WORK", zh: "我的工作方法", title: "從好奇開始，在探索、協作與實作中找到答案。", description: "我不一定一開始就知道答案。比起直接得到一個結論，我更習慣透過研究、交流與 AI 協作，把模糊的想法逐漸變得具體，再從實作中持續學習與修正。" },
  },
  contactCta: {
    eyebrow: "CONTACT",
    eyebrowZh: "聯絡我",
    title: "有想一起拆解的問題嗎？",
    description: "歡迎聊聊行銷策略、AI 工作流程，或任何值得被做得更好的事。",
    link: { label: "START A CONVERSATION · 開始聊聊", href: "#contact" },
  },
  contactModal: {
    eyebrow: "START A CONVERSATION", title: "開始聊聊", description: "留下你的想法，我會透過 Email 回覆。",
    fields: { name: "稱呼", nameEn: "Name", email: "聯絡信箱", emailEn: "Email", subject: "主旨", subjectEn: "Subject", message: "想聊什麼？", messageEn: "Message" },
    submit: "SEND MESSAGE · 送出訊息", sending: "SENDING... · 傳送中", close: "關閉聯絡視窗",
    successTitle: "Message sent. · 訊息已送出", successBody: "訊息已送出，謝謝你的聯絡。Message sent. Thank you for reaching out.",
    errorTitle: "Unable to send. · 暫時無法送出", errorBody: "訊息暫時無法送出，你仍可以直接透過 Email 與我聯繫。Unable to send right now. You can still reach me directly by email.",
  },
  socialLinks: [] as LinkItem[],
  footerText: "把行銷思考，整理成能被使用的方法。",
  copyright: `© ${new Date().getFullYear()} Moana`,
  metadata: { title: "Moana — Marketing × AI", description: "Moana 的 Marketing × AI 個人作品集" },
};
