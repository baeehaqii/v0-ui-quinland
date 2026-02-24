"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Property", href: "/property" },
  { label: "Event & CSR", href: "/event-csr" },
  { label: "Rent", href: "/rent" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detail property pages: /property/[slug] — has white bg, needs dark text when not scrolled
  const isDetailPage = /^\/property\/.+/.test(pathname)

  // On scroll: always dark glass. Not scrolled: transparent (white text) except detail page (dark text)
  const navBg = scrolled
    ? "bg-slate-900/40 backdrop-blur-md shadow-lg"
    : "bg-transparent"

  // Text color: black on detail pages when not scrolled, white everywhere else
  const textColor = !scrolled && isDetailPage ? "text-slate-900" : "text-white"
  const textColorMuted = !scrolled && isDetailPage ? "text-slate-700" : "text-white/80"
  const hoverTextColor = !scrolled && isDetailPage ? "hover:text-slate-900" : "hover:text-white"
  const underlineColor = !scrolled && isDetailPage ? "bg-slate-900" : "bg-white"
  const mobileToggleColor = !scrolled && isDetailPage ? "text-slate-900" : "text-white"

  // Login button
  const loginButtonClass = scrolled
    ? "bg-white text-slate-900 shadow-sm hover:shadow-md"
    : isDetailPage
      ? "border border-slate-900/60 text-slate-900 hover:bg-slate-900/10"
      : "border border-white/70 text-white hover:bg-white/10"

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <RealtekLogo color={!scrolled && isDetailPage ? "text-slate-900" : "text-white"} />
          <span className={`text-lg font-bold tracking-tight transition-colors duration-500 ${textColor}`}>
            Quinland Grup
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-500 ${textColorMuted} ${hoverTextColor}`}
              >
                {link.label}
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${underlineColor}`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Login button */}
        <Link
          href="/login"
          className={`hidden rounded-full px-6 py-2 text-sm font-semibold transition-all md:inline-block ${loginButtonClass}`}
        >
          Login
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`md:hidden transition-colors duration-500 ${mobileToggleColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-900/50 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="mt-2 block rounded-full bg-white px-6 py-2 text-center text-sm font-semibold text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

function RealtekLogo({ color = "text-white" }: { color?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`transition-colors duration-500 ${color}`}
    >
      <rect x="2" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 26V12L14 6L22 12V26" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 26V18H18V26" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="14" y1="2" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
