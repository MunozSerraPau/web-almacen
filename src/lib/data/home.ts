import { prisma } from "@/lib/prisma"     // ajusta la ruta a tu singleton

export type HomeProduct = {
  id: string
  name: string
  description: string | null
  price: string
  imageUrl: string[]
  category: {
    id: string
    name: string
    slug: string
  }
}

export type HomeCategory = {
  id: string
  name: string
  slug: string
}

export type HomeData = {
  products: HomeProduct[]
  categories: HomeCategory[]
}

export async function getHomeData(): Promise<HomeData> {
  const [products, categories] = await Promise.all([
    prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        imageUrl: true,
        category: {
          select: { id: true, name: true, slug: true },
        },
      },
    }),
    prisma.category.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true, slug: true },
    }),
  ])

  return {
    products: products.map((p) => ({
      ...p,
      price: p.price.toString(), // Decimal → string para serializar
    })),
    categories,
  }
}