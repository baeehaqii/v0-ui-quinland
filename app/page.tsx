import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "@/components/hero/hero-section"
import { AboutSection } from "@/components/about/about-section"
import { PropertiesSection } from "@/components/properties/properties-section"
import { PartnerSection } from "@/components/partner/partner-section"
import { NewsSection } from "@/components/news/news-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* Spacer agar search bar tidak tertutup konten berikutnya */}
        <div className="h-16" />
        <AboutSection />
        <PropertiesSection />
        <PartnerSection />
        <NewsSection />
      </main>
    </>
  )
}
