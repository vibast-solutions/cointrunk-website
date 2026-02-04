'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Code2, Wrench, MessageSquare, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Blockchain Development',
    description: 'Custom blockchain development and auditing.',
  },
  {
    icon: Wrench,
    title: 'dApp Development',
    description: 'Full-stack decentralized application building.',
  },
  {
    icon: Rocket,
    title: 'Smart Contracts',
    description: 'Custom smart contract design and implementation.',
  },
]

export default function CustomDev() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card max-w-5xl mx-auto p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Custom Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Need Custom Blockchain
              <br />
              Development?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
              CoinTrunk is available for hire. We build custom blockchain tools,
              smart contracts, and decentralized applications tailored to your
              specific needs.
            </p>

            {/* Services grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="mailto:contact@cointrunk.io"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageSquare size={20} />
                Get in Touch
              </a>
              <a
                href="https://x.com/CoinTrunkBZE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Follow Us on X
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
