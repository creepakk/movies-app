import { useState } from 'react'
import './select-pages.scss'

interface SelectPagesProps {
    selected: number,
    pagesCount: number,
    onSelect: Function
}

export function SelectPages({ selected, pagesCount, onSelect }: SelectPagesProps) {
    const [selectedPage, setSelectedPage] = useState<number>(selected)
    const pagesButtons = []

    const onSelectHandler = (value: number) => {
        setSelectedPage(value)
        onSelect(value)
    }


    for (let i = 1; i <= pagesCount; i++) {
        const selectedPageClass = selectedPage == i ? 'sp-b-selected' : ''

        const button =
            <button
                onClick={() => onSelectHandler(i)}
                key={i}
                className={selectedPageClass}>
                {i}
            </button>

        pagesButtons[i] = button
    }

    const pagesButtonsSlice = selectedPage <= 3 ? pagesButtons.slice(1, 8) :
        selectedPage > pagesCount - 3 ? pagesButtons.slice(pagesCount - 6) :
            pagesButtons.slice(selectedPage - 3, selectedPage + 4)

    // console.log(pagesButtonsSlice)

    return (
        <div className='select-pages'>
            <button onClick={() => onSelectHandler(1)}>
                &lt;&lt;
            </button>
            <button onClick={() => onSelectHandler(selectedPage - 1)}>
                &lt;
            </button>
            {pagesButtonsSlice}
            <button onClick={() => onSelectHandler(selectedPage + 1)}>
                &gt;
            </button>
            <button onClick={() => onSelectHandler(pagesCount)}>
                &gt;&gt;
            </button>
        </div>
    )
}