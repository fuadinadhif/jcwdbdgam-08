import http from "http";

const PORT: number = 8000;

const server = http.createServer((request, response) => {
  // endpoint untuk memeriksa health API
  if (request.url === "/health" && request.method === "GET") {
    // response headers
    response.writeHead(200, { "content-type": "application/json" });

    // response body
    response.write("API running!");

    // end response
    response.end();
  } else if (request.url === "/articles" && request.method === "GET") {
  } else if (request.url === "/articles" && request.method === "POST") {
  }
});

server.listen(PORT, () => {
  console.info(`Application run on port: ${PORT}`);
});
