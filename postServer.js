const { createServer } = require("node:http");
const port = 3000;

const server = createServer((req, res) => {
  console.log("url :", req.url, "method:", req.method);

  if (req.url === "/signup" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Received data, ", body);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "Data recieved!!", data: body }));
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("not found");
  }
});

server.listen(port, () => {
  console.log(`server running on port number: ${port}`);
});
