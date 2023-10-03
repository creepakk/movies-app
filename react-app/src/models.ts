export interface IMovie {
    id: number,
    title: string,
    release_date: Date,
    director: string,
    genre: string,
    rating: number,
    duration: number,
    language: string,
    country: string
}

export interface ISortOption {
    value: {
        sortBy: string
        dir: string
    }
    label: string
}

export interface IFilterOption {
    value: string,
    label: string
}
export interface IFilterOptionsArray {
    filterLabel: string,
    options: IFilterOption[]
}

export interface IMoviesRequest {
    sortBy: string,
    dir: string,
    genre: string[],
    language: string[],
    // country?: string,
    page: number

}
export interface IMoviesResponse {
    movies: IMovie[],
    count: number
}
export interface IMoviesFiltersResponse {
    genres: string[],
    languages: string[],
    // countries: string[]
}