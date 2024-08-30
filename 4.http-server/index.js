const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  let log = `${Date.now()}: ${req.url} : New request received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home page");

        break;
      case "/about":
        const username = myUrl.query.name;
        res.end(`Hi ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search;
        res.end(`Here are your results for ${search}`);
        break;
      case "/contactus":
        res.end("Contact us");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});
myServer.listen(8001, () => console.log("Server started!"));
