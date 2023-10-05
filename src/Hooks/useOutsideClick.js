/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export default function useOutsideClick(refElem, callBack) {

    const handleOutsideClick = (event) => {

        if (!refElem.current) {
            return;
        }

        if (!refElem.current.contains(event.target)) {
            callBack()
        }
    }

    //*call and clean up the functions
    useEffect(() => {
        //avoid scrolling when the modal is shown
        document.body.classList.add('overflow-hidden')
        //outside click
        document.addEventListener('click', handleOutsideClick, true)

        return () => {
            document.removeEventListener('click', handleOutsideClick)
            document.body.classList.remove('overflow-hidden')
        }

    }, [])

}
