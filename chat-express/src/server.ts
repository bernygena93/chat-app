import express from "express";
import "dotenv";
import logger from "loglevel";

const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  try {
    logger.warn(`server listening on port ${app.get("port")}!`);
  } catch (err) {
    logger.error("Connection falied", err);
  }
});
export default app;
