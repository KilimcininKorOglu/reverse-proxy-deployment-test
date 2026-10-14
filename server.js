const http = require("http");

const PORT = process.env.PORT || 3000;

http
  .createServer((_req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
