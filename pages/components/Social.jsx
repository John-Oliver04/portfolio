import React from 'react'
import { motion, useMotionValue } from "framer-motion";


export default function Social() {
  return (
    <div className='bg-slate-800 py-44 mt-32  relative border-t-2 border-white border-b-2' style={{ height:"100vh", width:"100%", backgroundImage: `url(/image/social/bg1.jpg)` }}>
        <h1 className='text-3xl text-center text-green-500 mb-20' id='social'>Social</h1>
        {/* <img className='absolute' src="/image/gallery/pic1.jpg" alt="" srcset="" /> */}
        <div  className='flex flex-row justify-center gap-10'>

          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col rounded-md overflow-hidden border'>
            <img className='w-32 h-32 shadow' src="/image/social/1.jpg" alt="" />
            <a className='p-2 text-white hover:bg-slate-900'>Visit</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col rounded-md overflow-hidden border'>
            <img className='w-32 h-32 shadow' src="/image/social/4.jpg" alt="" />
            <a className='p-2 text-white  hover:bg-slate-900'>Visit</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col rounded-md overflow-hidden border'>
            <img className='w-32 h-32 shadow' src="/image/social/3.jpg" alt="" />
            <a className='p-2 text-white  hover:bg-slate-900'>Visit</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col rounded-md overflow-hidden border'>
            <img className='w-32 h-32 shadow' src="/image/social/2.jpg" alt="" />
            <a className='p-2 text-white  hover:bg-slate-900'>Visit</a>
          </motion.div>
          
        </div>
    </div>
  )
}
