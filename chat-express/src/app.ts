import express, { Application } from "express";
import bodyParser from "body-parser";
import messageRoutes from "./routes/message";
import channelRoutes from "./routes/channel";
import userRoutes from "./routes/user";

const app: Application = express();

app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());

// routes
app.use("/messages", messageRoutes);
app.use("/channel", channelRoutes);
app.use("/auth", userRoutes);

export default app;
