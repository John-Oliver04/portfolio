import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  return (
    <div className='px-20 mx-20 mt-10'>
        <h1 className='p-3 pl-3 text-2xl text-green-600' id='project'>Projects</h1>
        <div className='grid grid-cols-3 gap-6'>
            {/* Project 1 */}
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="transition-opacity hover:opacity-80 duration-300  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-no-repeat bg-cover" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.2AVdMMhPegoUx9hCsCmy3wHaE3?pid=ImgDet&rs=1" alt="" />
                <div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </div>
                </div>
                <div className="p-6">
                    <div class="bg-orange-500 rounded-xl px-2 w-20 text-slate-100 mb-4 flex text-sm font-medium lg:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>
                        {/* Icon */}
                        Project <br />

                    </div>
                    
                    <h5 className="mb-2 text-lg font-medium leading-tight text-green-600 dark:text-neutral-50">
                        MAO Mamburao Portal - Website
                    </h5>
                    <p className="mb-4 text-xs text-justify text-neutral-600 dark:text-neutral-200">
                        This Project is website that allow the user to create their own profile and report all the damages of their farm if they have the calamity problem.
                    </p>

                    <div className='flex flex-row-reverse'>
                        <a target='_blank' href='https://github.com/John-Oliver04/maomamburao.git' className="transition-colors duration-300 bg-gray-950 hover:bg-green-600  border-b-2  border-gray-950 inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white " data-te-ripple-init data-te-ripple-color="light">
                        Open
                        </a>
                    </div>
                    <div className='col-auto gap-1 p-2 my-2s'>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Laravel</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>PHP</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>MySql</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Javascript</small> <br />
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Tailwind</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Bootstrap</small>
                    </div>
                </div>
            </motion.div> 

            {/* Project 2 */}
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="transition-opacity hover:opacity-80 duration-300 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-no-repeat bg-cover" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.M2Lim1gNQw6jCp9fLCP44wAAAA?pid=ImgDet&rs=1" alt="" />
                <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
                </div>
                <div className="p-6">
                    <div class="bg-orange-500 rounded-xl px-2 w-20 text-slate-100 mb-4 flex text-sm font-medium lg:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>
                        Project
                    </div>
                    <h5 className="mb-2 text-lg font-medium leading-tight text-green-600 dark:text-neutral-50">
                        Smart Filter for TUPAD Beneficiaries
                    </h5>
                    <p className="mb-4 text-xs text-justify text-neutral-600 dark:text-neutral-200">
                        The main purpose of this project is to help TUPAD coordinators to lessen their effort of filtering beneficiaries if 
                    </p>
        
                    <div className='flex flex-row-reverse'>
                        <a target='_blank' href='https://github.com/John-Oliver04/smartfilter.git'  className="transition-colors duration-300 bg-gray-950 hover:bg-green-600  border-b-2  border-gray-950 inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white " data-te-ripple-init data-te-ripple-color="light">
                        Open
                        </a>
                    </div>
                    <div className='col-auto gap-1 p-2 my-2s'>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Laravel</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>PHP</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>MySql</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Javascript</small> <br />
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Tailwind</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Bootstrap</small>
                    </div>
                </div>
            </motion.div> 

            {/* Project 3 */}
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="transition-opacity hover:opacity-80 duration-300 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-no-repeat bg-cover" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="" />
                <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
                </div>
                <div className="p-6">
                    <div class="bg-orange-500 rounded-xl px-2 w-20 text-slate-100 mb-4 flex text-sm font-medium lg:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>
                        Project
                    </div>
                    <h5 className="mb-2 text-lg font-medium leading-tight text-green-600 dark:text-neutral-50">
                        SB Office Storage Website
                    </h5>
                    <p className="mb-4 text-xs text-justify text-neutral-600 dark:text-neutral-200">
                        SB Office is a laravel project that help their office to save their old filles by uploading it to this website
                    </p> 
                    <div className='flex flex-row-reverse'>
                        <a target='_blank' href='https://github.com/John-Oliver04/SBOffice.git' className="transition-colors duration-300 bg-gray-950  hover:bg-green-600 border-b-2  border-gray-950 inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white " data-te-ripple-init data-te-ripple-color="light">
                        Open
                        </a>
                    </div> 
                    <div className='col-auto gap-1 p-2 my-2s'>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Laravel</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>PHP</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>MySql</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Javascript</small> <br />
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Tailwind</small>
                            <small className='p-1 text-xs text-gray-400 rounded-full bg-slate-600'>Bootstrap</small>
                    </div>
                </div>
            </motion.div> 
        </div>        
    </div>
  )
}
