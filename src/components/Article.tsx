import { useEffect } from 'react'
import type { posts } from '../data/posts'
import Header from './Header'

export default function Article({ post }: { post: (typeof posts)[number] }) {
  useEffect(() => {
    document.title = `${post.title} | Valmont Advogados`
    document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt)
  }, [post])

  return (
    <>
      <div className="bg-green text-cream">
        <Header />
        <div className="mx-auto max-w-[960px] px-10 pt-16 pb-24">
          <a href="/artigos" className="text-sm font-medium text-brass">← Todas as publicações</a>
          <div className="mt-12 flex flex-wrap items-center gap-4 text-[13px] text-cream/70">
            <span className="rounded-full border border-cream/30 px-3.5 py-1.5 text-cream">{post.cat}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="mt-8 font-serif text-[clamp(40px,6vw,80px)] leading-[1] font-normal tracking-[-0.03em]">{post.title}</h1>
          <p className="mt-8 max-w-[680px] text-lg text-cream/78">{post.excerpt}</p>
        </div>
      </div>

      <article className="mx-auto max-w-[760px] px-10 py-24">
        {post.sections.map((s) => (
          <section key={s.title} className="mb-14">
            <h2 className="font-serif text-[clamp(28px,3vw,36px)] leading-[1.15] font-normal">{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-5 text-lg text-ink/85">{p}</p>
            ))}
          </section>
        ))}
        <p className="border-t border-ink/16 pt-8 text-[15px] text-muted">
          Este conteúdo tem caráter informativo e não substitui uma consulta.{' '}
          <a href="#contato" className="text-bronze underline">Fale com nossa equipe</a> para analisar o seu caso.
        </p>
      </article>
    </>
  )
}
