/** @format */

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  try {
    console.log(`server listening on port ${app.get("port")}!`);
  } catch (err) {
    console.log("Connection falied", err);
  }
});
