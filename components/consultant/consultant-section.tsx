import Image from "next/image"
import Link from "next/link"

export function ConsultantSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center space-y-6 lg:pr-8">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet Our Expert Consultant
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            With a wealth of experience and a results-driven mindset, our
            consultant combines in-depth knowledge with a client-focused
            approach to ensure every project exceeds expectations.
          </p>
          <div>
            <Link
              href="/consultant"
              className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right side - Bento Grid */}
        <div className="grid auto-rows-fr grid-cols-2 gap-4 lg:gap-6">
          {/* Main consultant - spans 2 rows */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl bg-muted">
            <Image
              src="/images/consultant-main.jpg"
              alt="Senior consultant with extensive real estate experience"
              width={600}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Top right consultant */}
          <div className="overflow-hidden rounded-3xl bg-[#1e2b4f]">
            <Image
              src="/images/consultant-2.jpg"
              alt="Professional real estate consultant"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom right consultant */}
          <div className="overflow-hidden rounded-3xl bg-[#b8b5d1]">
            <Image
              src="/images/consultant-3.jpg"
              alt="Expert property consultant"
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
