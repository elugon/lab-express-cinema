const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies.hbs", {movies});
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render("movie-details.hbs", {movie});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;