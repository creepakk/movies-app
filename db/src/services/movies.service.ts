import { sequelize } from '../../bootstrap/database'
import { Movie } from '../models/movie'
import { IMoviesRequest } from '../models/moviesRequest'

class MoviesService {
    getMovies(params: IMoviesRequest) {
        const movies = Movie.findAll({
            order: [[params.sort.sortBy, params.sort.dir]],
            where: params.filter,
            offset: (params.page - 1) * 20,
            limit: 20
        })

        return movies
    }
    getMoviesCount(params: IMoviesRequest) {
        const count = Movie.count({ where: params.filter })
        return count
    }
    getMoviesGenres() {
        const genres = Movie.findAll({
            attributes: [
                [sequelize.fn('DISTINCT', sequelize.col('genre')), 'unique_genre']
            ]
        })

        return genres
    }
    getMoviesLanguages() {
        const languages = Movie.findAll({
            attributes: [
                [sequelize.fn('DISTINCT', sequelize.col('language')), 'unique_language']
            ]
        })

        return languages
    }

    getMovie(id: number) {
        const movie = Movie.findByPk(id)
        return movie
    }
}

export { MoviesService }