import { getTranslations } from "@/lib/i18n"

export function Footer() {
  const t = getTranslations()

  return (
    <footer className="border-t border-border/30 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <span className="font-serif font-semibold text-foreground">Silva Artis</span>
        <span>{t.footer.tagline}</span>
        <span>© {new Date().getFullYear()} · {t.footer.rights}</span>
      </div>
    </footer>
  )
}