import Areas from './components/Areas'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Manifesto from './components/Manifesto'
import Partners from './components/Partners'

export default function App() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Manifesto />
      <Areas />
      <Partners />
      <Insights />
      <Contact />
    </main>
  )
}
