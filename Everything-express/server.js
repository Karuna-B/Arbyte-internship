const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();

//setup static folder
//app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

let posts = [
  {
    id: 1,
    title: "Post1",
  },
  {
    id: 2,
    title: "Post2",
  },
  {
    id: 3,
    title: "Post3",
  },
];

//get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `A post with ${id} id was not found` });
  }
  res.status(200).json(post);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
