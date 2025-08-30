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

/*  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end("welcome to home page!!");
  } else if (req.url === "/about") {
    res.writeHead(200);
    res.end("welcome to the about page!!!");
  } else {
    res.writeHead(404);
    res.end("page not found");
  }*/

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   const file = fs.createWriteStream("write.txt");
//   file.write("new file, yayy   ");
//   file.write("hey");
//   file.write("new line")
//   res.end("hello world");
// });

server.listen(port, () => {
  console.log(`server running on port number: ${port}`);
});
