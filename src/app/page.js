import Image from 'next/image'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B1120] container mx-auto p-24">
      <Hero />
    </main>
  )
}
