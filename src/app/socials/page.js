import React from 'react'
import Navbar from '../accueil/ui/NavBar'

export default function PageSocials() {
  return (
    <div className='min-h-screen'>
      <Navbar className="bg-gradient-to-t from-yellow-500 to-orange-500 text-sky-900" liste="bg-gradient-to-t from-orange-500 to-yellow-500 text-sky-900 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-orange-500 border-t-0" />
      <div className="justify-center m-auto flex mb-20">
        <img src="/assets/Soon.webp" className="w-full md:w-[50%]" />
      </div>
    </div>
  )
}
