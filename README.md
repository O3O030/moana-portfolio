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

## Contact form / Formspree

聯絡信箱與 Modal 文案位於 `src/content/site.ts`。目前正式聯絡信箱為 `onaku2022@gmail.com`。

1. 在 [Formspree](https://formspree.io/) 建立 form。
2. 將收件地址設定並驗證為 `onaku2022@gmail.com`。
3. 複製 `.env.example` 為 `.env.local`。
4. 將 Formspree 提供的完整 endpoint 填入 `VITE_CONTACT_FORM_ENDPOINT`，不要把私密設定提交至 Git。
5. 執行 `npm run dev`，開啟聯絡視窗並送出測試訊息。
6. 部署時，在託管平台設定同名的 `VITE_CONTACT_FORM_ENDPOINT` environment variable，再重新建置。

如果 endpoint 尚未設定，Modal、欄位驗證與鍵盤操作仍可正常使用；送出時會顯示設定提示，不會開啟郵件程式或 crash。

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
