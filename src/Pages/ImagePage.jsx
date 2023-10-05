import { images } from './../data'
import { useState } from 'react'
import Image from './../Components/Image'

export default function ImagePage() {
    const [displayedId, setDisplayedId] = useState(null)

    const handelDisplayName = (id) => {
        setDisplayedId(prevDisplayedId => (prevDisplayedId === id) ? null : id)
    }


    return (
        <div className='p-5'>
            <div className="text-sm">
               * Click on the images in order to see its name
            </div>
            <div className="border rounded w-96 mt-10 flex gap-1">
                {
                    images.map(image =>
                        <Image
                            key={image.id}
                            {...image}
                            handelDisplayName={handelDisplayName}
                            displayedId={displayedId}
                        />
                    )
                }
            </div>
        </div>
    )
}
