import { Movie } from "./movie"

export interface IMoviesRequest {
    sort: {
        sortBy: string
        dir: string
    }
    filter: {
        genre?: string[]
        language?: string[]
        country?: string[]
    },
    page: number
}

export interface IMoviesResponse {
    movies: Movie[],
    count: number
}

export interface IMoviesFiltersResponse {
    genres: string[]
}