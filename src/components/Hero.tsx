import { marquee, navLinks } from '../data/content'
import ArrowIcon from './ArrowIcon'

export default function Hero() {
  return (
    <section id="topo" className="relative bg-green text-cream">
      <header className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-5 px-10 py-7">
        <a href="#topo" className="flex items-baseline gap-3">
          <span className="font-serif text-[30px] tracking-[0.02em]">Valmont</span>
          <span className="text-[11px] tracking-[0.4em] text-brass uppercase">Advogados</span>
        </a>
        <nav aria-label="Principal" className="flex flex-wrap gap-x-9 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="#contato" className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cream px-[26px] text-sm font-medium text-green">
          Agende uma reunião
          <ArrowIcon />
        </a>
      </header>

      <div className="mx-auto flex max-w-[1360px] flex-wrap items-end gap-12 px-10 pt-16">
        <div className="min-w-0 flex-[999_1_640px] pb-10">
          <div className="flex items-center gap-3.5 text-xs tracking-[0.34em] text-brass uppercase">
            <span className="size-2 rounded-full bg-brass" />
            Advocacia empresarial de alta complexidade
          </div>
          <h1 className="mt-9 font-serif text-[clamp(60px,9.6vw,148px)] leading-[0.92] font-normal tracking-[-0.035em]">
            Onde o<br />direito se torna <em className="text-brass">vantagem</em>
            <br />competitiva.
          </h1>
          <div className="mt-14 flex flex-wrap items-center gap-x-14 gap-y-8">
            <p className="max-w-[440px] flex-[1_1_340px] text-lg text-cream/78">
              Conduzimos as decisões jurídicas mais sensíveis de empresas, conselhos e famílias empresárias — com a discrição de uma boutique e a profundidade de um grande escritório.
            </p>
            <a href="#atuacao" className="inline-flex items-center gap-4 text-[15px] font-medium">
              <span className="flex size-16 items-center justify-center rounded-full border border-cream/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </span>
              Conheça nossa atuação
            </a>
          </div>
        </div>

        <div className="relative ml-auto max-w-[460px] min-w-0 flex-[1_1_380px]">
          <div className="relative flex aspect-[3/4.3] items-end justify-center overflow-hidden rounded-t-full bg-deep pb-10">
            <div className="absolute inset-[18px_18px_0] rounded-t-full border border-b-0 border-brass/50" />
            <div className="absolute top-[38%] left-1/2 h-[46%] w-px -translate-1/2 bg-linear-to-b from-brass/0 via-brass/60 to-brass/0" />
            <span className="relative text-[11px] tracking-[0.28em] text-cream/60 uppercase">[Foto: arquitetura da sede]</span>
          </div>
          <div className="absolute top-[46%] -left-16 flex size-[168px] items-center justify-center rounded-full bg-green">
            <svg viewBox="0 0 200 200" width="156" height="156" aria-hidden="true" className="absolute animate-spin-slow">
              <defs>
                <path id="vseal" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text fill="#B8935A" fontSize="14" letterSpacing="3" fontFamily="Instrument Sans, sans-serif">
                <textPath href="#vseal" textLength="486">VALMONT ADVOGADOS · EXCELÊNCIA · DISCRIÇÃO · </textPath>
              </text>
            </svg>
            <span className="font-serif text-[44px] text-cream italic">V</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-cream/14 py-7">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-10 pr-10 font-serif text-[34px] whitespace-nowrap text-cream/90 italic">
              {m}
              <span className="text-lg text-brass not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
