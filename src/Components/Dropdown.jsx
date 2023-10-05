/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function Dropdown({ options }) {
    const [selectedValue, setSelectedValue] = useState('-1')

    return (
        <>
            <select name="" value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="border w-60 p-1 cursor-pointer outline-0">
                <option value="-1">Select a color...</option>
                {
                    options.map(option =>
                        <option key={option.value} value={option.value} >
                            {option.label}
                        </option>
                    )
                }
            </select>


        </>


    )
}
