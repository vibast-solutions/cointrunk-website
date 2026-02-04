'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { Check, Zap, Shield, Globe, Coins } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Fast Transactions',
    description: 'Lightning-fast block times for instant confirmations.',
  },
  {
    icon: Coins,
    title: 'Low Fees',
    description: 'Minimal transaction costs make micro-payments viable.',
  },
  {
    icon: Shield,
    title: 'Secure & Proven',
    description: 'Built on Cosmos SDK with robust validator network.',
  },
  {
    icon: Globe,
    title: 'IBC Enabled',
    description: 'Interoperable with the broader Cosmos ecosystem.',
  },
]

const features = [
  'Native staking and governance',
  'Decentralized exchange (DEX)',
  'Smart contract support',
  'Active developer community',
  'Growing ecosystem of dApps',
]

export default function WhyBeezee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-beezee" className="py-24 relative overflow-hidden">
      {/* Gradient line separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Built on BeeZee
              <br />
              <span className="text-white/60">Blockchain</span>
            </h2>
            <p className="text-white/70 mb-8">
              CoinTrunk is proudly built on the BeeZee blockchain, a fast,
              secure, and community-driven network. By leveraging BeeZee&apos;s
              robust infrastructure, we deliver reliable tools that benefit
              from a proven blockchain ecosystem.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-accent" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://getbze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Learn More About BeeZee
            </a>
          </motion.div>

          {/* Right column - Benefits grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-light/30 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* BeeZee Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 card flex items-center justify-center"
            >
              <a
                href="https://getbze.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/beezee-landscape-white.png"
                  alt="BeeZee Blockchain"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
