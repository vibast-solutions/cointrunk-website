'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Store, Coins, ShoppingCart, TrendingDown, ArrowRight, ExternalLink, Link2, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'

const features = [
  {
    icon: Store,
    title: 'Easy Merchant Integration',
    description:
      'Get started in minutes with our simple setup process. No complex configurations needed — just create your merchant account, set up your payment preferences, and start accepting crypto payments right away.',
  },
  {
    icon: Coins,
    title: 'BZE & BeeZee Asset Support',
    description:
      'Accept BZE, the native coin of the BeeZee blockchain, along with a growing list of IBC tokens available on the network. Offer your customers flexible payment options across the BeeZee ecosystem.',
  },
  {
    icon: ShoppingCart,
    title: 'Intuitive Checkout Flow',
    description:
      'Provide your customers with a smooth, familiar checkout experience. Our payment flow is designed to be simple and straightforward, reducing friction and increasing successful transactions.',
  },
  {
    icon: TrendingDown,
    title: 'Low Transaction Fees',
    description:
      'Benefit from the BeeZee blockchain\'s efficient consensus mechanism. Transaction fees are a fraction of traditional payment processors, letting you keep more of your revenue.',
  },
  {
    icon: Link2,
    title: 'One-Time Payment Links',
    description:
      'No storefront needed — generate a simple payment link and share it with your client. Perfect for freelancers, service providers, or anyone who needs to get paid quickly without a full merchant setup.',
  },
  {
    icon: RefreshCw,
    title: 'Settle in Any Supported Coin',
    description:
      'Choose which coin you want to receive, regardless of what your customer pays with. Payments are automatically settled in the supported asset of your choice, giving you full control over your revenue.',
  },
]

const supportedAssets = [
  { name: 'BZE', description: 'Native BeeZee coin', highlight: true },
  { name: 'USDC', description: 'Stablecoin via BeeZee (IBC) or Noble', highlight: false },
  { name: 'PHOTON', description: 'AtomOne fee token', highlight: false },
  { name: 'ATONE', description: 'AtomOne governance token', highlight: false },
  { name: 'VDL', description: 'Vidulum token', highlight: false },
]

export default function PaymentProcessorPage() {
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, margin: '-100px' })
  const assetsRef = useRef(null)
  const assetsInView = useInView(assetsRef, { once: true, margin: '-100px' })
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
              Accept BZE and BeeZee blockchain assets with ease. A simple, powerful payment solution
              for merchants and businesses in the Web3 ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="https://pay.cointrunk.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Launch Payment App
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>
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
              crypto payments on the BeeZee blockchain.
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
              Powered by the BeeZee blockchain — a fast, low-fee network in the Cosmos ecosystem.
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
              BeeZee is a Cosmos SDK-based blockchain with fast finality, low transaction costs, and
              full IBC interoperability. It provides the ideal infrastructure for seamless crypto
              payments.
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

          {/* Supported Assets Grid */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {supportedAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 20 }}
                animate={assetsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card text-center w-full sm:w-[calc(33.333%-1rem)]"
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${asset.highlight ? 'bg-accent/20' : 'bg-primary-light/20'}`}>
                  <Coins size={24} className={asset.highlight ? 'text-accent' : 'text-primary-light'} />
                </div>
                <h3 className="text-lg font-bold mb-1">{asset.name}</h3>
                <p className="text-white/60 text-sm">{asset.description}</p>
              </motion.div>
            ))}
          </div>
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
              Start accepting BZE and BeeZee assets today. Set up your merchant account and
              integrate our payment processor in minutes.
            </p>
            <a
              href="https://pay.cointrunk.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Started Now
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
