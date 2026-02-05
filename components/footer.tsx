'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Mail, ExternalLink } from 'lucide-react'

interface FooterLink {
  name: string
  href: string
  external?: boolean
}

interface FooterLinkGroup {
  title: string
  links: FooterLink[]
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Products',
    links: [
      { name: 'CoinTrunk App', href: 'https://app.cointrunk.io', external: true },
      { name: 'Payment Processor', href: 'https://pay.cointrunk.io', external: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'BZE Blockchain', href: 'https://getbze.com', external: true },
      { name: 'Documentation', href: 'https://docs.getbze.com', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/#about', external: false },
      { name: 'Contact', href: '/#contact', external: false },
    ],
  },
]

const socialLinks = [
  { name: 'X', href: 'https://x.com/CoinTrunkBZE', icon: Twitter },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-background-card border-t border-white/10">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/ct-logo-white.png"
                alt="CoinTrunk"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Building powerful tools for blockchain ecosystems. Making Web3 accessible and practical for everyone.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
              <a
                href="mailto:contact@cointrunk.io"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="text-white/60 text-sm space-y-1">
              <p><a href="mailto:contact@cointrunk.io" className="hover:text-white transition-colors">contact@cointrunk.io</a></p>
              <p><a href="mailto:alphateam@getbze.com" className="hover:text-white transition-colors">alphateam@getbze.com</a></p>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-sm text-center md:text-left">
              <p>&copy; {currentYear} CoinTrunk - A BeeZee Product. All rights reserved.</p>
              <p className="mt-1">
                A product by{' '}
                <a
                  href="https://vibast.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/60 transition-colors"
                >
                  vibast.ro
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span>Powered by</span>
              <a
                href="https://getbze.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/beezee-landscape-white.png"
                  alt="BeeZee"
                  width={80}
                  height={20}
                  className="h-5 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
