import { useEffect } from 'react'
import { useMovies } from '../../hooks/Movies'
import './movie-page.scss'
import { useNavigation, useParams } from 'react-router-dom'

export function MoviePage() {
    const { movie, getMovie } = useMovies()
    const { id } = useParams()

    useEffect(() => {
        if (id !== undefined) {
            getMovie(id)
        }
    }, [])

    return (
        <div className="movie-page">
            {movie && <>
                <div className="mp-poster">img</div>
                <ul className='mp-info'>
                    <li><h1>{movie.title}</h1></li>
                    <li>Genre: {movie.genre}</li>
                    <li>Release Date: {new Date(movie.release_date).getFullYear()}</li>
                    <li>Rating: {movie.rating}</li>
                    <li>Director: {movie.director}</li>
                    <li>Language: {movie.language}</li>
                    <li>Duration: {movie.duration}</li>
                    <li>Country: {movie.country}</li>
                </ul>
            </>}
        </div>
    )
}