import { Link } from 'react-router-dom'
import './header.scss'
import { useQuery } from '../../hooks/Query'

export function Header() {
    const { moviesReqParams, getQueryString } = useQuery()
    return (
        <header>
            <p><strong>Cinema</strong></p>
            <nav>
                <Link to={'/'}>Index</Link>
                <Link to={`/movies`}>Movies</Link>
            </nav>
        </header>
    )
}