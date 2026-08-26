# Moana Portfolio — Phase 1

一個以 React、TypeScript、Vite 與 React Router 建立的可維護個人作品集。主要文字與專案資料集中於 typed content files，頁面只負責呈現。

## 開始使用

```bash
npm install
npm run dev
```

正式建置：`npm run build`

## How to edit content

- 改個人資料、Hero、About、What I Do → `src/content/profile.ts`
- 改工作經歷 → `src/content/experience.ts`
- 改技能 → `src/content/skills.ts`
- 新增或修改作品 → `src/content/projects.ts`
- 改導覽、聯絡資訊、CTA、社群連結 → `src/content/site.ts`
- 改影像作品與影片網址 → `src/content/videos.ts`
- 新增圖片 → `public/images/`，再於 content file 使用 `/images/...` 路徑
- 共用資料型別 → `src/types/content.ts`

未填寫的選填欄位不會讓網站停止運作；工作經歷或作品陣列也可暫時留空。

## How to add a new project

1. 在 `src/content/projects.ts` 的 `projects` 陣列新增一筆符合 `Project` 型別的資料。
2. 設定唯一的 `id` 與 `slug`，例如 `project-b`。
3. 將圖片放進 `public/images/projects/project-b/`，並在該筆資料填入路徑。
4. 依需要填寫 `caseStudySections`；現有通用 renderer 支援 text、image、stats、process、comparison、quote、gallery。
5. 完成後直接開啟 `/projects/project-b`；不必新增 route 或頁面 component。

設定 `featured: true` 後，該作品會自動出現在首頁 Featured Work。

## Video Showcase

在 `src/content/videos.ts` 的 `videoProjects` 新增或修改資料。未設定 `videoUrl` 時會顯示 Coming Soon，不會建立空白或損壞的播放器；加入 `videoUrl` 與選填的 `poster` 後，卡片會自動顯示可操作的影片。

## Contact form / Google Sheets

聯絡信箱與 Modal 文案位於 `src/content/site.ts`。目前正式聯絡信箱為 `onaku2022@gmail.com`。

1. 部署 Google Apps Script Web App 並取得 `/exec` endpoint。
2. 確認 Web App 可將 JSON submission 寫入 Google Sheets。
3. 複製 `.env.example` 為 `.env.local`。
4. 本機 Pages Functions 測試時在已被 Git 忽略的 `.dev.vars` 設定 `CONTACT_FORM_ENDPOINT`，不要把正式 endpoint 提交至 Git。
5. 瀏覽器會將 JSON 送至同源 `/api/contact`，Pages Function 再轉送至 Google Apps Script。
6. 部署時，在 Cloudflare Pages Variables and Secrets 設定 `CONTACT_FORM_ENDPOINT`，再重新部署。

如果 endpoint 尚未設定或轉送失敗，表單會保留輸入內容並顯示直接 Email fallback，不會開啟郵件程式或 crash。

## 目錄

```text
src/
  components/     共用 UI 與通用 Case Study renderer
  content/        主要內容編輯區（含 videos.ts）
  pages/          首頁、動態專案頁、404
  styles/         Design tokens 與 responsive styles
  types/          Content TypeScript definitions
public/
  images/         專案圖片與網站圖像
```
