import Image from "next/image"
import { PropertySearch } from "./property-search"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern city skyline with glass buildings"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Soft sky overlay for readability */}
        <div className="absolute inset-0 bg-[oklch(0.78_0.04_230/0.35)]" />
      </div>

      {/* Spacer for navbar */}
      <div className="h-24" />

      {/* Hero content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-32 text-center">
        <h1 className="max-w-2xl">
          <span className="block font-serif text-4xl italic text-card md:text-5xl lg:text-6xl">
            Buy. Sell. Rent.
          </span>
          <span className="mt-2 block text-3xl font-bold tracking-tight text-card md:text-4xl lg:text-5xl">
            Real Estate Done Right
          </span>
        </h1>
      </div>

      {/* Search bar - anchored at bottom */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
        <PropertySearch />
      </div>
    </section>
  )
}
