import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRef } from 'react'
import { useFollowPointer } from "./use-follow-pointer";
import { motion, AnimatePresence } from "framer-motion"
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Welcome from './components/Welcome';
import Social from './components/Social';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  
  return (
    <>


      <AnimatePresence>
        <motion.div initial={{ opacity : 0, y : 15 }}  animate={{ opacity : 1 , y : 0 }} exist={{ opacity : 0 , y : 15 }} transition={{ delay : 0.25 }} >
          <main className='bg-gray-950'>

            {/* Navigation */}
            <Header/>

            {/* Welcome */}
            <Welcome/>

            {/* About */}
            <About/>

            {/* Projects */}
            <Projects/>

            {/* Projects */}
            <Social/>

            {/* Gallery */}
            <Gallery/>

          </main>
        </motion.div>

        {/* HOME CIRCLE POINTER */}
        <motion.div   ref={ref}  className="w-8 box"   animate={{ x, y }}  transition={{  type: "spring", damping: 3, stiffness: 50,  restDelta: 0.001   }} >
              <img className='opacity-40 ' width={64} height={64} src='https://www.samnaz.org/wp-content/uploads/2021/03/circle_yellow-green2.png'></img>
        </motion.div>
      </AnimatePresence>

    </>
  )
}
