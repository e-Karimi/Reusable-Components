/* eslint-disable react/prop-types */
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'


export default function ArrowIcons() {

    return (
        <span className="flex flex-col justify-between text-xs text-sky-500">
            <span><BiSolidUpArrow /></span>
            <span><BiSolidDownArrow /></span>
        </span>
    )
}
