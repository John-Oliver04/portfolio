import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Gallery() {
  return (
    <div className='mx-20'>
        <div className="container px-5 py-2 mx-auto lg:px-32 lg:pt-24">   
        <p className='p-3 text-2xl text-green-600 ' id='gallery'>Gallery</p>
        <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-1/2 p-1 md:p-2">
                <img
                alt="gallery"
                className="block object-cover object-center w-full h-full border-4 border-white rounded-lg "
                src="/image/gallery/pic1.jpg" />
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-1/2 p-1 md:p-2">
                <img
                alt="gallery"
                className="block object-cover object-center w-full h-full border-4 border-white rounded-lg "
                src="/image/gallery/pic3.jpg" />
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="w-full p-1 md:p-2">
                <img
                alt="gallery"
                className="block object-cover object-center w-full h-full border-4 border-white rounded-lg "
                src="/image/gallery/pic2.jpg" />
            </motion.div>
            </div>
            <div className="flex flex-wrap w-1/2">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="w-full p-1 md:p-2">
                <img
                alt="gallery"
                className="block object-cover object-center w-full h-full border-4 border-white rounded-lg "
                src="/image/gallery/pic4.jpg" />
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="w-1/2 p-1 md:p-2">
                <img
                alt="gallery"
                className="block object-cover object-center w-full h-full border-4 border-white rounded-lg "
                src="/image/gallery/metroshirt.jpg" />
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className="w-1/2 p-1 md:p-2">
                <img
                alt="gallery"
                className="block object-cover object-center w-full h-full border-4 border-white rounded-lg "
                src="/image/gallery/guitar.jpg" />
            </motion.div>
            </div>
        </div>
        </div>
    </div>
  )
}
