import type { Project } from "../types/content";

const brandRadarLiveDemoUrl = import.meta.env.VITE_BRAND_RADAR_DEMO_URL?.trim();

// 主要內容編輯區：Case Study 文案、數據與圖片資料都在這裡修改。
// 圖片尚未準備好時只填 plannedSrc；檔案就緒後將同一路徑填入 src 即會自動顯示。
export const projects: Project[] = [
  {
    id: "brand-radar-ai", slug: "brand-radar-ai", title: "Brand Radar AI", subtitle: "AI Marketing Decision Workspace",
    shortDescription: "從趨勢探索、品牌契合度判斷到內容策略，將分散的行銷工作轉換成可重複執行的決策流程。",
    status: "MVP", projectType: "AI Marketing Agent MVP",
    tags: ["AI Agent", "Marketing Strategy", "Brand Intelligence", "Content Planning"], featured: true,
    thumbnail: { src: "/images/brand-radar/01_dashboard.png", alt: "Brand Radar AI dashboard showing trend highlights, brand opportunities, analytics snapshot and demo workflow" },
    heroImage: { src: "/images/brand-radar/01_dashboard.png", alt: "Brand Radar AI dashboard showing trend highlights, brand opportunities, analytics snapshot and demo workflow", caption: "完整決策工作區：從外部訊號與品牌判斷，銜接內容規劃與後續學習。", stageLabels: ["01 OBSERVE · 觀察", "02 DECIDE · 判斷", "03 CREATE · 建立", "04 LEARN · 學習"] },
    gallery: [
      { src: "/images/brand-radar/01_dashboard.png", alt: "Brand Radar AI dashboard showing trend highlights, brand opportunities, analytics snapshot and demo workflow" },
      { src: "/images/brand-radar/02_trend-radar.png", alt: "Brand Radar AI Trend Radar interface showing ranked trend topics with Trend Score and Brand Fit" },
      { src: "/images/brand-radar/03_content-planner.png", alt: "Brand Radar AI Content Planner showing brand context, content strategy selection and seven-day content plan" },
      { src: "/images/brand-radar/04_analytics_result.png", alt: "Brand Radar AI Analytics dashboard showing seven-day performance comparison, platform analysis, marketing insights and next actions", note: "Demo dataset for product validation. 此數據用於產品流程驗證，非真實客戶成效。" },
    ],
    challenge: "新品牌真正缺少的，不只是文案，而是一套從訊號走到行動的判斷流程。",
    solution: "以 Discover → Evaluate → Decide → Execute 串接趨勢、品牌與內容策略。",
    impact: "將分散任務整理成可重複執行、仍由行銷人員掌握最終判斷的決策流程。",
    role: "Problem framing, workflow design, AI logic, UX/demo flow, MVP development and validation",
    tools: ["Recharts", "FastAPI", "Pydantic"], techStack: ["React", "TypeScript", "Vite", "Python"],
    validation: [
      { label: "Backend", result: "58 Tests Passed" }, { label: "TypeScript", result: "Validation Passed" },
      { label: "Build", result: "Production Build Passed" }, { label: "Browser", result: "Smoke Test Passed" },
    ],
    hero: {
      eyebrow: "AI MARKETING AGENT · CASE STUDY", title: "新品牌第一次建立社群，AI 如何判斷「不該追熱門」？",
      description: "以精油生活風格品牌「森研社」為案例，Brand Radar AI 從 35 個近期趨勢中辨識話題熱度與品牌契合度，並在熱門話題不適合品牌時，切換至 Brand-based Strategy，建立第一週社群內容策略。",
      metrics: [{ value: "35", label: "Trends" }, { value: "83.8", label: "Trend Score" }, { value: "7.5", label: "Brand Fit" }, { value: "7 Days", label: "Content Plan" }],
    },
    featuredMetrics: [{ value: "35", label: "Trends" }, { value: "✓", label: "Brand Fit" }, { value: "7-Day", label: "Plan" }],
    externalLinks: brandRadarLiveDemoUrl
      ? [{ label: "Live Demo", href: brandRadarLiveDemoUrl, external: true }]
      : [],
    caseStudySections: [
      {
        id: "challenge", type: "text", variant: "challenge", eyebrow: "01 · CHALLENGE", title: "新品牌真正缺少的，不只是文案。",
        body: ["森研社是一個以天然精油、香氛儀式與日常療癒為核心的模擬新創品牌。", "對剛開始經營社群的新品牌而言，困難往往不是「寫不出一篇貼文」，而是「現在應該談什麼？」", "傳統流程需要在趨勢搜尋、品牌資料與內容企劃之間反覆切換，而判斷往往依賴個人經驗。"],
        items: [{ title: "現在有哪些熱門話題值得關注？" }, { title: "熱門話題真的適合這個品牌嗎？" }, { title: "如果沒有適合的趨勢，第一週又該說什麼？" }],
        highlight: "如何讓 AI 不只生成文案，而是協助行銷人員完成「發現 → 評估 → 決策 → 執行」？",
      },
      {
        id: "insight", type: "comparison", variant: "insight", eyebrow: "02 · INSIGHT", title: "熱門，不代表品牌值得跟進。",
        stats: [{ value: "83.8", label: "TREND SCORE · 高話題熱度" }, { value: "7.5", label: "BRAND FIT · 低品牌契合度" }],
        body: "如果 AI 只根據「熱門程度」產生內容，它可能只是更有效率地做出錯誤的行銷決策。",
        items: [{ title: "Trend Score", description: "這個話題值得注意嗎？" }, { title: "Brand Fit", description: "這個話題值得「這個品牌」跟進嗎？" }],
        highlight: "Don't force the trend. → Brand-based Content Strategy",
        image: { src: "/images/brand-radar/02_trend-radar.png", alt: "Brand Radar AI Trend Radar interface showing ranked trend topics with Trend Score and Brand Fit", caption: "OBSERVE · 觀察：先收集與排序外部訊號，再比較 Trend Score 與 Brand Fit。" },
      },
      {
        id: "ai-decision", type: "process", variant: "decision", eyebrow: "03 · AI DECISION", title: "Don't force the trend.",
        body: "當 Trend Score 高、Brand Fit 低時，系統不會強迫品牌追逐熱門話題，而是讓行銷人員切換至 Brand-based Strategy，改由品牌自身資訊建立 Evergreen Content。",
        items: [{ label: "DISCOVER", title: "Trend Radar", description: "35 Recent Trends" }, { label: "EVALUATE", title: "Trend Score", description: "Brand Fit" }, { label: "DECIDE", title: "Brand-based Strategy", description: "Brand Intelligence · Awareness Goal" }, { label: "EXECUTE", title: "7 Content Pillars", description: "7-Day Content Plan" }],
        highlight: "Discover → Evaluate → Decide → Execute", footer: "從「找熱門」到「決定品牌現在應該做什麼」。",
      },
      {
        id: "brand-intelligence", type: "text", variant: "brand", eyebrow: "04 · BRAND INTELLIGENCE", title: "AI 在產生內容以前，先理解品牌。",
        items: [{ title: "Brand Proposition", description: "深呼吸，讓森林接管你的壓力。" }, { title: "Target Audience", description: "生活步調緊湊，希望在日常生活中找到放鬆、喘息與自我照顧空間的消費者。" }, { title: "Tone / Voice", description: "溫柔、自然、有質感且有留白感；透過森林、呼吸、植物與日常儀式建立感官畫面，而不是直接使用強烈促銷語言。" }, { title: "Key Messages", details: ["深呼吸，讓森林接管你的壓力。", "回歸自然、溫柔承接。"] }],
        body: "Brand Intelligence 將品牌定位轉換成 AI 可以重複使用的結構化 context，讓內容生成不只知道「這是一個精油品牌」，而是知道品牌對誰說話、扮演什麼角色，以及應該如何說話。",
      },
      {
        id: "content-strategy", type: "process", variant: "pillars", eyebrow: "05 · CONTENT STRATEGY", title: "從品牌定位，轉成七天內容節奏。",
        body: "新品牌第一週不急著促銷，而是先建立「你是誰 → 你相信什麼 → 你提供什麼 → 為什麼值得繼續認識」的品牌認知。",
        stats: [{ value: "Brand-based", label: "Strategy" }, { value: "Awareness", label: "Marketing Goal" }],
        items: ["Brand Introduction", "Brand Story", "Product / Service Education", "Lifestyle / Use Case", "Educational Content", "Engagement Content", "CTA / Brand Action"].map((title, index) => ({ label: `DAY ${String(index + 1).padStart(2, "0")}`, title })),
      },
      {
        id: "output", type: "gallery", variant: "output", eyebrow: "06 · OUTPUT", title: "從策略，變成下一步可以執行的內容。",
        body: "每筆 Content Plan 將策略展開為 Platform、Content Pillar、Content Angle、Social Copy、CTA 與 Hashtags。",
        stats: [{ value: "Instagram", label: "01" }, { value: "Facebook", label: "02" }, { value: "Threads", label: "03" }],
        image: { src: "/images/brand-radar/03_content-planner.png", alt: "Brand Radar AI Content Planner showing brand context, content strategy selection and seven-day content plan", caption: "CREATE · 建立：品牌 context、策略選擇與行銷目標，轉換成七天可執行內容。" },
        highlight: "Safety by Design", footer: "內容生成避免自行創造品牌未提供的產品名稱、價格、折扣、客戶評價、銷售數據與醫療療效。",
      },
      {
        id: "workflow-transformation", type: "comparison", variant: "workflow", eyebrow: "07 · WORKFLOW", title: "AI 改變的，不只是寫文案的速度。",
        items: [{ label: "BEFORE", title: "Fragmented Marketing Workflow", description: "搜尋趨勢 → 人工整理 → 憑經驗判斷品牌適合度 → 重看品牌資料 → 決定內容方向 → 規劃一週主題 → 逐篇產出", details: ["資訊分散", "判斷標準不一致", "容易被熱門話題帶著走", "每次規劃重新開始"] }, { label: "AFTER", title: "Brand Radar AI Workflow", description: "Trend Radar → Trend Score → Brand Fit → Strategy Decision → Brand Intelligence → Marketing Goal → 7-Day Plan", details: ["集中趨勢資訊", "建立 Brand Fit 初步篩選", "保留「不追熱門」的策略選項", "品牌 context 可重複使用", "決策直接銜接執行"] }],
        highlight: "From fragmented tasks to a structured decision workflow.", footer: "不是把所有行銷判斷交給 AI，而是把原本零散的工作整理成可以重複執行的決策流程。",
      },
      {
        id: "business-value", type: "quote", variant: "value", eyebrow: "08 · BUSINESS VALUE", title: "從「AI 幫我寫什麼」，到「AI 幫我判斷現在應該做什麼」。",
        body: "Brand Radar AI 串接趨勢探索、品牌契合度、Brand Intelligence 與內容規劃，將 AI 從單次內容生成工具，轉變為行銷決策流程中的輔助角色。",
        image: { src: "/images/brand-radar/04_analytics_result.png", alt: "Brand Radar AI Analytics dashboard showing seven-day performance comparison, platform analysis, marketing insights and next actions", caption: "LEARN · 學習：以期間、平台與內容類型比較形成下一步建議。", note: "DEMO DATA · 示範資料｜此數據用於產品流程驗證，非真實客戶成效。" },
        highlight: "AI 提供決策支援；最終策略與內容品質，仍由行銷人員掌握。",
      },
      {
        id: "my-role", type: "text", variant: "roles", eyebrow: "09 · MY ROLE · 我的角色", title: "What I Designed · 我的設計與實作",
        items: [{ title: "Problem Framing", description: "將「AI 寫社群文案」重新定義為行銷決策問題。" }, { title: "Marketing Workflow Design", description: "設計 Discover → Evaluate → Decide → Execute 工作流程。" }, { title: "Trend & Brand Fit Logic", description: "定義 Trend Score 與 Brand Fit 的不同角色。" }, { title: "Brand Intelligence Schema", description: "將品牌定位、受眾、Voice、Key Messages 等資訊結構化。" }, { title: "Content Strategy", description: "設計 Trend-based / Brand-based 雙策略與七個 Content Pillars。" }, { title: "UX / Demo Flow", description: "規劃 Dashboard、Trend Radar、Content Planner、Analytics 操作流程。" }, { title: "AI-assisted Development", description: "透過 AI-assisted coding 完成 MVP 實作、迭代與驗證。" }, { title: "Testing & Validation", description: "建立 backend tests、production build 與 browser smoke test 驗證流程。" }],
      },
      {
        id: "tech-validation", type: "stats", variant: "validation", eyebrow: "10 · BUILD & VALIDATION", title: "Built as a testable MVP.",
        items: [{ label: "FRONTEND", title: "React · TypeScript · Vite · Recharts" }, { label: "BACKEND", title: "Python · FastAPI · Pydantic" }, { label: "CORE MODULES", title: "Trend Radar · Brand Fit · Content Planner · Analytics · Dashboard" }, { label: "PROJECT TYPE", title: "Portfolio MVP · AI-assisted Development" }],
        stats: [{ value: "58", label: "Backend Tests Passed" }, { value: "✓", label: "TypeScript Validation Passed" }, { value: "✓", label: "Production Build Passed" }, { value: "✓", label: "Browser Smoke Test Passed" }],
      },
    ],
    closing: {
      eyebrow: "CLOSING NOTE", title: "從問題定義，到可以操作的 MVP。",
      body: "Brand Radar AI 是一次將行銷流程、AI 決策邏輯與產品實作整合在同一個案例中的探索。",
      primaryCta: { label: "Back to Work", href: "/#work" }, contactCta: { label: "Start a conversation · 開始聊聊", href: "#contact" },
    },
  },
];

export const getProjectBySlug = (slug?: string) => projects.find((project) => project.slug === slug);
