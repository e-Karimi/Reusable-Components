/* eslint-disable react/prop-types */
import classNames from "classnames";
import useNavigation from './../Hooks/useNavigation'


export default function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation()


    const handleClick = (e) => {

        if (e.metaKey || e.ctrlKey) {
            return
        }

        e.preventDefault()
        navigate(to)


    }

    const classes = classNames(className, currentPath === to && activeClassName ,'underline decoration-solid text-xs mx-2 hover:text-blue-600')

    return (
        <a href={to} onClick={handleClick}  className={classes}  >
            {children}
        </a>
    )
}
