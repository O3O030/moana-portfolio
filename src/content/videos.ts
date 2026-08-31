import type { SelectedWork } from "../types/content";

// 首頁近期精選作品：內容、圖片、影片與外部連結集中於此。
export const videoSectionContent = {
  eyebrow: "SELECTED WORKS · 2026",
  title: "近期精選作品",
  description: "從品牌企劃、數位體驗到 AI 行銷應用，將想法轉化為可以被看見、使用與驗證的作品。",
};

export const selectedWorks: SelectedWork[] = [
  {
    id: "brand-radar-case-film",
    category: "AI × MARKETING",
    number: "01",
    title: "Brand Radar AI｜Case Film",
    description: "從行銷問題出發，呈現我如何拆解問題、運用 AI 協作，將洞察轉化為實際行動。",
    cta: "WATCH FILM",
    image: "/images/brand-radar/brand-radar-case-film-cover.png",
    alt: "Brand Radar AI Case Film 封面",
    kind: "video",
    videoUrl: "/videos/brand-radar-case-film.mp4",
  },
  {
    id: "silva-lab-website",
    category: "BRAND WEBSITE",
    number: "02",
    title: "森研社｜品牌網站",
    description: "將品牌定位、視覺概念與內容架構，轉化為實際的品牌網站體驗。",
    cta: "VIEW WEBSITE",
    image: "/images/brand-radar/silva-lab-website.png",
    alt: "森研社品牌網站預覽",
    kind: "external",
    href: "https://silvalab.my.canva.site/",
  },
  {
    id: "silva-lab-brand-strategy",
    category: "BRAND STRATEGY",
    number: "03",
    title: "森研社｜品牌企劃",
    description: "從品牌定位、目標受眾到內容方向，整理品牌溝通策略與執行概念。",
    cta: "VIEW PROJECT",
    image: "/images/brand-radar/silva-lab-brand-strategy.png",
    alt: "森研社品牌企劃作品預覽",
    kind: "external",
    href: "https://canva.link/t4o20fihyyhu4ct",
  },
];
