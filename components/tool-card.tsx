'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ToolCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  ctaText?: string
  ctaLink?: string
  comingSoon?: boolean
  index: number
}

export default function ToolCard({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  ctaLink,
  comingSoon,
  index,
}: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`card relative group ${comingSoon ? 'opacity-80' : ''}`}
    >
      {/* Coming Soon Badge */}
      {comingSoon && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/30">
          <Clock size={14} className="text-accent" />
          <span className="text-xs font-medium text-accent">Coming Soon</span>
        </div>
      )}

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-light/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-accent" size={32} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span className="text-white/70 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {ctaLink && ctaText && !comingSoon && (
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors group/link"
        >
          {ctaText}
          <ArrowRight
            size={18}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </a>
      )}

      {comingSoon && (
        <span className="inline-flex items-center gap-2 text-white/40 font-medium">
          Stay tuned for updates
        </span>
      )}

      {/* Hover gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}
