// prisma.config.ts (en la raíz del proyecto)
import path from "node:path"
import type { PrismaConfig } from "@prisma/config"
import "dotenv/config"

export default {
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: process.env.DIRECT_URL!,
  },
} satisfies PrismaConfig