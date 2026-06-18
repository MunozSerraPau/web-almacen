import { prisma } from "@/lib/prisma"

export type HomeProduct = {
  id: number
  name: string
  description: string | null
  price: string
  imageUrl: string[]
  category: {
    id: number
    name: string
    slug: string
  }
}

export type HomeCategory = {
  id: number
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