import http, { Server } from "http";
import express, { Application } from "express";
import logger from "loglevel";
import "dotenv/config";
import bodyParser from "body-parser";
import sequelize from "./database/database";
import messageRouter from "./route/message";

const app: Application = express();
const server: Server = http.createServer(app);

app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());

// routes
app.use("/messages", messageRouter);

server.listen(app.get("port"), async () => {
  try {
    logger.warn(`server listening on port ${app.get("port")}!`);
    await sequelize.sync({ force: false });
    logger.warn("Connection success");
  } catch (err) {
    logger.error("Connection falied", err);
  }
});

export default server;
