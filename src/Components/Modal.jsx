/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom'
import { useRef } from 'react'
import useOutsideClick from './../Hooks/useOutsideClick'
import classNames from 'classnames'

export default function Modal({ children, onClose, actionBar }) {
    const innerDiv = useRef()
    useOutsideClick(innerDiv, onClose)


    const outerClasses = classNames('fixed inset-0 bg-black/80 transition-all duration-300 select-none ')
    const innerClasses = classNames('border fixed left-[25%] right-[10%] top-[30%] max-w-sm max-h-52 d:inset-40 md:max-w-lg md:max-h-40 lg:max-w-lg lg:max-h-48 p-4 bg-stone-50 rounded')

    return ReactDOM.createPortal(
        <div >
            <div className={outerClasses}>
                <div ref={innerDiv} className={innerClasses}>
                    <div className="h-full flex flex-col justify-between">
                        <div className="text-sm md:text-base lg:text-lg text-justify mb-6 md:mb-0">{children}</div>
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,

        document.querySelector('.modal-container')

    )
}
