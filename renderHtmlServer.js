const { createServer } = require("node:http");
const fs = require("fs");
const port = 3000;

const server = createServer((req, res) => {
  if (req.url === "/home" && req.method === "GET") {
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream(__dirname + "/home.html").pipe(res);
  }
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
