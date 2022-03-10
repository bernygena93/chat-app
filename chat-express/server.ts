import http, { Server } from "http";
import "dotenv/config";
import { Socket } from "socket.io";
import sequelize from "./src/database/database";
import app from "./src/app";
import logger from "./src/utils/logger";
import socketIO from "./src/socket";

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
const io = socketIO.listen(server);

//-----------
// socket io action
io.on("connection", (socket: Socket) => {
  socket.on("room", (name, user) => {
    logger.info(`${user}!!, Welcome to ===> ${name}`);
  });
});
//---------

export default server;
