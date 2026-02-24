"use client"

import { useState } from "react"

interface BookingSidebarProps {
  price: string
}

export function BookingSidebar({ price }: BookingSidebarProps) {
  const [agreed, setAgreed] = useState(false)

  return (
    <aside className="sticky top-8 w-full lg:max-w-[320px]">
      {/* Price */}
      <div className="mb-4">
        <span className="text-sm font-semibold text-red-600">Starts From</span>
        <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">
          {price}
        </p>
      </div>

      {/* Booking card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground">
          Booking Appointment
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Schedule a time to meet with our property expert and explore Quinland
          Grup products
        </p>

        <form className="mt-5 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+62"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-foreground">
              Book Appointment Date
            </label>
            <input
              id="date"
              type="date"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 size-4 shrink-0 rounded border-border accent-foreground"
            />
            <span className="text-xs leading-relaxed text-muted-foreground">
              I agree to the terms and conditions that apply.*
            </span>
          </label>

          <p className="text-xs leading-relaxed text-muted-foreground">
            Quinland Grup will never sell or share your information with a third
            party
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Submit
          </button>
        </form>
      </div>
    </aside>
  )
}
