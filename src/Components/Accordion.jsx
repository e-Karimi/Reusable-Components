/* eslint-disable react/prop-types */
import { BiSolidChevronDown, BiSolidChevronLeft } from 'react-icons/bi'

export default function Accordion({ label, content, index, handelToggle, expandedIndex }) {


    return (
        <div className='w-full select-none'>
            <header onClick={() => handelToggle(index)}
                className="text-sm flex items-center justify-between cursor-pointer p-1 border-b bg-slate-50">
                {label}
                {
                    expandedIndex == index ? <BiSolidChevronDown /> : <BiSolidChevronLeft />
                }
            </header>
            {expandedIndex == index &&
                <div className="bg-white text-xs p-3">
                    {content}
                </div>
            }
        </div>
    )
}
