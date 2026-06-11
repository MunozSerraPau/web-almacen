import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import type { HomeProduct } from "@/lib/data/home"

// Badges aleatorios por ahora — en el futuro vendrán de la BD (campo tags o flags)
const BADGES = ["Hecho a mano", "Edición limitada", "En exposición"] as const
type Badge = (typeof BADGES)[number]

const badgeColors: Record<Badge, string> = {
  "Hecho a mano":      "bg-[#4a6741]/80 text-white",
  "Edición limitada":  "bg-[#6b5a3e]/80 text-white",
  "En exposición":     "bg-[#3d5a3d]/80 text-white",
}

type Props = {
  product: HomeProduct
  badge?: Badge
}

export function ProductCard({ product, badge }: Props) {
  const hasImage = product.imageUrl.length > 0
  const price = parseFloat(product.price)

  return (
    <Link href={`/catalogo/${product.id}`} className="group block">
      <Card className="overflow-hidden border-0 shadow-none bg-transparent">
        {/* Imagen */}
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#e8e0d5]">
          {hasImage ? (
            <Image
              src={product.imageUrl[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Placeholder con textura cuando no hay imagen
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 opacity-20">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 4 C32 4 8 20 8 38 C8 50 18 58 32 58 C46 58 56 50 56 38 C56 20 32 4 32 4Z"
                    fill="#5a4a3a" />
                  <path d="M32 58 L32 30 M32 30 L22 20 M32 30 L42 20"
                    stroke="#5a4a3a" strokeWidth="2" />
                </svg>
              </div>
            </div>
          )}

          {badge && (
            <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${badgeColors[badge]}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Info */}
        <CardContent className="px-0 pt-3 pb-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="font-serif text-base font-semibold leading-snug truncate">
                {product.name}
              </p>
              {product.description && (
                <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                  {product.description}
                </p>
              )}
            </div>
            <span className="text-sm font-semibold text-[#2d4a2d] shrink-0">
              ${price.toLocaleString("es-ES", { minimumFractionDigits: 0 })}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}