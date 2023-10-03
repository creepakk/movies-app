import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IMoviesRequest } from "../models";

export function useQuery() {
    const location = useLocation()

    const query = new URLSearchParams(location.search)

    const [moviesReqParams, setMoviesReqParams] = useState<IMoviesRequest>({
        sortBy: query.get('sortBy') || 'rating',
        dir: query.get('dir') || 'desc',
        genre: query.getAll('genre') || [],
        language: query.getAll('language') || [],
        page: +(query.get('page') || 1)
    })

    function getQueryString(reqParams: Object) {
        return Object.entries(reqParams)
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map(v => `${key}=${encodeURIComponent(v)}`).join('&')
                }
                return `${key}=${value}`
            })
            .join('&')
    }

    return {
        moviesReqParams,
        setMoviesReqParams,
        getQueryString
    }
}