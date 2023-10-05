/* eslint-disable react/prop-types */
import useNavigation from './../Hooks/useNavigation'

export default function Route({ path, children }) {
    const { currentPath } = useNavigation()

    return (
        <>
            {(currentPath === path) && children}
        </>
    )
}
