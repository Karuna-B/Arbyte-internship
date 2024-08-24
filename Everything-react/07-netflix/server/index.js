const express = require("express");
const movies = require("./movies.json");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello There");
});

app.get("/movies/list", (req, res) => {
  return res.send(movies);
});

app.listen(8080, () => {
  console.log("Now Listening on port 8080");
});
