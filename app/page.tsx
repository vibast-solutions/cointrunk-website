import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Tools from '@/components/tools'
import WhyBeezee from '@/components/why-beezee'
import CustomDev from '@/components/custom-dev'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Tools />
      <WhyBeezee />
      <CustomDev />
      <Footer />
    </main>
  )
}
