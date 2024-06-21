import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='py-10'>
        <div className='flex flex-col justify-center items-center relative'>
          <img src='/assets/TopScreen/Boutiques/Promotion.png' className='w-full h-[600px]'/>
          <Link href="/stores/collections/promotions">
          <button className='absolute bottom-10 bg-[#fd4607] hover:bg-[#BB3406] text-slate-50 p-3 rounded-full left-[50%]'>Shop Now</button></Link>
        </div>
    </div>
  )
}
