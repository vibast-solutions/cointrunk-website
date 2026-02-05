'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Newspaper, CreditCard, Rocket } from 'lucide-react'
import ToolCard from './tool-card'

const tools = [
  {
    icon: Newspaper,
    title: 'Decentralized Content Sharing',
    description:
      'A community-curated platform for articles on the blockchain. Transparent, censorship-resistant publishing.',
    features: [
      'Content curated by blockchain governance',
      'Trusted publishers elected by community',
      'Transparent, decentralized publishing',
      'Immutable article storage',
    ],
    ctaText: 'Launch App',
    ctaLink: 'https://app.cointrunk.io',
  },
  {
    icon: CreditCard,
    title: 'Payment Processor',
    description:
      'Accept BZE and BeeZee blockchain assets with ease. Simple integration for merchants and businesses.',
    features: [
      'Easy merchant integration',
      'Support for BZE and other BeeZee assets',
      'Simple and intuitive checkout flow',
      'Low transaction fees',
    ],
    ctaText: 'Start Accepting Payments',
    ctaLink: '/payment-processor',
  },
  {
    icon: Rocket,
    title: 'More Tools Coming',
    description:
      'We\'re constantly building new tools for the Web3 ecosystem. Stay tuned for exciting announcements.',
    features: [
      'New blockchain utilities in development',
      'Community-driven feature requests',
      'Open-source contributions welcome',
      'Regular product updates',
    ],
    comingSoon: true,
  },
]

export default function Tools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tools" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Powerful Web3 Tools
          </h2>
          <p className="text-white/60 text-lg">
            Explore our suite of blockchain-powered tools designed to make Web3
            practical and accessible for everyone.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={tool.title} {...tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
