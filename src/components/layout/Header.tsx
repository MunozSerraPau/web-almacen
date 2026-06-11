import { getTranslations } from "@/lib/i18n"
import { HeaderContent } from "./HeaderContent"

export function Header() {
  const t = getTranslations()  // Server component — locale desde cookies aquí en el futuro
  return <HeaderContent t={t} />
}