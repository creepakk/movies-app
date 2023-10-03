import './movie-item.scss'
import { IMovie } from "../../models"
import { Link } from 'react-router-dom'
// import '../../../public/img/rating-icon.png'

interface MovieItemProps {
    movie: IMovie
}

export function MovieItem({ movie }: MovieItemProps) {
    const release_date = new Date(movie.release_date).getFullYear()

    return (
        <Link to={`/movie/${movie.id}`} className="movie-item">
            <div className="movie-item-poster">
                <span>
                    {movie.rating}
                    <img src="/img/rating-icon.png" alt="" />

                </span>
                img</div>
            <div className="movie-item-info">
                <p>{movie.title}</p>
                <p className='details'>
                    {release_date}, {movie.country}, {movie.genre}
                </p>
            </div>
        </Link>
    )
}