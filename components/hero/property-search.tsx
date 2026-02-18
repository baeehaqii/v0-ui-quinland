"use client"

import { useState } from "react"
import { MapPin, Building2, Home } from "lucide-react"

const LOCATIONS = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "San Francisco",
  "Seattle",
] as const

const LISTING_TYPES = ["Buy", "Sell", "Rent"] as const

const PROPERTY_TYPES = [
  "House",
  "Apartment",
  "Villa",
  "Condo",
  "Townhouse",
] as const

export function PropertySearch() {
  const [location, setLocation] = useState("")
  const [listingType, setListingType] = useState("Buy")
  const [propertyType, setPropertyType] = useState("House")

  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <div className="flex flex-col items-stretch gap-3 rounded-2xl bg-card p-3 shadow-xl sm:flex-row sm:items-center sm:rounded-full sm:p-2">
        {/* Location */}
        <SearchSelect
          icon={<MapPin className="size-4 text-muted-foreground" />}
          value={location}
          onChange={setLocation}
          placeholder="Search location"
          options={LOCATIONS.map((l) => l)}
        />

        <Divider />

        {/* Listing type */}
        <SearchSelect
          icon={<Building2 className="size-4 text-muted-foreground" />}
          value={listingType}
          onChange={setListingType}
          placeholder="Type"
          options={LISTING_TYPES.map((t) => t)}
        />

        <Divider />

        {/* Property type */}
        <SearchSelect
          icon={<Home className="size-4 text-muted-foreground" />}
          value={propertyType}
          onChange={setPropertyType}
          placeholder="Property"
          options={PROPERTY_TYPES.map((p) => p)}
        />

        {/* Submit */}
        <button
          type="button"
          className="shrink-0 cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Find Property
        </button>
      </div>
    </div>
  )
}

function SearchSelect({
  icon,
  value,
  onChange,
  placeholder,
  options,
}: {
  icon: React.ReactNode
  value: string
  onChange: (val: string) => void
  placeholder: string
  options: string[]
}) {
  return (
    <div className="relative flex min-w-0 flex-1 items-center gap-2 rounded-full px-4 py-2">
      {icon}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-w-0 cursor-pointer appearance-none bg-transparent text-sm text-foreground outline-none"
        aria-label={placeholder}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronIcon />
    </div>
  )
}

function Divider() {
  return <div className="hidden h-8 w-px bg-border sm:block" aria-hidden="true" />
}

function ChevronIcon() {
  return (
    <svg
      className="pointer-events-none size-4 shrink-0 text-muted-foreground"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}
