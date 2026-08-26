import type { VideoProject } from "../types/content";

// 主要內容編輯區：未來新增影片時填入資料；videoUrl 未設定時會顯示 Coming Soon。
export const videoSectionContent = {
  eyebrow: "SELECTED FILMS",
  eyebrowZh: "影像作品",
  title: "影像，是另一種整理觀點的方法。",
  description: "AI-assisted marketing 與影像作品將陸續收錄於此。",
  comingSoon: "COMING SOON · 即將公開",
};

export const videoProjects: VideoProject[] = [
  { id: "film-placeholder-01", status: "Coming Soon" },
  { id: "film-placeholder-02", status: "Coming Soon" },
  { id: "film-placeholder-03", status: "Coming Soon" },
];
