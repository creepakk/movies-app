import { ChangeEvent, useState } from "react"
import { IFilterOption } from "../../models"
import './select-filter.scss'


interface SelectFilterProps {
    selected: string[]
    options: IFilterOption[]
    label: string
    onSelect: Function
}

export function SelectFilter({ selected, options, label, onSelect }: SelectFilterProps) {
    const selectedOptions = new Set(selected)
    // const [isOpen, setIsOpen] = useState(false)

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const option = event.target.value

        if (selectedOptions.has(option)) {
            selectedOptions.delete(option)
        } else {
            selectedOptions.add(option)
        }

        onSelect(Array.from(selectedOptions))
    }

    if (options.length == 0) {
        return <></>
    }

    // if (options.length > 10) {
    //     return (
    //         <div className="filter-select">
    //             <span>{label}</span>
    //             {isOpen ?
    //                 options.map(option => (
    //                     <div className="fs-option" key={option.label}>
    //                         <input type="checkbox"
    //                             checked={selectedOptions.has(option.value)}
    //                             onChange={changeHandler}
    //                             id={'mSelect' + option.value}
    //                             value={option.value} />
    //                         <label htmlFor={'mSelect' + option.value}>
    //                             {option.label}
    //                         </label>
    //                     </div>
    //                 )) :

    //                 options.slice(0, 10).map(option => (
    //                     <div className="fs-option" key={option.label}>
    //                         <input type="checkbox"
    //                             checked={selectedOptions.has(option.value)}
    //                             onChange={changeHandler}
    //                             id={'mSelect' + option.value}
    //                             value={option.value} />
    //                         <label htmlFor={'mSelect' + option.value}>
    //                             {option.label}
    //                         </label>
    //                     </div>
    //                 ))
    //             }
    //             <button onClick={() => setIsOpen(!isOpen)}>
    //                 {isOpen ? "Collapse" : "Expand"}
    //             </button>
    //         </div>
    //     )
    // } else {
    return (
        <div className="filter-select">
            <span><strong>{label}</strong></span>
            <div className="fs-options">
                {options.map(option => (
                    <div className="fs-option" key={option.label}>
                        <input type="checkbox"
                            checked={selectedOptions.has(option.value)}
                            onChange={changeHandler}
                            id={'mSelect' + option.value}
                            value={option.value} />
                        <label htmlFor={'mSelect' + option.value}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
    // }
}