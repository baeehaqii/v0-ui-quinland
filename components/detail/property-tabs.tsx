"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import {
  Facebook,
  Link2,
  MessageCircle,
  ShieldCheck,
  TreePine,
  Building2,
  Dumbbell,
  Waves,
  ChevronDown,
  ChevronUp,
  BedDouble,
  Bath,
  Ruler,
  Home,
} from "lucide-react"

const TABS = ["Overview", "Facilities", "Type Rumah", "Denah"] as const
type Tab = (typeof TABS)[number]

const TAB_IDS: Record<Tab, string> = {
  Overview: "overview",
  Facilities: "facilities",
  "Type Rumah": "type-rumah",
  Denah: "denah",
}

const FACILITIES = [
  { icon: ShieldCheck, label: "Security 24/7" },
  { icon: TreePine, label: "Outdoor Playground" },
  { icon: Building2, label: "Club House" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Home, label: "Smart Home System" },
]

const HOUSE_TYPES = [
  {
    name: "Type 88",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 88,
    description:
      "Cocok untuk keluarga muda dengan 3 kamar tidur dan 2 kamar mandi. Desain modern dan efisien.",
  },
  {
    name: "Type 117",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 117,
    description:
      "Hunian luas dengan 4 kamar tidur dan 3 kamar mandi. Ruang tamu dan keluarga terpisah.",
  },
  {
    name: "Type 172",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 172,
    description:
      "Tipe premium dengan 5 kamar tidur dan 4 kamar mandi. Dilengkapi ruang kerja dan balkon utama.",
  },
]

interface PropertyTabsProps {
  name: string
  description: string
}

export function PropertyTabs({ name, description }: PropertyTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Overview")
  const [expanded, setExpanded] = useState(false)
  const isClickScrolling = useRef(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const setRef = useCallback((id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }, [])

  /* Scroll spy: update active tab based on scroll position */
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return

      const ids = Object.values(TAB_IDS)
      let current = ids[0]

      for (const id of ids) {
        const el = sectionRefs.current[id]
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) current = id
        }
      }

      const tab = (Object.entries(TAB_IDS) as [Tab, string][]).find(
        ([, id]) => id === current
      )?.[0]
      if (tab) setActiveTab(tab)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (tab: Tab) => {
    setActiveTab(tab)
    const el = sectionRefs.current[TAB_IDS[tab]]
    if (el) {
      isClickScrolling.current = true
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => {
        isClickScrolling.current = false
      }, 800)
    }
  }

  return (
    <div className="flex-1">
      {/* Sticky tab nav */}
      <div className="sticky top-0 z-10 border-b border-border bg-background">
        <nav className="flex gap-6" aria-label="Property details navigation">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => scrollToSection(tab)}
              className={`whitespace-nowrap pb-3 pt-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-foreground text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* All sections rendered inline */}
      <div className="space-y-12 py-8">
        {/* Overview */}
        <section id="overview" ref={setRef("overview")} className="scroll-mt-16">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {name}
            </h2>
            <div className="flex shrink-0 items-center gap-3">
              {[Facebook, MessageCircle, Link2].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Share"
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                </button>
              ))}
              <button
                type="button"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Share on X"
              >
                <svg
                  className="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p
              className={`text-sm leading-relaxed text-muted-foreground ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {description}
            </p>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
            >
              {expanded ? "Hide" : "See More"}
              {expanded ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>
          </div>
        </section>

        {/* Facilities */}
        <section id="facilities" ref={setRef("facilities")} className="scroll-mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Facilities
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {FACILITIES.map((facility) => {
              const Icon = facility.icon
              return (
                <div key={facility.label} className="flex items-center gap-3">
                  <Icon
                    className="size-6 shrink-0 text-foreground"
                    strokeWidth={1.3}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {facility.label}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Type Rumah */}
        <section id="type-rumah" ref={setRef("type-rumah")} className="scroll-mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Type Rumah
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HOUSE_TYPES.map((type) => (
              <div
                key={type.name}
                className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {type.name}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BedDouble className="size-3.5" /> {type.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="size-3.5" /> {type.bathrooms} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler className="size-3.5" /> {type.sqft} m²
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Denah */}
        <section id="denah" ref={setRef("denah")} className="scroll-mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Denah
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Denah rumah akan segera tersedia. Hubungi kami untuk informasi
            lebih lanjut.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HOUSE_TYPES.map((type) => (
              <div
                key={type.name}
                className="flex aspect-[3/4] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30"
              >
                <div className="text-center">
                  <Home
                    className="mx-auto size-8 text-muted-foreground"
                    strokeWidth={1}
                  />
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    Denah {type.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
