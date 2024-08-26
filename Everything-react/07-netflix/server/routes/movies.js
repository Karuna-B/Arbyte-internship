const router = require("express").router;
const { prisma } = require("../db");

router.get("/movies/list", async (req, res) => {
  const offset = parseInt(req.query.offset);
  // const from = offset;
  // const to = from + 12;
  // const moviesSubset = [...movies].slice(from, to);
  // setTimeout(() => {
  //   return res.json({ movies: moviesSubset, count: movies.length });
  // }, 1000);

  const count = await prisma.movie.count();
  const movies = await prisma.movie.findMany({
    take: 12,
    skip: offset,
  });
  return res.json({ movies, count });
});

router.get("/movie/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await prisma.movie.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return res.send(movie);
});

module.exports = {
  router,
};
