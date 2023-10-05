import { items } from './../data'
import { useState } from 'react'
import Accordion from './../Components/Accordion'


export default function AccordionPage() {
    const [expandedIndex, setExpandedIndex] = useState(null)


    const handelToggle = (index) => {
        setExpandedIndex(prevExpandedIndex => (prevExpandedIndex === index) ? null : index)
    }

    return (
        <div className='p-5'>
            <div className='border rounded w-96'>
                {
                    items.map((item, index) =>
                        <Accordion
                            key={item.id}
                            {...item}
                            index={index}
                            handelToggle={handelToggle}
                            expandedIndex={expandedIndex}
                        />
                    )
                }

            </div>

        </div>
    )
}
