import { es } from "./locales/es"
import { en } from "./locales/en"
import type { Translations } from "./locales/es"

export type Locale = "es" | "en"

const locales: Record<Locale, Translations> = { es, en }

// Por ahora locale fijo; cuando añadas next-intl o cookies, cambias solo esto
export function getTranslations(locale: Locale = "es"): Translations {
  return locales[locale] ?? locales.es
}

export type { Translations }