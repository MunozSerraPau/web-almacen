import { getHomeData } from "@/lib/data/home"
import { getTranslations } from "@/lib/i18n"
import { CategoryFilter } from "@/components/custom_components/CategoryFilter"

export default async function HomePage() {
  const { products, categories } = await getHomeData()
  const t = getTranslations()

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-table.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d]/80 via-[#0d1a0d]/20 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-3">
            {t.home.hero.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-[1.05] mb-4">
            {t.home.hero.headline}
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            {t.home.hero.subheadline}
          </p>
        </div>
      </section>

      {/* ── CATÁLOGO ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <CategoryFilter
          categories={categories}
          products={products}
          labelAll={t.home.catalog.filterAll}
        />
      </section>
    </>
  )
}