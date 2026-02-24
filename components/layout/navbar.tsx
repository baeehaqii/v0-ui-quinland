"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
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

  // Default: fully transparent. On scroll: dark glass effect
  const navBg = scrolled
    ? "bg-slate-900/40 backdrop-blur-md shadow-lg"
    : "bg-transparent"

  // Login button: border-only when not scrolled, white fill when scrolled
  const loginButtonClass = scrolled
    ? "bg-white text-slate-900 shadow-sm hover:shadow-md"
    : "border border-white/70 text-white hover:bg-white/10"

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <RealtekLogo />
          <span className="text-lg font-bold tracking-tight text-white">
            Quinland Grup
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
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
          className="text-white md:hidden"
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

function RealtekLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="8"
        width="24"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-white"
      />
      <path
        d="M6 26V12L14 6L22 12V26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="text-white"
      />
      <path
        d="M10 26V18H18V26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="text-white"
      />
      <line
        x1="14"
        y1="2"
        x2="14"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-white"
      />
    </svg>
  )
}
