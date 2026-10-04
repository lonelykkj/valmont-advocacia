import { useState } from 'react'
import { areas } from '../data/content'

export default function Areas() {
  const [active, setActive] = useState(0)
  const cur = areas[active]

  return (
    <section id="atuacao" className="bg-deep text-cream">
      <div className="mx-auto max-w-[1360px] px-10 py-35">
        <div className="mb-18 flex flex-wrap items-end justify-between gap-8">
          <div className="min-w-0 flex-[1_1_560px]">
            <div className="text-xs tracking-[0.34em] text-brass uppercase">(02) Áreas de atuação</div>
            <h2 className="mt-6 font-serif text-[clamp(44px,5.6vw,84px)] leading-[0.98] font-normal tracking-[-0.03em]">
              Seis frentes.<br /><em className="text-brass">Uma</em> só estratégia.
            </h2>
          </div>
          <p className="flex-[0_1_360px] text-cream/72">Selecione uma área para conhecer como atuamos.</p>
        </div>

        <div className="flex flex-wrap gap-14">
          <div className="min-w-0 flex-[1_1_520px] border-t border-cream/16">
            {areas.map((a, i) => (
              <button
                key={a.n}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex w-full cursor-pointer items-baseline gap-7 border-b border-cream/16 py-[26px] text-left ${i === active ? 'text-cream' : 'text-cream/50'}`}
              >
                <span className="flex-[0_0_48px] text-[13px] tracking-[0.1em] text-brass">{a.n}</span>
                <span className={`flex-auto font-serif text-[clamp(28px,3vw,44px)] leading-[1.1] tracking-[-0.02em] ${i === active ? 'italic' : ''}`}>{a.title}</span>
                <span className={`text-[26px] text-brass ${i === active ? 'opacity-100' : 'opacity-0'}`}>→</span>
              </button>
            ))}
          </div>

          <div className="relative flex min-h-[560px] min-w-0 flex-[1_1_400px] flex-col gap-6 rounded-t-[240px] bg-green px-12 pt-30 pb-14">
            <div className="absolute inset-[14px_14px_0] rounded-t-[230px] border border-b-0 border-brass/40" />
            <span className="relative font-serif text-8xl leading-none text-brass italic">{cur.n}</span>
            <h3 className="relative font-serif text-[38px] leading-[1.1] font-normal">{cur.title}</h3>
            <p className="relative text-cream/78">{cur.text}</p>
            <div className="relative mt-auto flex flex-wrap gap-2.5">
              {cur.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-cream/28 px-4 py-2 text-[13px]">{tag}</span>
              ))}
            </div>
            <a href="#contato" className="relative inline-flex min-h-11 items-center gap-2.5 text-sm font-medium text-brass">
              Falar com o especialista →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
