'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Zap, Shield } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Building tools that solve real problems in the Web3 space.',
  },
  {
    icon: Users,
    title: 'Community-First',
    description: 'Open-source, transparent, and governed by the community.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge blockchain technology.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Built on proven, battle-tested blockchain infrastructure.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About CoinTrunk
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Pioneering Web3
              <br />
              <span className="text-white/60">Tools & Solutions</span>
            </h2>
            <div className="space-y-4 text-white/70">
              <p>
                CoinTrunk is a Web3 tools company dedicated to building practical
                blockchain solutions from scratch. We believe in the transformative
                power of decentralized technology and work to make it accessible
                to everyone.
              </p>
              <p>
                In partnership with the BeeZee blockchain, we develop open-source
                tools that empower communities, enable seamless transactions, and
                bring the benefits of Web3 to everyday use cases.
              </p>
              <p>
                Our commitment is to build robust, secure, and user-friendly
                applications that showcase what&apos;s possible when blockchain
                technology meets thoughtful design.
              </p>
            </div>
          </motion.div>

          {/* Right column - Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <value.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
