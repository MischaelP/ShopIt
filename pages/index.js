import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Intro from '../components/Intro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Hero />
   <Intro />
   </>
  )
}
