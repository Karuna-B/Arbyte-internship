const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello There");
});

app.listen(8080, () => {
  console.log("Now Listening on port 8080");
});
