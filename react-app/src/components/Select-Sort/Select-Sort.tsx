import { useState } from "react";
import { ISortOption } from "../../models"
import "./select-sort.scss"
import { useQuery } from "../../hooks/Query";

interface CustomSelectProps {
    onSelect: Function,
}

const sortOptions: ISortOption[] = [
    { value: { sortBy: 'rating', dir: 'desc' }, label: 'Rating descending' },
    { value: { sortBy: 'rating', dir: 'asc' }, label: 'Rating ascending' },
    { value: { sortBy: 'release_date', dir: 'desc' }, label: 'Release date descending' },
    { value: { sortBy: 'release_date', dir: 'asc' }, label: 'Release date ascending' },
    { value: { sortBy: 'duration', dir: 'desc' }, label: 'Duration descending' },
    { value: { sortBy: 'duration', dir: 'asc' }, label: 'Duration ascending' },
]

export function SelectSort({ onSelect }: CustomSelectProps) {
    const { moviesReqParams } = useQuery()
    const [isOpen, setIsOpen] = useState(false)

    const [selectedOption, setSelectedOption] = useState<ISortOption>(
        sortOptions.find(v =>
            moviesReqParams.sortBy == v.value.sortBy &&
            moviesReqParams.dir == v.value.dir
        ) || sortOptions[0]
    )

    const handleOptionClick = (option: ISortOption) => {
        setSelectedOption(option)
        setIsOpen(false)
        onSelect(option)
    };

    return (
        <div className="select-sort">
            <button onClick={() => setIsOpen(!isOpen)}>{selectedOption.label}</button>

            {isOpen &&
                <div className="ss-options">
                    {isOpen && sortOptions.map((option) => (
                        <button
                            key={option.label}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            }
        </div >
    )
}