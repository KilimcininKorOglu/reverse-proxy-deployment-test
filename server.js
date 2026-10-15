const http = require("http");

const PORT = process.env.PORT || 3000;
const REPO = "https://github.com/KilimcininKorOglu/r3v3rs3";

// tr-TR renders the numeric format with dots: 15.10.2026 21:22:10.
const now = () =>
  new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

const uptime = () => {
  const s = Math.floor(process.uptime());
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const parts = [];
  if (h > 0) parts.push(`${h} hour${h === 1 ? "" : "s"}`);
  if (m > 0 || h > 0) parts.push(`${m} minute${m === 1 ? "" : "s"}`);
  parts.push(`${sec} second${sec === 1 ? "" : "s"}`);
  return parts.join(" ");
};

const page = () => `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello World - r3v3rs3 app deployment test</title>
<style>
  body { font-family: system-ui, sans-serif; margin: 3rem auto; max-width: 40rem;
         padding: 0 1rem; line-height: 1.6; color: #1a1a1a; }
  h1 { font-size: 1.4rem; }
  a { color: #0b57d0; }
  dl { display: grid; grid-template-columns: auto 1fr; gap: 0.25rem 1rem; }
  dt { font-weight: 600; }
  dd { margin: 0; }
</style>
</head>
<body>
<h1>Hello World - <a href="${REPO}">r3v3rs3</a> app deployment test</h1>
<p>Served through the <a href="${REPO}">r3v3rs3</a> reverse proxy.</p>
<dl>
  <dt>Now: </dt><dd>${now()} (Timezone: Europe/Istanbul)</dd>
  <dt>App Deploy: </dt><dd>${uptime()} ago</dd>
  <dt>Webhook: </dt><dd>dual webhook</dd>
</dl>
</body>
</html>
`;

http
  .createServer((_req, res) => {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.end(page());
  })
  .listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
