import { useEffect } from "react"

export function IndexPage() {
    const title = 'Index Page'

    useEffect(() => {
        document.title = title
    }, [])

    return (
        <div>
            <p>ok</p>
        </div>
    )
}