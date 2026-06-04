import { neonConfig } from "@neondatabase/serverless"
import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient } from "../generated/prisma/client"

// Solo necesario en Node.js local, no en Vercel Edge/Serverless
if (process.env.NODE_ENV === "development") {
  const ws = await import("ws")
  neonConfig.webSocketConstructor = ws.default
}

const adapter = new PrismaNeon({           // ← config directa, sin instanciar Pool
  connectionString: process.env.DATABASE_URL!,
})

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma