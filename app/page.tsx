// app/page.tsx
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SecondPanel } from "@/components/second-panel"
import { WalletButton } from "@/components/wallet-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SecondPanel />
      <WalletButton />
    </main>
  )
}