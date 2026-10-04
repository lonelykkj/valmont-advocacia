import { useState } from 'react'
import { navLinks } from '../data/content'
import ArrowIcon from './ArrowIcon'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative mx-auto flex max-w-[1360px] items-center justify-between gap-5 px-10 py-7">
      <a href="/" className="flex items-baseline gap-3">
        <span className="font-serif text-[30px] tracking-[0.02em]">Valmont</span>
        <span className="text-[11px] tracking-[0.4em] text-brass uppercase">Advogados</span>
      </a>
      <nav aria-label="Principal" className="hidden gap-x-9 text-sm lg:flex">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <a href="/#contato" className="hidden min-h-12 items-center gap-2.5 rounded-full bg-cream px-[26px] text-sm font-medium text-green lg:inline-flex">
        Agende uma reunião
        <ArrowIcon />
      </a>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-cream/40 lg:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 8h16M4 16h16'} />
        </svg>
      </button>

      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="absolute inset-x-0 top-full z-20 flex flex-col border-t border-cream/14 bg-green px-10 pb-10 lg:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-cream/14 py-4 font-serif text-[28px]">
              {l.label}
            </a>
          ))}
          <a href="/#contato" onClick={() => setOpen(false)} className="mt-8 inline-flex min-h-12 items-center gap-2.5 self-start rounded-full bg-cream px-[26px] text-sm font-medium text-green">
            Agende uma reunião
            <ArrowIcon />
          </a>
        </nav>
      )}
    </header>
  )
}
