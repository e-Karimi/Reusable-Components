/* eslint-disable react/prop-types */

export default function Image({ id, name, src, handelDisplayName, displayedId }) {

    return (
        <div className="relative cursor-pointer" onClick={() => handelDisplayName(id)}>
            <img src={src} alt="image name" />

            {id === displayedId &&
                <div className="absolute top-2 left-2 font-medium text-stone-50">
                    * {name} *
                </div>
            }
        </div>
    )
}
