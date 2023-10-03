import './movies-page.scss'
import { useEffect } from "react"
import { SelectFilter } from "../../components/Select-Filter/Select-Filter"
import { useMovies } from "../../hooks/Movies"
import { useQuery } from "../../hooks/Query"

interface MPFiltersProps {
    onAccept: Function
}

export function MPFilters({ onAccept }: MPFiltersProps) {
    const { moviesReqParams, setMoviesReqParams } = useQuery()
    const { getMoviesFilters, moviesGenres, moviesLanguages } = useMovies()

    const selectedGenres = moviesReqParams.genre
    const selectedLanguages = moviesReqParams.language

    const genresSelectHandler = (values: string[]) => {
        setMoviesReqParams({
            ...moviesReqParams,
            genre: values
        })
    }
    const languagesSelectHandler = (values: string[]) => {
        setMoviesReqParams({
            ...moviesReqParams,
            language: values
        })
    }

    const acceptHandler = () => {
        // console.log(selectedGenres, selectedLanguages)
        onAccept(moviesReqParams)
    }

    useEffect(() => {
        getMoviesFilters()
    }, [])
    return (
        <div className='mc-filters'>
            <SelectFilter
                selected={selectedGenres}
                options={moviesGenres}
                label="Genres"
                onSelect={genresSelectHandler} />
            <SelectFilter
                selected={selectedLanguages}
                options={moviesLanguages}
                label="Languages"
                onSelect={languagesSelectHandler} />
            <button onClick={acceptHandler}>Accept</button>
            <button>Delete Filters</button>
        </div>
    )
}