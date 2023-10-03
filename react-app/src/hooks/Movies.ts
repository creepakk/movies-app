import { useState } from "react"
import { IFilterOption, IMovie, IMoviesFiltersResponse, IMoviesRequest, IMoviesResponse } from "../models"
import axios, { AxiosError } from "axios"

export function useMovies() {
    const [movies, setMovies] = useState<IMovie[]>()
    const [moviesCount, setMoviesCount] = useState<number>()

    const [moviesGenres, setMoviesGenres] = useState<IFilterOption[]>([])
    const [moviesLanguages, setMoviesLanguages] = useState<IFilterOption[]>([])

    const [movie, setMovie] = useState<IMovie>()

    const getFilterOption = (value: string): IFilterOption => {
        return {
            value: value,
            label: value.replace(value[0], value[0].toUpperCase())
        }
    }

    const baseUrl = 'http://localhost:8080/api/movie'

    async function getMovies(reqParams: IMoviesRequest) {
        try {
            const res = await axios
                .get<IMoviesResponse>(baseUrl + 's', {
                    params: reqParams
                })
            const { movies, count } = res.data

            setMovies(movies)
            setMoviesCount(count)
        } catch (e) {
            const error = e as AxiosError
            console.log(error)
        }
    }

    async function getMoviesFilters() {
        try {
            const res = await axios
                .get<IMoviesFiltersResponse>(baseUrl + 's/filters')
            const { genres, languages } = res.data
            console.log(genres, languages)

            setMoviesLanguages(languages.map(s => getFilterOption(s)))
            setMoviesGenres(genres.map(s => getFilterOption(s)))
        } catch (e) {
            const error = e as AxiosError
            console.log(error)
        }
    }

    async function getMovie(id: string) {
        try {
            const res = await axios.get<IMovie>(`${baseUrl}/${id}`)
            const movie = res.data

            if (!movie) {
                console.log('404')
            } else {
                setMovie(movie)
            }
        } catch (e) {
            const error = e as AxiosError
            console.log(error)
        }
    }

    return {
        movie,
        movies,
        moviesGenres,
        moviesLanguages,
        moviesCount,
        getMovies,
        getMoviesFilters,
        getMovie
    }
}

