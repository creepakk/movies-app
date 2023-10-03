import './movies-page.scss'
import { useEffect } from "react"
import { MovieItem } from "../../components/Movie-Item/Movie-Item"
import { useMovies } from '../../hooks/Movies'
import { useLocation, useNavigate } from 'react-router-dom'
import { IMoviesRequest, ISortOption } from '../../models'
import { useQuery } from '../../hooks/Query'
import { SelectPages } from '../../components/Select-Pages/Select-Pages'
import { MPFilters } from './MP-Filters'
import { SelectSort } from '../../components/Select-Sort/Select-Sort'

export function MoviesPage() {
    const title = 'Movies Catalog'
    const { movies, moviesCount, getMovies } = useMovies()
    const { moviesReqParams, setMoviesReqParams, getQueryString } = useQuery()

    const pagesCount = moviesCount ? Math.ceil(moviesCount / 20) : 0

    const navigate = useNavigate()
    const location = useLocation()

    const onAcceptHandler = (params: IMoviesRequest) => {
        setMoviesReqParams(params)
        navigate(`/movies?${getQueryString(params)}`)
    }

    const onSelectSort = (option: ISortOption) => {
        const params: IMoviesRequest = {
            ...moviesReqParams,
            sortBy: option.value.sortBy,
            dir: option.value.dir
        }
        setMoviesReqParams(params)
        navigate(`/movies?${getQueryString(params)}`)
    }

    const onSelectPage = (page: number) => {
        const params: IMoviesRequest = { ...moviesReqParams, page: page }

        setMoviesReqParams(params)
        navigate(`/movies?${getQueryString(params)}`)
    }

    useEffect(() => {
        document.title = title
        getMovies(moviesReqParams)
    }, [location.search])

    useEffect(() => {
        getMovies(moviesReqParams)
        console.log(location)
    }, [])

    return (
        <>
            <div className='mc-header'>
                <p><strong>{title}</strong></p>
                <div>Sort By: <SelectSort onSelect={onSelectSort} /></div>
            </div>

            <div className='mc-and-filters'>
                <MPFilters onAccept={onAcceptHandler} />
                <div className="movies-catalog">
                    {movies && movies
                        .map((movie) => <MovieItem movie={movie} key={movie.id} />)}
                </div>
            </div>
            {/* <MPFilters onAccept={onAcceptHandler} />
            <div className="movies-catalog">
                {movies && movies
                    .map((movie) => <MovieItem movie={movie} key={movie.id} />)}
            </div> */}
            <SelectPages selected={moviesReqParams.page} onSelect={onSelectPage} pagesCount={pagesCount} />
        </>
    )
}