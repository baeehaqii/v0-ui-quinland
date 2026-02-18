import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FEATURED_POST = {
  id: 1,
  title: "Rumah Dijual di Tangerang untuk Keluarga Nyaman & Aman",
  excerpt:
    "Cari rumah dijual di Tangerang untuk keluarga? Ini kelebihan Excelia Banjar Wijaya dengan ruang luas, lokasi strategis, keamanan 24 jam, dan akses sekolah.",
  image: "/images/blog-1.jpg",
  date: "19 Feb 2026",
  category: "Blog",
}

const RECENT_POSTS = [
  {
    id: 2,
    title: "Amadeus Signature, Rumah di Bogor untuk Investasi Jangka...",
    excerpt:
      "Rumah di Bogor Amadeus Signature menawarkan desain premium, lingkungan asri, akses tol dekat,...",
    image: "/images/blog-2.jpg",
    date: "17 Feb 2026",
    category: "Blog",
  },
  {
    id: 3,
    title: "Aerium Residence, Apartemen untuk Milenial, Pet Friendly &...",
    excerpt:
      "Apartemen Jakarta Barat Aerium hadir dengan konsep pet-friendly, fasilitas premium, lingkungan...",
    image: "/images/blog-3.jpg",
    date: "16 Feb 2026",
    category: "Blog",
  },
  {
    id: 4,
    title: "Tips Memilih Rumah Idaman dengan Budget Terbatas",
    excerpt:
      "Panduan lengkap memilih rumah impian dengan budget pas-pasan tanpa mengorbankan kualitas dan lokasi...",
    image: "/images/blog-4.jpg",
    date: "15 Feb 2026",
    category: "Blog",
  },
]

export function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Latest News
        </h2>
        <Link
          href="/news"
          className="group flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
        >
          See All
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Featured Post - Large */}
        <article className="group lg:col-span-2">
          <Link href={`/news/${FEATURED_POST.id}`} className="block">
            <div className="overflow-hidden rounded-2xl bg-muted">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-xs font-semibold text-white">
                  {FEATURED_POST.category}
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-red-600 sm:text-3xl">
                  {FEATURED_POST.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {FEATURED_POST.excerpt}
                </p>
                <time className="mt-4 block text-sm text-muted-foreground">
                  {FEATURED_POST.date}
                </time>
              </div>
            </div>
          </Link>
        </article>

        {/* Recent Posts - Small Cards */}
        <div className="flex flex-col gap-6">
          {RECENT_POSTS.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/news/${post.id}`} className="flex gap-4">
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-36">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <span className="inline-block w-fit rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                  <h3 className="mt-2 line-clamp-2 text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-red-600 sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">
                    {post.excerpt}
                  </p>
                  <time className="mt-2 text-xs text-muted-foreground">
                    {post.date}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
