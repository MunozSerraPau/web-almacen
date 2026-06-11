"use client"

import { useState } from "react"
import type { HomeCategory, HomeProduct } from "@/lib/data/home"
import { ProductCard } from "./ProductCard"

type Props = {
  categories: HomeCategory[]
  products: HomeProduct[]
  labelAll: string
}

export function CategoryFilter({ categories, products, labelAll }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active
    ? products.filter((p) => p.category.slug === active)
    : products

  return (
    <div>
      {/* Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActive(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            active === null
              ? "bg-[#2d4a2d] text-white border-[#2d4a2d]"
              : "bg-transparent text-foreground border-border hover:border-[#2d4a2d]"
          }`}
        >
          {labelAll}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.slug)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === cat.slug
                ? "bg-[#2d4a2d] text-white border-[#2d4a2d]"
                : "bg-transparent text-foreground border-border hover:border-[#2d4a2d]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            badge={
              i % 3 === 0 ? "Hecho a mano"
              : i % 3 === 1 ? "Edición limitada"
              : "En exposición"
            }
          />
        ))}
      </div>
    </div>
  )
}