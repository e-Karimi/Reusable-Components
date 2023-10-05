/* eslint-disable react/prop-types */
import classNames from 'classnames'


export default function Panel({ children, className, ...rest }) {

    const finalClassName = classNames('cursor-pointer py-1 px-2 select-none', className)

    return (
        <div  {...rest} className={finalClassName}>
            {children}
        </div>
    )
}
