import PropTypes from 'prop-types';
import classname from 'classnames'


export default function Button({ role, rounded, outline, icon, children, className, ...rest }) {


    //* set className for the button
    const baseClassNames = 'flex items-center border-2 font-semibold text-sm  py-1 px-3 cursor-pointer'
    const finalClassNames = classname(className, baseClassNames, {
        'bg-blue-300 border-blue-300 hover:bg-blue-200 hover:border-blue-300': (role === 'primary'),
        'bg-red-400 border-red-400  hover:bg-red-200 hover:border-red-400': (role === 'danger'),
        'bg-orange-300 border-orange-300 hover:bg-orange-100 hover:border-orange-300': (role === 'warning'),
        'bg-green-400 border-green-400 hover:bg-green-200 hover:border-green-400': (role === 'success'),
        'bg-slate-300 border-slate-300 hover:bg-slate-200 hover:border-slate-300': (role === 'secondary'),
        'bg-white': outline,
        'text-slate-800': !outline,
        'text-blue-600': ((role === 'primary') && outline),
        'text-red-500': ((role === 'danger') && outline),
        'text-orange-500': ((role === 'warning') && outline),
        'text-green-500': ((role === 'success') && outline),
        'text-slate-500': ((role === 'secondary') && outline),
        'rounded-lg': rounded,
    })

    return (
        <button className={finalClassNames} {...rest} >
            <span className='mr-[2px] text-xs text-slate-700'>{icon}</span> {children}
        </button>
    )
}


Button.propTypes = {
    role: PropTypes.oneOf(['primary', 'success', 'danger', 'secondary', 'warning']),
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    icon: PropTypes.element,
    rest: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,

}

