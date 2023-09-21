import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Featured from '@/components/Featured'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Featured />
    </div>
  )
}
