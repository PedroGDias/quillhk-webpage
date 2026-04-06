import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Security from './components/Security'
import ZeroRisk from './components/ZeroRisk'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <HowItWorks />
        {/*
          <TechAndAI />
        */}
        <Security />
        <ZeroRisk />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
