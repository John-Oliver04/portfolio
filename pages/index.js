import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRef } from 'react'
import { useFollowPointer } from "./use-follow-pointer";
import { motion, AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  
  return (
    <>
      <header className='flex flex-row-reverse justify-between bg-gray-950' >
          <nav className='flex row p-2 bg-gray-950 text-white content-center'>
              <a className='hover:text-green-600 bg-gray-950 p-3 w-28 text-center border-b-2 border-gray-950 hover:border-b-2  hover:border-green-600 hover:bg-gray-900 transition delay-150 duration-300 ease-in-out' href='/'>Home</a>
              <a className='hover:text-green-600 bg-gray-950 p-3 w-28 text-center border-b-2 border-gray-950 hover:border-b-2  hover:border-green-600 hover:bg-gray-900 transition delay-150 duration-300 ease-in-out' href='/projects'>Projects</a>
              <a className='hover:text-green-600 bg-gray-950 p-3 w-28 text-center border-b-2 border-gray-950 hover:border-b-2  hover:border-green-600 hover:bg-gray-900 transition delay-150 duration-300 ease-in-out' href='/about-us'>About-Us</a>
              <div className='mx-8  content-center '>
                <img className='border-green-100 hover:border-green-600 border-2 rounded-full m-2 cursor-pointer hover:bg-green-600' width={28} src='/profile.jpg'></img>
              </div>
          </nav>
          <nav className='flex bg-gray-900 p-2 border-r border-white border-3'>
          
          <div className='flex content-center justify-center pt-2 bg-gray-950 px-2 rounded-2xl'>
              <div className='text-white flex'>
                  <div className='text-white'>
                      <img className='text-white' width={32} src='/icons-mail.png'></img>
                  </div>
                  <div className='p-1 pt-2 text-sm hover:text-green-600'>JOHNOLIVERVIROLA4@gmail.com</div>
              </div>
              <div className='text-white flex ml-3 '>
                  <div>
                      <img width={32} src='/icons-phone.png'></img>
                  </div>
                  <div className='p-1 pt-2 text-sm hover:text-green-600'> 0945-733-0255</div>
              </div>
          </div>
          </nav>
      </header>

      <AnimatePresence>
        <motion.div
          initial={{ opacity : 0, y : 15 }}
          animate={{ opacity : 1 , y : 0 }}
          exist={{ opacity : 0 , y : 15 }}
          transition={{ delay : 0.25 }} >

          <main className='bg-gray-950'>
              <div className='grid grid-cols-2'>
                <div className='bg-gray-950'>
                  <img className=' p-20' src='/image/home/avatar.png'></img>
                </div>
                <div className='bg-gray-950 pr-60 py-26 pt-10 shrink-0 text-left relative'>
                  <img  className='absolute top-20 pr-32 pt-5 ' src='/image/home/logos.png'></img>
                  <h1 className='top-96 mt-16  absolute font-bold text-6xl text-green-600 '>JOHN OLIVER VIROLA</h1>
                  <h5 className='mt-96 pt-20  stroke-white   text-5xl text-gray-700'>Web Developer</h5>
                </div>
              </div>

            {/* About */}
              <div className='mx-20 text-white border-b-2 pb-16 border-white'>
                <div className='grid grid-cols-2'>
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className=" p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <h2 className='text-2xl font-bold text-green-600'>Welcome to my Portfolio Website!</h2>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <p className=' font-extralight text-justify mt-2'>
                        I am a passionate and dedicated web developer, and this platform showcases my skills, experience, and projects. As a web developer, I have a deep understanding of the intricacies of creating functional and visually appealing websites that engage and captivate users.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className=" p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <p className=' font-extralight text-justify mt-2'>
                        With a strong foundation in front-end development, I specialize in HTML, CSS, and JavaScript, utilizing frameworks such as React, NEXT.js, and Tailwind to bring dynamic and interactive elements to life. I also have expertise in back-end technologies like Node.js, MySQL, Spring boot and PHP, enabling me to build robust and scalable web applications.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className=" p-1 md:p-2">
                        {/* PARAGRAPH */}
                      <p  className=' font-extralight text-justify mt-2'>
                        My journey as a web developer has been fueled by a desire for continuous learning and staying up to date with the latest industry trends. I believe in the power of innovation and constantly seek new technologies and tools that enhance the development process and elevate the end-user experience.
                      </p>
                    </motion.div>

                    {/* SEE PROJECTS ------------------------->*/}
                    <a href='/projects' className='bg-gray-950 px-2 text-green-600'>See my projects</a>
                  </div>
                  <div className='px-10 '>
                    <img className='border-8 border-white shadow-sm' src='https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/308381498_1710347852695426_6517696418987566804_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGSZDskhAnusWjeQsJxAOeSA0EufXct-_oDQS59dy37-gXByscBO3oMu4yYptFCH348dxzq00iFEIEuyG_lRUTG&_nc_ohc=X4pngv9bjyQAX_wQteO&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=00_AfBOr2wF9oNpVImCKZY-HVrbAyhGwB60xy-dFDF52Qcr0A&oe=64981551'></img>
                  </div>
                </div>
              </div>
            
            {/* Projects */}
            <div className='mx-20 mt-10 px-20'>
              <p className='text-2xl p-3 pl-3 text-green-600 '>Projects</p>
              <div className='grid grid-cols-3 gap-6'>
                {/* Project 1 */}
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="transition-opacity hover:opacity-80 duration-300  block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
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
                      Project
                    </div>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-green-600 dark:text-neutral-50">
                      MAO Mamburao Portal - Website
                    </h5>
                    <p className="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      This Project is website that allow the user to create their own profile and report all the damages of their farm if they have the calamity problem.
                    </p>
                    <div className='flex flex-row-reverse'>
                      <a href='/projects/project-one' className="transition-colors duration-300 bg-gray-950 hover:bg-green-600  border-b-2  border-gray-950 inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white " data-te-ripple-init data-te-ripple-color="light">
                        Open
                      </a>
                    </div>
                  </div>
                </motion.div> 

                {/* Project 2 */}
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="transition-opacity hover:opacity-80 duration-300 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
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
                    <h5 className="mb-2 text-xl font-medium leading-tight text-green-600 dark:text-neutral-50">
                      Student Management System
                    </h5>
                    <p className="mb-4 text-justify text-base text-neutral-600 dark:text-neutral-200">
                      An online platform designed to efficiently manage and organize various aspects of student information and academic ...
                    </p>
                    <div className='flex flex-row-reverse'>
                      <a href='/projects/project-one'  className="transition-colors duration-300 bg-gray-950 hover:bg-green-600  border-b-2  border-gray-950 inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white " data-te-ripple-init data-te-ripple-color="light">
                        Open
                      </a>
                    </div>
                  </div>
                </motion.div> 

                {/* Project 3 */}
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="transition-opacity hover:opacity-80 duration-300 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
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
                    <h5 className="mb-2 text-xl font-medium leading-tight text-green-600 dark:text-neutral-50">
                      Occidental Mindoro Tourist Spot Website
                    </h5>
                    <p className="mb-4 text-base text-justify text-neutral-600 dark:text-neutral-200">
                    Our website is designed to provide you with a comprehensive collection of information about various tourist spots, ensuring that you have all ...
                    </p>
                    <div className='flex flex-row-reverse'>
                      <a href='/projects/project-one' className="transition-colors duration-300 bg-gray-950  hover:bg-green-600 border-b-2  border-gray-950 inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white " data-te-ripple-init data-te-ripple-color="light">
                        Open
                      </a>
                    </div> 
                  </div>
                </motion.div> 
              </div>        
            </div>

            {/* Gallery */}
            <div className='mx-20'>
              <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">   
                <p className='text-2xl p-3 text-green-600 '>Gallery</p>
                <div className="-m-1 flex flex-wrap md:-m-2">
                  <div className="flex w-1/2 flex-wrap">
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className=" border-4 border-white block h-full w-full rounded-lg object-cover object-center"
                        src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/344850185_787071352605698_2137254181046449491_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFR0NiyKCph9KACVUTFPhfm6K1ViMQ400norVWIxDjTSYp4JUpWp5SzWqfi4NGHitxsAQF9AYyG-tYL9lKFKoQR&_nc_ohc=0ldV0WtNxTMAX_PRURY&_nc_ht=scontent.fmnl33-1.fna&oh=00_AfDdizwhGdpD5dOeA7ZoaAKOJe0hfCm6mK1pzUkfrqCqng&oe=6497BE4B" />
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className=" border-4 border-white block h-full w-full rounded-lg object-cover object-center"
                        src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/344802146_247548704441710_8860218030545720605_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEEqEP6cah0D4vXoxuyzTvRbpAl8l0dIBBukCXyXR0gEDzjnZZuw_oKqlq2OSXWQso0EuR1eeOJKG-d80znrjmp&_nc_ohc=7dkm5tSZwPQAX8RMCWU&_nc_oc=AQmw68pjU11sgqjP8LF_Arfwa_6lHPL8J6pWKytzHB0zvGeTksch7oSXaEd4zsaAIak&_nc_ht=scontent.fmnl33-2.fna&oh=00_AfD8zRG9mFHLp6lb4E4bCKP-Z3jKO_eZqB1m__cskVY_Ew&oe=6497CC8F" />
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className=" border-4 border-white block h-full w-full rounded-lg object-cover object-center"
                        src="https://scontent.fmnl33-3.fna.fbcdn.net/v/t39.30808-6/344867003_1270056086960578_4429119896629110549_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEDsRr6w7oK_cUeDpa00YVvb1D4EzpuwQNvUPgTOm7BA2Q9e1EAvXqJxaBhLRg0mE0mGmneCSYZfpk4pQbuG4Fk&_nc_ohc=bdOz8mL1jysAX-nrF-7&_nc_ht=scontent.fmnl33-3.fna&oh=00_AfCKFgLGPi3W3vxbVm_CBcYS04nN8Ew-izYu1Q9Dbylu9g&oe=649829BD" />
                    </motion.div>
                  </div>
                  <div className="flex w-1/2 flex-wrap">
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className=" border-4 border-white block h-full w-full rounded-lg object-cover object-center"
                        src="https://scontent.fmnl33-4.fna.fbcdn.net/v/t39.30808-6/252917419_1486543698409177_6331312359382484569_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFSmoztBZ4qGhWQaerCGwdxvhoM2YAXeT2-GgzZgBd5PRPztAWYGao2f7YwhRWExk5nFjVc51sMOz5p8Cdjscc7&_nc_ohc=WQEsd6_fpLwAX-HyAku&_nc_ht=scontent.fmnl33-4.fna&oh=00_AfA074xnhlOGLWZNUBx3J5dnLAkKQTMgxeDHaKleTX_1hQ&oe=6497B161" />
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className=" border-4 border-white block h-full w-full rounded-lg object-cover object-center"
                        src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t1.6435-9/123092192_1240109766385906_2971792994588075928_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH-1kamjjt3GQSdPj6eQRpAwbx7QCcw-YfBvHtAJzD5hzgzx2REZXPPG7XKJU4wjcCw20OkJ9zFyDPpnx__tXzO&_nc_ohc=wohKRfvSb6wAX_3gni2&_nc_ht=scontent.fmnl33-2.fna&oh=00_AfBhIOMPze7JsRITjrT4TgSpzsa0vN-CHxmqpQDhrtGVDA&oe=64B9F4DA" />
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    className="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className=" border-4 border-white block h-full w-full rounded-lg object-cover object-center"
                        src="https://scontent.fmnl33-4.fna.fbcdn.net/v/t1.6435-9/50834251_693006807762874_1637315088845111296_n.jpg?stp=dst-jpg_p206x206&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeG8GtScq9q-KYfVGUaXFO-oXED9wm4Anu1cQP3CbgCe7WE3jCI-7yO-WUXQZVu5ksDJl3o350sU4ic-ny2geEjZ&_nc_ohc=TGZ8tg3_8IMAX_eWDMF&_nc_ht=scontent.fmnl33-4.fna&oh=00_AfBhBwXB3sqiHW3Kib5xA_bnHaLi9IRCmfxrQ2exnGPaTQ&oe=64B9D9A2" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

          </main>

        </motion.div>
                                {/* HOME CIRCLE POINTER */}
                                <motion.div
                              ref={ref}
                                className="box  w-8"
                                animate={{ x, y }}
                                transition={{
                                  type: "spring",
                                  damping: 3,
                                  stiffness: 50,
                                  restDelta: 0.001
                                }} >
                                      <img className='opacity-40 ' width={64} height={64} src='https://www.samnaz.org/wp-content/uploads/2021/03/circle_yellow-green2.png'></img>
                                </motion.div>

      </AnimatePresence>

    </>
  )
}
