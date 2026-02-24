"use client"

import { useState } from "react"
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

const FACILITIES = [
  { icon: ShieldCheck, label: "Security 24/7" },
  { icon: TreePine, label: "Outdoor Playground" },
  { icon: Building2, label: "Club House" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Home, label: "Smart Home System" },
]

const HOUSE_TYPES = [
  { name: "Type 88", bedrooms: 3, bathrooms: 2, sqft: 88, description: "Cocok untuk keluarga muda dengan 3 kamar tidur dan 2 kamar mandi. Desain modern dan efisien." },
  { name: "Type 117", bedrooms: 4, bathrooms: 3, sqft: 117, description: "Hunian luas dengan 4 kamar tidur dan 3 kamar mandi. Ruang tamu dan keluarga terpisah." },
  { name: "Type 172", bedrooms: 5, bathrooms: 4, sqft: 172, description: "Tipe premium dengan 5 kamar tidur dan 4 kamar mandi. Dilengkapi ruang kerja dan balkon utama." },
]

interface PropertyTabsProps {
  name: string
  description: string
}

export function PropertyTabs({ name, description }: PropertyTabsProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Overview")
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex-1">
      {/* Tab nav */}
      <div className="border-b border-border">
        <nav className="flex gap-6" aria-label="Property details tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap pb-3 text-sm font-medium transition-colors ${
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

      {/* Tab content */}
      <div className="py-8">
        {activeTab === "Overview" && (
          <OverviewTab
            name={name}
            description={description}
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
          />
        )}
        {activeTab === "Facilities" && <FacilitiesTab />}
        {activeTab === "Type Rumah" && <HouseTypeTab />}
        {activeTab === "Denah" && <DenahTab />}
      </div>
    </div>
  )
}

/* ---------- Overview ---------- */
function OverviewTab({
  name,
  description,
  expanded,
  onToggle,
}: {
  name: string
  description: string
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {name}
        </h2>
        {/* Social share */}
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
          {/* X/Twitter */}
          <button
            type="button"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Share on X"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
          onClick={onToggle}
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
    </div>
  )
}

/* ---------- Facilities ---------- */
function FacilitiesTab() {
  return (
    <div>
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
    </div>
  )
}

/* ---------- Type Rumah ---------- */
function HouseTypeTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Type Rumah
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {HOUSE_TYPES.map((type) => (
          <div
            key={type.name}
            className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-bold text-foreground">{type.name}</h3>
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
    </div>
  )
}

/* ---------- Denah ---------- */
function DenahTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Denah
      </h2>
      <p className="mt-4 text-sm text-muted-foreground">
        Denah rumah akan segera tersedia. Hubungi kami untuk informasi lebih lanjut.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {HOUSE_TYPES.map((type) => (
          <div
            key={type.name}
            className="flex aspect-[3/4] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30"
          >
            <div className="text-center">
              <Home className="mx-auto size-8 text-muted-foreground" strokeWidth={1} />
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Denah {type.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Coming Soon</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
