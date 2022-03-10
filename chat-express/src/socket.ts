import { Server } from "socket.io";
import server from "../server";

const io: Server = new Server(server, {
  cors: { origin: "http://localhost:3000" },
});

export default io;
