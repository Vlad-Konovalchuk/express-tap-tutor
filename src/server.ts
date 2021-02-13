import "dotenv/config";
import "reflect-metadata";
import { createConnection } from "typeorm";
import PostController from "./posts/posts.controller";
import App from "./app";
import config from "./ormConfig";

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log("Error while connecting to the database", error);
    return error;
  }

  const app = new App([new PostController()], process.env.PORT);
  app.listen();
})();
