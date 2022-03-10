import express, { Application } from "express";
import bodyParser from "body-parser";
import messageRoutes from "./routes/message";
import channelRoutes from "./routes/channel";
import userRoutes from "./routes/user";

const app: Application = express();

app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-access-token");
  next();
});

// routes
app.use("/messages", messageRoutes);
app.use("/channel", channelRoutes);
app.use("/auth", userRoutes);

export default app;
