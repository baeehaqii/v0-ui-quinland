import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  projectName: string
}

export function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [main, secondary, tertiary] = images

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:grid-rows-2">
      {/* Main large image */}
      <div className="relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2">
        <Image
          src={main}
          alt={`${projectName} - Main view`}
          width={900}
          height={600}
          className="h-[280px] w-full object-cover sm:h-[360px] lg:h-full"
          priority
        />
        {/* WhatsApp button */}
        <Link
          href="#"
          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-emerald-700"
        >
          <MessageCircle className="size-4" />
          Whatsapp
        </Link>
      </div>

      {/* Top right image */}
      <div className="hidden overflow-hidden rounded-2xl lg:block">
        <Image
          src={secondary}
          alt={`${projectName} - Exterior`}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom right image */}
      <div className="relative hidden overflow-hidden rounded-2xl lg:block">
        <Image
          src={tertiary}
          alt={`${projectName} - Detail`}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
        {/* See All Image overlay */}
        <button
          type="button"
          className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/80"
        >
          See All Image
        </button>
      </div>
    </div>
  )
}
