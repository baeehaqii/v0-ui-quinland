import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const ALL_ARTICLES = [
  {
    id: 1,
    title: "Rumah Dijual di Tangerang untuk Keluarga Nyaman & Aman",
    excerpt:
      "Cari rumah dijual di Tangerang untuk keluarga? Ini kelebihan Excelia Banjar Wijaya dengan ruang luas, lokasi strategis, keamanan 24 jam, dan akses sekolah.",
    image: "/images/blog-1.jpg",
    date: "19 Feb 2026",
    category: "Blog",
  },
  {
    id: 2,
    title: "Amadeus Signature, Rumah di Bogor untuk Investasi Jangka Panjang",
    excerpt:
      "Rumah di Bogor Amadeus Signature menawarkan desain premium, lingkungan asri, akses tol dekat, dan potensi investasi yang menjanjikan untuk masa depan.",
    image: "/images/blog-2.jpg",
    date: "17 Feb 2026",
    category: "Blog",
  },
  {
    id: 3,
    title: "Aerium Residence, Apartemen untuk Milenial, Pet Friendly & Modern",
    excerpt:
      "Apartemen Jakarta Barat Aerium hadir dengan konsep pet-friendly, fasilitas premium, lingkungan yang nyaman, dan desain modern untuk generasi milenial.",
    image: "/images/blog-3.jpg",
    date: "16 Feb 2026",
    category: "Blog",
  },
  {
    id: 4,
    title: "Tips Memilih Rumah Idaman dengan Budget Terbatas",
    excerpt:
      "Panduan lengkap memilih rumah impian dengan budget pas-pasan tanpa mengorbankan kualitas dan lokasi strategis.",
    image: "/images/blog-4.jpg",
    date: "15 Feb 2026",
    category: "Tips",
  },
  {
    id: 5,
    title: "5 Alasan Mengapa Properti di BSD City Terus Diminati",
    excerpt:
      "BSD City menjadi salah satu kawasan hunian paling diminati di Indonesia. Ini 5 alasan mengapa properti di sana terus berkembang pesat.",
    image: "/images/blog-1.jpg",
    date: "12 Feb 2026",
    category: "Insight",
  },
  {
    id: 6,
    title: "Panduan KPR untuk Pembeli Rumah Pertama",
    excerpt:
      "Mengajukan KPR untuk pertama kalinya bisa membingungkan. Pelajari langkah-langkah penting dan tips agar pengajuan KPR Anda disetujui bank.",
    image: "/images/blog-2.jpg",
    date: "10 Feb 2026",
    category: "Tips",
  },
  {
    id: 7,
    title: "Tren Desain Interior Rumah 2026 yang Wajib Anda Tahu",
    excerpt:
      "Dari warna earth tone hingga material sustainable, ini adalah tren desain interior rumah yang paling banyak diminati di tahun 2026.",
    image: "/images/blog-3.jpg",
    date: "8 Feb 2026",
    category: "Insight",
  },
  {
    id: 8,
    title: "Keuntungan Membeli Apartemen di Kawasan CBD Jakarta",
    excerpt:
      "Investasi apartemen di kawasan CBD Jakarta memberikan keuntungan berlipat dari sisi harga sewa, capital gain, dan aksesibilitas pusat bisnis.",
    image: "/images/blog-4.jpg",
    date: "5 Feb 2026",
    category: "Insight",
  },
]

export default function ArtikelPage() {
  const [featured, ...rest] = ALL_ARTICLES

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative flex h-[300px] items-end sm:h-[360px]">
        <Image
          src="/images/blog-1.jpg"
          alt="Artikel banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10">
          <nav
            className="mb-4 flex items-center gap-1.5 text-sm text-white/70"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="font-semibold text-white">Artikel</span>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Artikel
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Tips, insight, dan informasi terkini seputar dunia properti untuk membantu Anda membuat keputusan terbaik.
          </p>
        </div>
      </section>

      <main className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

          {/* Featured Article */}
          <section className="mb-14">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Artikel Utama
            </h2>
            <Link href={`/artikel/${featured.id}`} className="group block overflow-hidden rounded-3xl">
              <div className="relative h-[280px] sm:h-[400px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute right-5 top-5">
                  <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {featured.category}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                  <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400 sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/85 sm:text-base">
                    {featured.excerpt}
                  </p>
                  <time className="mt-4 block text-sm text-white/70">
                    {featured.date}
                  </time>
                </div>
              </div>
            </Link>
          </section>

          {/* All Articles Grid */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Semua Artikel
              </h2>
              <span className="text-sm text-muted-foreground">
                {ALL_ARTICLES.length} artikel
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <article key={article.id} className="group">
                  <Link href={`/artikel/${article.id}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute right-3 top-3">
                        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="line-clamp-2 text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-emerald-700 sm:text-lg">
                        {article.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {article.excerpt}
                      </p>
                      <time className="mt-3 block text-xs text-muted-foreground">
                        {article.date}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}
