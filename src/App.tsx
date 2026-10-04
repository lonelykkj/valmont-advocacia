import Areas from './components/Areas'
import Article from './components/Article'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Manifesto from './components/Manifesto'
import Partners from './components/Partners'
import WhatsAppIcon from './components/WhatsAppIcon'
import { contact } from './data/content'
import { posts } from './data/posts'

function Page() {
  const path = window.location.pathname.replace(/\/$/, '')

  if (path === '/artigos') {
    return (
      <>
        <div className="bg-green text-cream"><Header /></div>
        <Insights all />
      </>
    )
  }

  const post = posts.find((p) => path === `/artigos/${p.slug}`)
  if (post) return <Article post={post} />

  return (
    <>
      <Hero />
      <Manifesto />
      <Areas />
      <Partners />
      <Insights />
    </>
  )
}

export default function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Page />
        <Contact />
      </main>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed right-5 bottom-5 z-30 flex size-14 items-center justify-center rounded-full bg-brass text-green shadow-lg hover:text-cream"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  )
}
