import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/hero/hero-section"
import { AboutSection } from "@/components/about/about-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* Spacer agar search bar tidak tertutup konten berikutnya */}
        <div className="h-24" />
        <AboutSection />
      </main>
    </>
  )
}
