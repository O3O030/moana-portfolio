import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactTrigger } from "../components/ContactModal";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { projects } from "../content/projects";
import { siteContent } from "../content/site";

type PrimaryExperience = {
  id: string; date: string; role: string; context: string; strengths: string[];
  summary: string; company: string; responsibilities: string[];
};

const primaryExperiences: PrimaryExperience[] = [
  {
    id: "leasing", date: "2025.04 – 2026.07", role: "招商行政專員", context: "商場招商｜品牌合作",
    strengths: ["品牌與廠商溝通", "商務行政與流程推進", "跨部門協作", "現場執行與協調", "資訊整理與建檔"],
    summary: "從品牌接洽、條件溝通到內部行政與現場執行，累積跨角色協調與專案推進經驗。",
    company: "大買家股份有限公司｜大里藝術廣場",
    responsibilities: [
      "執行正櫃、特賣等品牌招商開發與接洽，包含廠商聯繫、合作條件溝通及場勘。",
      "負責招商開發部合約、簽呈等行政流程，協助案件由接洽推進至內部作業與執行。",
      "與行銷部及相關單位跨部門合作，配合快閃、市集等商場活動。",
      "整理商場業績及廠商資訊，進行資料建檔與維護。",
    ],
  },
  {
    id: "hotel", date: "2023.10 – 2025.03", role: "休憩副主任", context: "飯店營運｜團隊管理",
    strengths: ["現場營運", "人力調度", "SOP 建立與改善", "教育訓練", "活動執行", "顧客服務"],
    summary: "在第一線營運環境中負責人員、流程與現場問題，培養即時應變、團隊協作與服務品質管理能力。",
    company: "台中鳳凰酒店｜鳳凰酒店管理顧問股份有限公司",
    responsibilities: [
      "負責 5–8 人團隊之人力調度、工作分配與現場營運。",
      "建立與改善工作 SOP，執行新人及同仁教育訓練。",
      "規劃節慶及異業合作活動，並負責現場問題處理、改善與追蹤。",
    ],
  },
];

const otherExperiences = [
  { date: "2023.04 – 2023.06", company: "ROYCE' 巧克力", role: "快閃銷售", skills: ["品牌商品介紹", "第一線銷售", "快閃櫃位適應", "顧客服務"] },
  { date: "2022.12 – 2023.03", company: "中國信託金融園區公益滑冰場", role: "冰上教練", skills: ["個別化教學", "現場安全", "學員溝通"] },
  { date: "2022.03 – 2022.10", company: "中信房屋", role: "不動產業務員", skills: ["陌生開發", "客戶需求理解", "市場資訊整理", "業務溝通"] },
  { date: "2021.08 – 2022.02", company: "台灣之星", role: "電信門市人員", skills: ["顧客服務", "產品與資費介紹", "電話銷售", "續約與申辦", "門市業績"] },
  { date: "2020.12 – 2021.05", company: "中國信託金融園區公益滑冰場", role: "自由教練", skills: ["自主接案", "滑冰／直排輪教學", "課程安排", "學員溝通"] },
  { date: "2019.03 – 2020.11", company: "世紀星滑冰世界", role: "滑冰教練", skills: ["一對一與團體教學", "依學員需求調整訓練", "競賽培訓"], achievement: "曾帶領數名從零開始學習的學員參加中正盃、青年盃，皆獲得前三名成績。" },
];

function ExperienceAccordion({ experience }: { experience: PrimaryExperience }) {
  const [open, setOpen] = useState(false);
  const panelId = `${experience.id}-details`;
  return <article className={`resume-experience${open ? " is-open" : ""}`}>
    <div className="resume-experience-summary">
      <p className="resume-date">{experience.date}</p>
      <div><h3>{experience.role}</h3><span className="resume-context">{experience.context}</span></div>
      <div><ul className="resume-tags">{experience.strengths.map((item) => <li key={item}>{item}</li>)}</ul><p>{experience.summary}</p></div>
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>{open ? "收合經歷" : "查看經歷"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
    </div>
    <div id={panelId} className="resume-experience-details" hidden={!open}>
      <p>{experience.company}</p><h4>{experience.role}｜{experience.date}</h4>
      <ul>{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  </article>;
}

export function ResumePage() {
  const [showOther, setShowOther] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const brandRadar = projects.find((project) => project.slug === "brand-radar-ai");
  const liveDemo = brandRadar?.externalLinks.find((link) => link.label === "Live Demo");
  return <><Header /><main className="resume-page">
    <section className="resume-profile container">
      <div className="resume-profile-copy">
        <img className="resume-wordmark" src="/images/branding/moana-logo.png" alt="Moana" />
        <p className="eyebrow">PROFESSIONAL PROFILE · 個人履歷</p><h1>古羽庭 <span>MOANA</span></h1>
        <p className="resume-role">行銷 × AI 協作｜專案執行<small>Marketing × AI Collaboration</small></p>
        <address><span>Taichung, Taiwan</span><a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>{showPhone
          ? <a href="tel:0908226720" aria-label="撥打電話 0908-226720">0908-226720</a>
          : <button type="button" className="resume-phone-toggle" aria-expanded="false" aria-label="顯示電話" onClick={() => setShowPhone(true)}><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7.2 3.5 10 7.8 8.2 9.6c1.2 2.5 3.7 5 6.2 6.2l1.8-1.8 4.3 2.8-.7 3.2c-.2.8-.9 1.4-1.8 1.4C9.6 21.4 2.6 14.4 2.6 6c0-.9.6-1.6 1.4-1.8l3.2-.7Z" /></svg></button>}</address>
        <div className="resume-actions"><Link className="button" to="/">PORTFOLIO</Link><ContactTrigger className="button button-dark">CONTACT</ContactTrigger></div>
        <blockquote><strong>把好奇變成想法，再把想法做成作品。</strong><span>Turning curiosity into ideas, and ideas into creations.</span></blockquote>
      </div>
      <div className="resume-portrait-wrap"><div className="resume-portrait"><img src="/images/branding/mona-character.png" alt="Mona profile portrait" /></div><img className="resume-dolphin" src="/images/branding/moana-dolphin.png" alt="Moana dolphin mark" /></div>
    </section>

    <section className="resume-section container"><header><p className="eyebrow">ABOUT ME</p><h2>關於我</h2></header><div className="resume-reading"><p>我習慣從好奇出發，透過研究、交流與 AI 協作逐步找到方向，並把想法轉化為可以實際體驗、測試與持續修正的成果。</p><p>具備品牌企劃、內容規劃、AI 工具協作與專案執行經驗，重視實作、學習與迭代。</p><ul className="resume-tags"><li>探索與研究</li><li>方向選擇</li><li>AI 協作</li><li>實作與迭代</li></ul></div></section>

    <section className="resume-section resume-featured"><div className="container"><header><p className="eyebrow">FEATURED PROJECT</p><h2>精選專案</h2></header><article className="resume-project"><div><p className="resume-date">2026 · AI 協作行銷決策輔助工具</p><h3>Brand Radar AI</h3><p>從「品牌如何更有效率地掌握趨勢並轉化為內容行動」出發，透過 AI 協作將行銷流程製作成可實際操作的網站。</p><ol className="resume-workflow"><li>Trend Radar</li><li>Brand Fit</li><li>Content Planner</li><li>Analytics</li><li>Dashboard</li></ol><p>結合 Google Trends、News 等趨勢訊號與品牌條件，協助判斷適合發展的內容方向。</p><p>以「森研社」精油新創品牌建立案例，從品牌需求、趨勢判斷延伸至內容規劃。</p></div><aside><p className="eyebrow">RESPONSIBLE FOR · 我的參與</p><ul><li>行銷問題與需求整理</li><li>流程規劃</li><li>品牌與內容判斷</li><li>AI 協作</li><li>測試與調整</li></ul><div className="resume-project-actions">{liveDemo && <a className="button" href={liveDemo.href} target="_blank" rel="noopener noreferrer">LIVE DEMO ↗</a>}<Link className="button" to="/projects/brand-radar-ai">CASE STUDY ↗</Link><Link className="button" to="/#films">CASE FILM ↗</Link></div></aside></article></div></section>

    <section className="resume-section container"><header><p className="eyebrow">EXPERIENCE</p><h2>工作經歷</h2></header><div className="resume-experience-list">{primaryExperiences.map((experience) => <ExperienceAccordion key={experience.id} experience={experience} />)}</div><div className="resume-other"><p className="eyebrow">OTHER EXPERIENCE · 其他工作經歷</p><button className="resume-more" type="button" aria-expanded={showOther} aria-controls="other-experience-list" onClick={() => setShowOther((value) => !value)}>{showOther ? "收合其他經歷" : "查看更多經歷"}<span aria-hidden="true">{showOther ? "−" : "+"}</span></button><div id="other-experience-list" hidden={!showOther} className="resume-other-list">{otherExperiences.map((item) => <article key={`${item.date}-${item.company}`}><p className="resume-date">{item.date}</p><h3>{item.role}</h3><p>{item.company}</p><ul className="resume-tags">{item.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>{item.achievement && <p className="resume-achievement">{item.achievement}</p>}</article>)}</div></div></section>

    <section className="resume-section resume-learning"><div className="container"><header><p className="eyebrow">AI LEARNING</p><h2>AI 學習與實作</h2></header><div className="resume-reading"><h3>AI 智慧行銷與商業應用實戰養成班｜2026</h3><p>經濟部商業發展署<br />國立臺中科技大學<br />創新創業教學及產研辦公室</p><ul className="resume-tags"><li>生成式 AI 應用</li><li>數位行銷</li><li>商業數據分析</li><li>AI Agent</li><li>企業專題實作</li></ul><p>將課程學習延伸至 Brand Radar AI 自主專案，實際練習從問題整理、AI 協作到成果展示的完整過程。</p></div></div></section>

    <section className="resume-section container"><header><p className="eyebrow">SKILLS &amp; TOOLS</p><h2>能力與工具</h2></header><div className="resume-skill-grid">{[
      ["探索與研究", "資訊蒐集與整理", "趨勢與案例探索", "AI 輔助研究"], ["內容與品牌", "內容發想與規劃", "品牌與需求考量", "商務溝通"], ["AI Collaboration", "Prompt 與任務拆解", "AI 工具協作", "多工具工作流程"], ["Execution", "AI-assisted prototyping", "Web 實作協作", "測試與調整", "專案執行"],
    ].map(([title, ...items]) => <article key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><div className="resume-tools"><p className="eyebrow">TOOLS</p><ul className="resume-tags">{["ChatGPT", "Codex", "Claude", "Canva", "Excel", "Google Sheets", "PowerPoint"].map((tool) => <li key={tool}>{tool}</li>)}</ul></div></section>

    <section className="resume-section resume-education"><div className="container"><header><p className="eyebrow">EDUCATION</p><h2>學歷</h2></header><div><h3>國立臺北護理健康大學</h3><p>運動保健學系 學士</p><p className="resume-date">2016 – 2020</p></div></div></section>
  </main><Footer /></>;
}
