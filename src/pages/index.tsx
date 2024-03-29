import { Inter } from 'next/font/google'
import Posts from '@/components/posts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Posts />
    </main>
  )
}
