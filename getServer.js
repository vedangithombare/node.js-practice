const { createServer } = require("node:http");
const port = 3000;

const server = createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end("welcome to home page!!");
  } else if (req.url === "/about") {
    res.writeHead(200);
    res.end("welcome to the about page!!!");
  } else {
    res.writeHead(404);
    res.end("page not found");
  }
});

server.listen(port, () => {
  console.log(` get method server listening on ${port}`);
});
