import http from "http"

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
})

server.listen(3000, ()=> {
  console.log(`Server running at http://localhost:${3000}`);
})