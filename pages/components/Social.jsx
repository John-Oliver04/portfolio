import React from 'react'
import { motion, useMotionValue } from "framer-motion";


export default function Social() {
  return (
    <div className='relative mt-32 border-t-2 border-b-2 border-white bg-slate-800 py-44' style={{ height:"100vh", width:"100%", backgroundImage: `url(/image/social/bg1.jpg)` }}>
        <h1 className='mb-20 text-3xl text-center text-green-500' id='social'>Social</h1>
        {/* <img className='absolute' src="/image/gallery/pic1.jpg" alt="" srcset="" /> */}
        <div  className='flex flex-row justify-center gap-10'>

          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col overflow-hidden border rounded-md'>
            <img className='w-32 h-32 shadow' src="/image/social/1.jpg" alt="" />
            <a href='https://www.facebook.com/John.Design.04/' target='_blank' className='p-2 text-white hover:bg-slate-900'>Visit</a>
            
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col overflow-hidden border rounded-md'>
            <img className='w-32 h-32 shadow' src="/image/social/4.jpg" alt="" />
            <a href='https://github.com/John-Oliver04' target='_blank' className='p-2 text-white hover:bg-slate-900'>Visit</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col overflow-hidden border rounded-md'>
            <img className='w-32 h-32 shadow' src="/image/social/3.jpg" alt="" />
            <a href='mailto: johnolivervirola4@gmail.com' target='_blank' className='p-2 text-white hover:bg-slate-900'>Visit</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}   whileTap={{ scale: 0.9 }}  className='flex flex-col overflow-hidden border rounded-md'>
            <img className='w-32 h-32 shadow' src="/image/social/2.jpg" alt="" />
            <a href='https://www.linkedin.com/in/john-oliver-virola-309315285/' target='_blank' className='p-2 text-white hover:bg-slate-900'>Visit</a>
          </motion.div>
          
        </div>
    </div>
  )
}
