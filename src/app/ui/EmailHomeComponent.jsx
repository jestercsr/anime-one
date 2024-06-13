'use client'

import React from 'react'

export function EmailHomeComponent() {
  return (
    <div className="bg-white">
        <img src="assets/homeBackground.png" className='w-full h-4/5'/>
        <div className="pt-14 bg-gradient-to-b from-neutraler-50 to-cyaner-50 text-center">
          <h1 className='text-6xl font-bold'>Films et séries animés en illimité, et plus...</h1>
          <h2 className='text-4xl'>Où que vous soyez. Sans engagement.*</h2>
          <p className='text-2xl'>
            Entrez votre adresse e-mail pour commencer où réactiver votre
            abonnement.
          </p>
          <input type="email" placeholder="Adresse e-mail" className='w-1/2 p-2 rounded-lg bg-slate-200'/>
          <button className="bg-red-600 text-slate-50 p-2 rounded-xl">Commencer</button>
        </div>
    </div>
  )
}