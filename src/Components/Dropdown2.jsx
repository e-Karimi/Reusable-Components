/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import { BiSolidChevronDown } from 'react-icons/bi'
import Panel from './Panel'
import useOutsideClick from '../Hooks/useOutsideClick'

export default function Dropdown2({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropElem = useRef()
    const handleClose = () => setIsOpen(false)
    
    useOutsideClick(dropElem,handleClose )

    const handleClickOption = (option) => {
        onChange(option)
        setIsOpen(false)
    }


    return (
        <div ref={dropElem} >
            <Panel className="w-52 border flex items-center justify-between"
                onClick={() => setIsOpen(prev => !prev)}>
                <span>  {value?.label || 'Select...'}</span>
                <span className=""><BiSolidChevronDown /> </span>
            </Panel>
            {
                isOpen &&
                <div className="w-52 border-x border-b ">
                    {
                        options.map(option =>
                            <Panel key={option.value}
                                className=" hover:bg-slate-100"
                                onClick={() => handleClickOption(option)}
                            >
                                {option.label}
                            </Panel>
                        )
                    }
                </div>
            }
        </div>
    )
}

