import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const getAddMovie = (req, res) => {
  res.render("addMovie", { pageTitle: "Add Movies!!" });
};

export const postAddMovie = (req, res) => {
  const {
    body: { title, synopsis, genre },
  } = req;

  const newMovieInfo = {
    title: String(title),
    synopsis: String(synopsis),
    genres: genre.split(","),
  };
  addMovie(newMovieInfo);

  res.redirect("/");
};

export const movieDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};
