# IDLIX Legal (idlix.fun)

合法替代/指南站，Astro 静态站。内容在 `src/data/site.json`（由 `../_shared/build.mjs` 从 `../_shared/content/idlix.mjs` 生成，改内容请改 content 再重新生成，或直接改 json）。

## 上线前必做
1. `src/config/ads.ts`：填 Adsterra 代码（Sites → 添加 idlix.fun → Get code）。为空则不加载任何广告。
2. 邮箱：页面写的是 `contact@idlix.fun`，在 Cloudflare Email Routing 配置转发，否则法律页的联系方式无效。
3. 部署：Cloudflare Pages，构建命令 `npm run build`，输出目录 `dist`，绑定 idlix.fun（301 www → 根域）。
4. 提交 sitemap：https://idlix.fun/sitemap-index.xml 到 Google Search Console 和 Bing Webmaster。

## 日常维护
- `npm run check-links`：检查平台官方链接是否还活着（每月跑一次）。
- 平台目录、价格、转播权会变，改完同步更新 `updated` / `updatedLabel`（页面显示“最后更新”）。
- 开发：`npm run dev`；构建：`npm run build`。
