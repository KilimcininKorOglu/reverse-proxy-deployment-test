const http = require("http");

const PORT = process.env.PORT || 3000;
const REPO = "https://github.com/KilimcininKorOglu/r3v3rs3";

// tr-TR renders the numeric format with dots: 15.10.2026 21:22:10.
const now = () =>
  new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

// Human readable uptime: every unit from a year down to a second, singular or plural.
const uptime = () => {
  const units = [
    [31536000, "year"],
    [2592000, "month"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];
  let rest = Math.floor(process.uptime());
  const parts = [];
  for (const [size, name] of units) {
    const n = Math.floor(rest / size);
    if (n > 0) parts.push(`${n} ${name}${n === 1 ? "" : "s"}`);
    rest %= size;
  }
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
<h1>Hello World
<br>
A minimal Node.js Hello World app for testing <a href="${REPO}">r3v3rs3</a> deploymentsh1>
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
