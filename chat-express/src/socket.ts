import { Server, Socket } from "socket.io";
import server from "../server";

const io: Server = new Server().listen(server);

io.on("connetion", (socket: Socket) => {
  socket.on("socket connection", () => {});
});
