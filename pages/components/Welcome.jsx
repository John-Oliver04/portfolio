import React from 'react'

export default function Welcome() {
  return (
        <div className='grid grid-cols-2' id='welcome'>
            <div className='bg-gray-950'>
                <img className='p-20 ' src='/image/home/avatar.png'></img>
            </div>
            <div className='relative pt-10 text-left bg-gray-950 pr-60 py-26 shrink-0'>
                <img  className='absolute pt-5 pr-32 top-20 ' src='/image/home/logos.png'></img>
                <h1 className='absolute mt-16 text-5xl font-bold text-green-600 top-96 '>JOHN OLIVER VIROLA</h1>
                <h5 className='pt-20 text-5xl text-gray-700 mt-96 stroke-white'>Web Developer</h5>
            </div>
        </div>
  )
}
