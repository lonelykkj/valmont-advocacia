import { partners } from '../data/content'

export default function Partners() {
  return (
    <section id="socios">
      <div className="mx-auto max-w-[1360px] px-10 py-40">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <div className="min-w-0 flex-[1_1_560px]">
            <div className="text-xs tracking-[0.34em] text-bronze uppercase">(03) Sócios</div>
            <h2 className="mt-6 font-serif text-[clamp(44px,5.6vw,84px)] leading-[0.98] font-normal tracking-[-0.03em]">
              As pessoas por trás<br />das <em className="text-bronze">grandes decisões</em>.
            </h2>
          </div>
          <a href="#socios" className="inline-flex min-h-12 items-center rounded-full border border-ink px-[26px] text-sm font-medium">
            Toda a equipe
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
          {partners.map((p, i) => (
            <article key={i} className={`flex flex-col ${i === 1 ? 'pt-16' : ''}`}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-green">
                <img src={p.photo} alt={`Retrato de ${p.name}`} loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-[12px_12px_0] rounded-t-full border border-b-0 border-brass/45" />
              </div>
              <div className="flex justify-between gap-4 border-b border-ink/16 py-6">
                <div>
                  <h3 className="font-serif text-[30px] leading-[1.1] font-normal">{p.name}</h3>
                  <div className="mt-2 text-sm text-muted">{p.area}</div>
                </div>
                <span className="text-xs tracking-[0.2em] whitespace-nowrap text-bronze uppercase">{p.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
