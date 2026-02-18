import Image from "next/image"
import { MapPin, BedDouble, Bath, Ruler } from "lucide-react"

export interface Property {
  id: string
  name: string
  location: string
  image: string
  bedrooms: number
  bathrooms: number
  sqft: number
  category: string
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group cursor-pointer">
      {/* Image container */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={property.image}
          alt={property.name}
          width={600}
          height={450}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Glass overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 m-3 rounded-xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-white">
            <MapPin className="size-3.5 shrink-0" strokeWidth={2} />
            <span className="truncate text-xs font-medium">{property.location}</span>
          </div>

          <h3 className="mt-1.5 text-lg font-bold text-white">{property.name}</h3>

          <div className="mt-2 flex items-center gap-4 text-xs font-medium text-white/85">
            <span className="flex items-center gap-1.5">
              <BedDouble className="size-3.5 shrink-0" strokeWidth={2} />
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="size-3.5 shrink-0" strokeWidth={2} />
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="size-3.5 shrink-0" strokeWidth={2} />
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
