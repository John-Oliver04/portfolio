import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function About() {
  return (
    <div>
            <div className='pb-16 mx-20 text-white border-b-2 border-white' >
                <div className='grid grid-cols-2'>
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <h2 className='text-2xl font-bold text-green-600' id='about'>Welcome to my Portfolio Website!</h2>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <p className='mt-2 text-justify font-extralight'>
                        I am a passionate and dedicated web developer, and this platform showcases my skills, experience, and projects. As a web developer, I have a deep understanding of the intricacies of creating functional and visually appealing websites that engage and captivate users.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <p className='mt-2 text-justify font-extralight'>
                        With a strong foundation in front-end development, I specialize in HTML, CSS, and JavaScript, utilizing frameworks such as React, NEXT.js, and Tailwind to bring dynamic and interactive elements to life. I also have expertise in back-end technologies like Node.js, MySQL, Spring boot and PHP, enabling me to build robust and scalable web applications.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <p  className='mt-2 text-justify font-extralight'>
                        My journey as a web developer has been fueled by a desire for continuous learning and staying up to date with the latest industry trends. I believe in the power of innovation and constantly seek new technologies and tools that enhance the development process and elevate the end-user experience.
                      </p>
                    </motion.div>

                    {/* SEE PROJECTS ------------------------->*/}
                    <a href='/projects' className='px-2 text-green-600 bg-gray-950'>See my projects</a>
                  </div>
                  <div className='px-10 '>
                    <img className='border-8 border-white shadow-sm' src='/image/gallery/kaliraya.jpg'></img>
                  </div>
                </div>
            </div>
    </div>
  )
}
