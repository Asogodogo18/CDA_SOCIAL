// Run with: node https-json-server.js

// Generate SSL keys: openssl req -nodes -new -x509 -keyout server.key -out server.cert

const jsonServer = require("json-server");
const https = require("https");
const path = require("path");
const fs = require("fs");
const pause = require("connect-pause"); // Install: npm install connect-pause
const db = require('./db/db.json')

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// server.use(pause(2000));
server.use(router);

// If using custom routes
//var routes = JSON.parse(fs.readFileSync('routes.json'));
//server.use(jsonServer.rewriter(routes));

const keyFile = path.join(__dirname, "server.key");
const certFile = path.join(__dirname, "server.cert");

// https
//   .createServer(
//     {
//       key: fs.readFileSync(keyFile),
//       cert: fs.readFileSync(certFile),
//     },
//     server
//   )
  server.listen(3001, () => {
    console.log("Go to http://localhost:3001/");
  });
