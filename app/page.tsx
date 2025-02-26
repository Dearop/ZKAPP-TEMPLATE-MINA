import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SecondPanel } from "@/components/second-panel"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white">
      <Header />
      <Hero />
      <SecondPanel />
    </main>
  )
}

