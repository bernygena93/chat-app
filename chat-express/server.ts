import http, { Server } from "http";
import logger from "loglevel";
import "dotenv/config";
import sequelize from "./src/database/database";
import app from "./src/app";

const server: Server = http.createServer(app);

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
