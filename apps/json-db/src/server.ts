import http from "node:http";
import { Database } from "./database";

const database = new Database();

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    const users = database.select("users");
    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;
    const user = {
      id: 1,
      name,
      email,
    };

    database.insert("users", user);

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
