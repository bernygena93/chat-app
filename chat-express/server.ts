import http, { Server } from "http";
import "dotenv/config";
import { Socket } from "socket.io";
import sequelize from "./src/database/database";
import app from "./src/app";
import io from "./src/socket";
import logger from "./src/utils/logger";

const server: Server = http.createServer(app);

server.listen(app.get("port"), async () => {
  try {
    logger.info(`server listening on port ${app.get("port")}!`);
    await sequelize.sync({ force: false });
    logger.info("Connection success");
  } catch (err) {
    logger.info("Connection falied", err);
  }
});

io.on("connection", (socket: Socket) => {
  socket.on("socket connection", () => {
    logger.info("user Connected");
  });
});

export default server;
