import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='flex flex-row-reverse justify-between bg-gray-950' >
          <nav className='flex content-center p-2 text-white row bg-gray-950'>
              <a className='p-3 text-center transition duration-300 ease-in-out delay-150 border-b-2 hover:text-green-600 bg-gray-950 w-28 border-gray-950 hover:border-b-2 hover:border-green-600 hover:bg-gray-900' href='#welcome'>Home</a>
              <a className='p-3 text-center transition duration-300 ease-in-out delay-150 border-b-2 hover:text-green-600 bg-gray-950 w-28 border-gray-950 hover:border-b-2 hover:border-green-600 hover:bg-gray-900' href='#project'>Projects</a>
              <a className='p-3 text-center transition duration-300 ease-in-out delay-150 border-b-2 hover:text-green-600 bg-gray-950 w-28 border-gray-950 hover:border-b-2 hover:border-green-600 hover:bg-gray-900' href='/#about'>About-Us</a>
              <a className='p-3 text-center transition duration-300 ease-in-out delay-150 border-b-2 hover:text-green-600 bg-gray-950 w-28 border-gray-950 hover:border-b-2 hover:border-green-600 hover:bg-gray-900' href='/#social'>Social</a>
              <a className='p-3 text-center transition duration-300 ease-in-out delay-150 border-b-2 hover:text-green-600 bg-gray-950 w-28 border-gray-950 hover:border-b-2 hover:border-green-600 hover:bg-gray-900' href='/#gallery'>Gallery</a>
              <a className='p-3 text-center transition duration-300 ease-in-out delay-150 border-b-2 hover:text-green-600 bg-gray-950 w-28 border-gray-950 hover:border-b-2 hover:border-green-600 hover:bg-gray-900' href='/#contact'>Contact</a>
              <div className='content-center mx-8 '>
                <img className='m-2 border-2 border-green-100 rounded-full cursor-pointer hover:border-green-600 hover:bg-green-600' width={28} src='/profile.jpg'></img>
              </div>
          </nav>
          <nav className='flex p-2 bg-gray-900 border-r border-white border-3'>
          
            <div className='flex content-center justify-center px-2 pt-2 bg-gray-950 rounded-2xl'>
                <div className='flex text-white'>
                    <div className='text-white'>
                        <img className='text-white' width={32} src='/icons-mail.png'></img>
                    </div>
                    <div className='p-1 pt-2 text-sm hover:text-green-600'>johnolivervirola4@gmail.com</div>
                </div>
                <div className='flex ml-3 text-white '>
                    <div>
                        <img width={32} src='/icons-phone.png'></img>
                    </div>
                    <div className='p-1 pt-2 text-sm hover:text-green-600'> 0945-733-0255</div>
                </div>
            </div>
          </nav>
      </header>


    </div>
  )
}
