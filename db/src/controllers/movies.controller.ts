import { Request, Response } from "express";
import { MoviesService } from "../services/movies.service";
import { IMoviesFiltersResponse, IMoviesRequest, IMoviesResponse } from "../models/moviesRequest";

const moviesService = new MoviesService()

class MoviesController {
    async getMovies(req: Request, res: Response) {
        try {
            const moviesResponse = <IMoviesResponse>{
                movies: await moviesService.getMovies(setMoviesReqConfigs(req)),
                count: await moviesService.getMoviesCount(setMoviesReqConfigs(req)),
            }

            console.log(moviesResponse)

            res.json(moviesResponse)
        } catch (e) {
            res.send(e)
        }
    }

    async getMoviesFilters(req: Request, res: Response) {
        try {
            const genres = await moviesService.getMoviesGenres()
            const languages = await moviesService.getMoviesLanguages()

            const moviesFilters = <IMoviesFiltersResponse>{
                genres: genres.map(genre => genre.dataValues.unique_genre),
                languages: languages.map(language => language.dataValues.unique_language)
            }

            console.log(moviesFilters)

            res.json(moviesFilters)
        } catch (e) {
            res.send(e)
        }
    }

    async getMovie(req: Request, res: Response) {
        try {
            const id = req.params.id
            res.json(await moviesService.getMovie(+id))
        } catch (e) {
            res.send(e)
        }
    }
}

function setMoviesReqConfigs(req: Request) {
    const { sortBy = 'rating', dir = 'DESC', genre, country, language, page = 1 } = req.query

    const params: IMoviesRequest = {
        sort: {
            sortBy: <string>sortBy,
            dir: <string>dir
        },
        filter: {
            genre: <string[]>genre,
            country: <string[]>country,
            language: <string[]>language
        },
        page: <number>page
    }

    removeEmptyElem(params.filter)
    return params
}

function removeEmptyElem<T>(obj: T): T {
    for (const key in obj) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
            delete obj[key];
        }
    }
    return obj
}


export { MoviesController }