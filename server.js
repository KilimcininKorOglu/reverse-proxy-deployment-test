const http = require("http");

const PORT = process.env.PORT || 3000;

const now = () =>
  new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

http
  .createServer((_req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Hello World\n${now()}\nserver boot ${process.uptime().toFixed(0)}s ago\n`);
  })
  .listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
