'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Wallet,
  Coins,
  MousePointerClick,
  Webhook,
  ArrowRight,
  Link2,
  BellRing,
  Clock,
  Check,
  ShieldCheck,
  Signature,
} from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'

const steps = [
  {
    icon: Signature,
    title: 'Add your addresses',
    description:
      'Register the BZE addresses you want to be paid into. You prove each one is yours by signing a short message in your wallet: no transaction, no fee.',
  },
  {
    icon: Link2,
    title: 'Create a payment',
    description:
      'Share a one-time payment link, or create payments from your shop through our API. You set the price for every coin you accept.',
  },
  {
    icon: Wallet,
    title: 'Get paid directly',
    description:
      'Your customer pays straight into your wallet. We recognise the payment on chain and notify you by webhook, dashboard and email.',
  },
]

const features = [
  {
    icon: ShieldCheck,
    title: 'Non-Custodial by Design',
    description:
      'Payments go from your customer\'s wallet straight into yours. We never hold your keys or your coins, so there is nothing of yours sitting with us and nothing to withdraw.',
  },
  {
    icon: Link2,
    title: 'One-Time Payment Links',
    description:
      'No storefront needed: create a link and send it to your client. Perfect for freelancers, invoices and service providers. Links stay open until they are paid, unless you set an expiry date.',
  },
  {
    icon: Webhook,
    title: 'API & Webhooks',
    description:
      'Create payments from your backend with your own order reference and send customers to a hosted checkout. Signed webhooks tell your shop the moment a payment is completed.',
  },
  {
    icon: MousePointerClick,
    title: 'One-Click Checkout',
    description:
      'Customers connect Keplr or Leap and pay in one click, with the amount and payment reference filled in for them. Paying by hand works too, with every detail ready to copy.',
  },
  {
    icon: Coins,
    title: 'Your Price, Per Coin',
    description:
      'Accept BZE and other BeeZee assets, and set your own amount for each one, for example 25 USDC or 5,000 BZE. Your customer picks the coin they want to pay with.',
  },
  {
    icon: BellRing,
    title: 'Nothing Slips Through',
    description:
      'Sent too little? The customer can top up right on the checkout page. Late payments, wrong coins or a forgotten payment reference are highlighted in your dashboard for you to review.',
  },
]

const exampleAssets = [
  { name: 'BZE', description: 'Native BeeZee coin', highlight: true },
  { name: 'USDC', description: 'Stablecoin on BeeZee via IBC', highlight: false },
  { name: 'PHOTON', description: 'AtomOne fee token', highlight: false },
  { name: 'VDL', description: 'Vidulum token', highlight: false },
]

const includedInAllPlans = [
  'No fee on your payments',
  'Payments straight to your own wallet',
  'Payment links, API and signed webhooks',
  'Up to 100 receiving addresses',
  'Dashboard with payment history',
  'Email notifications',
]

export default function PaymentProcessorPage() {
  const stepsRef = useRef(null)
  const stepsInView = useInView(stepsRef, { once: true, margin: '-100px' })
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' })
  const assetsRef = useRef(null)
  const assetsInView = useInView(assetsRef, { once: true, margin: '-100px' })
  const pricingRef = useRef(null)
  const pricingInView = useInView(pricingRef, { once: true, margin: '-100px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-50px' })

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              CoinTrunk Product
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Payment
              <br />
              <span className="gradient-text">Processor</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10"
            >
              Accept BZE and BeeZee blockchain assets straight into your own wallet. We never hold
              your funds: we watch the chain, recognise your payments and keep you informed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="btn-primary inline-flex items-center gap-2 opacity-60 cursor-not-allowed pointer-events-none">
                <Clock size={18} />
                Coming Soon
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative">
        <div className="section-container relative z-10" ref={stepsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Your Wallet, Your Coins
            </h2>
            <p className="text-white/60 text-lg">
              Three steps between you and your first payment, and your funds never pass through us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="card relative"
              >
                <span className="absolute top-6 right-6 text-5xl font-bold text-white/10">
                  {index + 1}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-light/20 flex items-center justify-center mb-6">
                  <step.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="section-container relative z-10" ref={featuresRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Everything You Need
            </h2>
            <p className="text-white/60 text-lg">
              Built for simplicity and reliability, our payment processor makes it easy to accept
              crypto payments on the BeeZee blockchain while you stay in full control of your funds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card relative group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-light/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Blockchain & Coins */}
      <section className="py-24 relative">
        <div className="section-container relative z-10" ref={assetsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={assetsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Blockchain
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Supported Assets
            </h2>
            <p className="text-white/60 text-lg">
              Powered by the BeeZee blockchain: a fast, low-fee network in the Cosmos ecosystem.
            </p>
          </motion.div>

          {/* BeeZee Blockchain Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={assetsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card max-w-2xl mx-auto mb-12 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/beezee-landscape-white.png"
                alt="BeeZee Blockchain"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/60 mb-6">
              Accept BZE and any asset with deep liquidity against BZE on the BeeZee DEX, the same
              rule the network uses to accept a coin for transaction fees. As liquidity grows, so
              does the list of coins you can accept. Payments are final as soon as their block is
              committed.
            </p>
            <a
              href="https://getbze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
            >
              Learn more about BeeZee
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Example Assets Grid */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {exampleAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 20 }}
                animate={assetsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${asset.highlight ? 'bg-accent/20' : 'bg-primary-light/20'}`}>
                  <Coins size={24} className={asset.highlight ? 'text-accent' : 'text-primary-light'} />
                </div>
                <h3 className="text-lg font-bold mb-1">{asset.name}</h3>
                <p className="text-white/60 text-sm">{asset.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={assetsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-white/40 text-sm mt-8"
          >
            Examples only: the list of accepted coins follows liquidity on the BeeZee DEX.
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent/15 rounded-full blur-3xl translate-x-1/2" />
        </div>

        <div className="section-container relative z-10" ref={pricingRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              No Cut of Your Payments
            </h2>
            <p className="text-white/60 text-lg">
              We never take a percentage of what you earn. Start free, and pick a package by how
              many payments you receive each month.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="min-h-[5.5rem]">
                <p className="text-4xl font-bold mb-1">
                  $0
                  <span className="text-lg font-normal text-white/60">/month</span>
                </p>
                <p className="text-white/60 text-sm">Perfect for getting started</p>
              </div>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">A monthly allowance of confirmed payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Every feature included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Email warnings before you reach your limit</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">No card, no commitment</span>
                </li>
              </ul>

              <div className="mt-auto">
                <span className="btn-secondary w-full justify-center opacity-60 cursor-not-allowed pointer-events-none inline-flex items-center gap-2">
                  <Clock size={18} />
                  Coming Soon
                </span>
              </div>
            </motion.div>

            {/* Paid Packages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-8 border-accent/50 relative overflow-hidden flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">Packages</h3>
              <div className="min-h-[5.5rem]">
                <p className="text-4xl font-bold mb-1">
                  Tiered
                  <span className="text-lg font-normal text-white/60"> by volume</span>
                </p>
                <p className="text-white/60 text-sm">Pricing announced at launch</p>
              </div>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">More confirmed payments every month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Paid in crypto, no card needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Upgrade any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Back to Free if you don&apos;t renew</span>
                </li>
              </ul>

              <div className="mt-auto">
                <span className="btn-primary w-full justify-center opacity-60 cursor-not-allowed pointer-events-none inline-flex items-center gap-2">
                  <Clock size={18} />
                  Coming Soon
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <h4 className="text-center text-sm font-semibold text-white/80 mb-4">
              Included in every plan
            </h4>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {includedInAllPlans.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-white/40 text-sm mt-8 max-w-2xl mx-auto">
              Your customers pay only the normal BeeZee network fee for their transaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="section-container relative z-10" ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card max-w-4xl mx-auto text-center py-16 px-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to accept crypto payments?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Get paid in BZE and BeeZee assets straight into your own wallet, with no cut taken
              from your payments.
            </p>
            <span className="btn-primary inline-flex items-center gap-2 opacity-60 cursor-not-allowed pointer-events-none">
              <Clock size={18} />
              Coming Soon
            </span>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
