import { pillars } from '../data/content'

const numberClass = 'font-serif text-[clamp(80px,9vw,132px)] leading-none tracking-[-0.04em]'
const outlined = { WebkitTextStroke: '1px #14140F' }

export default function Manifesto() {
  return (
    <section id="manifesto">
      <div className="mx-auto flex max-w-[1360px] flex-wrap gap-12 px-10 pt-40 pb-30">
        <div className="flex-[0_0_160px] text-xs tracking-[0.34em] text-bronze uppercase">(01) Manifesto</div>
        <div className="min-w-0 flex-[999_1_640px]">
          <p className="font-serif text-[clamp(34px,4.6vw,68px)] leading-[1.12] tracking-[-0.02em]">
            Acreditamos que a advocacia de excelência é <em className="text-bronze">silenciosa</em>: antecipa riscos, protege patrimônios e transforma incerteza em <em className="text-bronze">decisão segura</em> — antes que o conflito exista.
          </p>
          <div className="mt-18 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 border-t border-ink/16 pt-10">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="font-serif text-[26px]">{p.title}</div>
                <p className="mt-2.5 text-[15px] text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1360px] px-10 pb-40">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] border-t border-b border-t-ink border-b-ink/16">
          <div className="py-10 pr-8">
            <div className={`${numberClass} text-transparent`} style={outlined}>32</div>
            <div className="mt-4 text-sm text-muted">anos de história e reputação construída</div>
          </div>
          <div className="border-l border-ink/16 px-8 py-10">
            <div className={`${numberClass} text-transparent`} style={outlined}>R$18bi</div>
            <div className="mt-4 text-sm text-muted">em operações assessoradas</div>
          </div>
          <div className="border-l border-ink/16 py-10 pl-8">
            <div className={`${numberClass} text-bronze`}>47</div>
            <div className="mt-4 text-sm text-muted">reconhecimentos em rankings jurídicos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
