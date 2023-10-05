// import React from 'react'
import Link from './../Components/Link'

export default function Sidebar() {

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Images', path: '/images' },
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
  ]

  return (
    <>
      <div className='flex flex-col gap-y-8 items-start w-36 min-h-screen p-5 bg-blue-50 '>
        {
          links.map(link =>
            <Link key={link.label}
              to={link.path}
              className='hover:text-sky-500'
              activeClassName='font-bold border-l-4 border-blue-600 text-blue-800 pl-1'
            >
              {link.label}
            </Link>
          )
        }
      </div>
    </>
  )
}
