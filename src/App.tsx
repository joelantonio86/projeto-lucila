import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Therapies } from './components/Therapies'
import { Reflection } from './components/Reflection'
import { InstagramPreview } from './components/InstagramPreview'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Therapies />
        <Reflection />
        <InstagramPreview />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
