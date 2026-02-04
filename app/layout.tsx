import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://cointrunk.io'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#231c6f',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CoinTrunk - Building the Future of Web3 | Blockchain Tools & Solutions',
    template: '%s | CoinTrunk',
  },
  description: 'CoinTrunk builds powerful Web3 tools for the BeeZee blockchain ecosystem. Decentralized content sharing, crypto payment processing, and custom blockchain development services.',
  keywords: [
    'Web3',
    'blockchain',
    'BeeZee',
    'BZE',
    'cryptocurrency',
    'decentralized',
    'payment processor',
    'crypto payments',
    'blockchain tools',
    'dApp',
    'decentralized application',
    'smart contracts',
    'content sharing',
    'blockchain development',
    'Web3 tools',
    'Cosmos SDK',
    'IBC',
    'crypto merchant',
    'accept crypto payments',
  ],
  authors: [{ name: 'CoinTrunk', url: siteUrl }],
  creator: 'CoinTrunk',
  publisher: 'CoinTrunk',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'CoinTrunk',
    title: 'CoinTrunk - Building the Future of Web3',
    description: 'CoinTrunk builds powerful Web3 tools for the BeeZee blockchain ecosystem. Decentralized content sharing, crypto payment processing, and custom blockchain development.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CoinTrunk - Web3 Tools Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CoinTrunkBZE',
    creator: '@CoinTrunkBZE',
    title: 'CoinTrunk - Building the Future of Web3',
    description: 'CoinTrunk builds powerful Web3 tools for the BeeZee blockchain ecosystem. Decentralized content sharing and crypto payment processing.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    apple: '/images/favicon.png',
  },
  category: 'technology',
  classification: 'Blockchain, Web3, Cryptocurrency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CoinTrunk',
    url: siteUrl,
    logo: `${siteUrl}/images/ct-logo-white.png`,
    description: 'CoinTrunk builds powerful Web3 tools for the BeeZee blockchain ecosystem.',
    email: 'contact@cointrunk.io',
    sameAs: [
      'https://x.com/CoinTrunkBZE',
    ],
    founder: {
      '@type': 'Organization',
      name: 'Vibast',
      url: 'https://vibast.ro',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Decentralized Content Sharing',
        description: 'Community-curated articles on the blockchain with transparent, decentralized publishing.',
        url: 'https://app.cointrunk.io',
      },
      {
        '@type': 'Offer',
        name: 'Crypto Payment Processor',
        description: 'Accept BZE and BeeZee blockchain assets with easy merchant integration.',
        url: 'https://pay.cointrunk.io',
      },
      {
        '@type': 'Offer',
        name: 'Custom Blockchain Development',
        description: 'Custom blockchain tools, smart contracts, and decentralized applications.',
      },
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CoinTrunk',
    url: siteUrl,
    description: 'Building the Future of Web3',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  )
}
