import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Social from './components/Social'
import Contact from './components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col bg-slate-900 items-center justify-between p-24 ${inter.className}`}
      className='bg-gray-950'
    >
      <Header/>
      <Welcome/>
      <About/>
      <Projects/>
      <Gallery/>
      <Social/>
      <Contact/>

    </main>
  )
}
