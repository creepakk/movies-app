import { Router } from "express";
import { MoviesController } from "../controllers/movies.controller";

const router: Router = Router()
const moviesController = new MoviesController()

router.get('/movie/:id', moviesController.getMovie)
router.get('/movies', moviesController.getMovies)
router.get('/movies/filters', moviesController.getMoviesFilters)

export { router }