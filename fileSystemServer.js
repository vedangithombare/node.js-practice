const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const file = fs.createWriteStream("write.txt");
  file.write("new file, yayy   ");
  file.write("hey");
  file.write("new line");
  res.end("hello world");
});

server.listen(port, () => {
  console.log(`server running on port number: ${port}`);
});
