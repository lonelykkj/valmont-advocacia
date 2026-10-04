import type { FormEvent } from 'react'
import { contact, navLinks } from '../data/content'
import ArrowIcon from './ArrowIcon'

const labelClass = 'flex flex-col gap-1 border-b border-ink/20 py-3.5 text-xs tracking-[0.2em] text-muted uppercase'
const inputClass = 'border-none bg-transparent text-lg tracking-normal text-ink normal-case outline-none'

const footerLinks = [...navLinks.slice(0, 4), { href: '/#topo', label: 'Privacidade' }]

// Sem backend: abre o e-mail do visitante com a mensagem já preenchida.
function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  const body = `Nome: ${data.get('nome')}\nE-mail: ${data.get('email')}\n\n${data.get('assunto')}`
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Solicitação de reunião')}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  return (
    <section id="contato" className="relative bg-green text-cream">
      <div className="mx-auto flex max-w-[1360px] flex-wrap gap-20 px-10 pt-40 pb-20">
        <div className="min-w-0 flex-[1_1_460px]">
          <div className="text-xs tracking-[0.34em] text-brass uppercase">(05) Contato</div>
          <h2 className="mt-6 font-serif text-[clamp(48px,6.4vw,100px)] leading-[0.95] font-normal tracking-[-0.035em]">
            Vamos<br />conversar <em className="text-brass">em<br />confiança.</em>
          </h2>
          <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 text-[15px]">
            <div>
              <div className="text-[11px] tracking-[0.3em] text-brass uppercase">Sede</div>
              <div className="mt-2 text-cream/85">Av. das Magnólias, 1000 — 18º andar<br />São Paulo — SP</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.3em] text-brass uppercase">Atendimento</div>
              <div className="mt-2 flex flex-col items-start text-cream/85">
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>{contact.phone}</a>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-1 text-brass">WhatsApp →</a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex min-w-0 flex-[1_1_480px] flex-col gap-2 rounded bg-cream p-12 text-ink">
          <div className="mb-4 font-serif text-[30px]">Solicite uma reunião</div>
          <label className={labelClass}>
            Nome
            <input type="text" name="nome" required autoComplete="name" placeholder="Seu nome completo" className={`min-h-10 ${inputClass}`} />
          </label>
          <label className={labelClass}>
            E-mail corporativo
            <input type="email" name="email" required autoComplete="email" placeholder="nome@empresa.com.br" className={`min-h-10 ${inputClass}`} />
          </label>
          <label className={labelClass}>
            Assunto
            <textarea name="assunto" required rows={3} placeholder="Conte-nos brevemente sobre sua demanda" className={`resize-y pt-2 ${inputClass}`} />
          </label>
          <button type="submit" className="mt-7 inline-flex min-h-14 cursor-pointer items-center gap-3 self-start rounded-full bg-green px-8 text-[15px] font-medium text-cream">
            Enviar solicitação
            <ArrowIcon />
          </button>
          <p className="mt-4 text-[13px] text-muted">Informações tratadas sob sigilo profissional.</p>
        </form>
      </div>

      <footer className="mx-auto max-w-[1360px] overflow-hidden border-t border-cream/14 px-10 pt-20">
        <div className="flex flex-wrap justify-between gap-8 text-sm text-cream/75">
          <span>Inscrição OAB/SP nº 12.345</span>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <span>© 2026 Valmont Advogados</span>
        </div>
        <div aria-hidden="true" className="mt-12 text-center font-serif text-[clamp(110px,23vw,340px)] leading-[0.78] tracking-[-0.05em] whitespace-nowrap text-brass opacity-90">
          Valmont
        </div>
      </footer>
    </section>
  )
}
