import * as express from "express";
import * as bodyParser from "body-parser";
import PostController from "./posts/posts.controller";
import App from "./app";

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app = new App([new PostController()], 5000);

app.listen();
