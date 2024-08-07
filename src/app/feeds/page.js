import React from 'react'
import Navbar from '../accueil/ui/NavBar'

export default function page() {
  return (
    <div>
      <Navbar className="bg-cyan-900 text-white" liste="bg-cyan-900 text-white absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-cyan-900 border-t-0"/>
      Bientôt disponible
    </div>
  )
}
