import express, { Application } from "express";
import logger from "loglevel";
import "dotenv/config";
import sequelize from "./db/database";

const app: Application = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), async () => {
  try {
    logger.warn(`server listening on port ${app.get("port")}!`);
    await sequelize.sync({ force: false });
    logger.warn("Connection success");
  } catch (err) {
    logger.error("Connection falied", err);
  }
});
export default app;
