import { posts } from '../data/content'

export default function Insights() {
  return (
    <section id="insights" className="bg-sand">
      <div className="mx-auto max-w-[1360px] px-10 py-35">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="text-xs tracking-[0.34em] text-bronze uppercase">(04) Insights</div>
            <h2 className="mt-6 font-serif text-[clamp(44px,5.6vw,84px)] leading-[0.98] font-normal tracking-[-0.03em]">
              Pensamento <em className="text-bronze">jurídico</em>.
            </h2>
          </div>
          <a href="#insights" className="inline-flex min-h-12 items-center border-b border-ink text-sm font-medium">
            Ver todas as publicações
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {posts.map((post) => (
            <a key={post.title} href="#insights" className="flex min-h-[380px] flex-col gap-7 rounded bg-cream p-9">
              <div className="flex justify-between text-[13px] text-muted">
                <span className="rounded-full border border-ink/25 px-3.5 py-1.5 text-ink">{post.cat}</span>
                <span>{post.date}</span>
              </div>
              <div className="mt-auto font-serif text-[30px] leading-[1.15] tracking-[-0.01em]">{post.title}</div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-bronze">Ler análise →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
