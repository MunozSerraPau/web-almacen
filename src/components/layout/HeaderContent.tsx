"use client"

import Link from "next/link"
import { useState } from "react"
import type { Translations } from "@/lib/i18n"

type Props = { t: Translations }

export function HeaderContent({ t }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-semibold text-white tracking-wide"
        >
          Silva Artis
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <li>
            <Link href="/catalogo" className="hover:text-white transition-colors">
              {t.nav.catalog}
            </Link>
          </li>
          <li>
            <Link href="/admin/almacen" className="hover:text-white transition-colors">
              {t.nav.stock}
            </Link>
          </li>
          <li>
            <Link href="/admin/tickets" className="hover:text-white transition-colors">
              {t.nav.tickets}
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-white transition-colors">
              {t.nav.profile}
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-px bg-white mb-1" />
          <span className="block w-5 h-px bg-white mb-1" />
          <span className="block w-5 h-px bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a2e1a]/95 backdrop-blur-sm px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/90">
            <li><Link href="/catalogo" onClick={() => setMenuOpen(false)}>{t.nav.catalog}</Link></li>
            <li><Link href="/admin/almacen" onClick={() => setMenuOpen(false)}>{t.nav.stock}</Link></li>
            <li><Link href="/admin/tickets" onClick={() => setMenuOpen(false)}>{t.nav.tickets}</Link></li>
            <li><Link href="/login" onClick={() => setMenuOpen(false)}>{t.nav.profile}</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}