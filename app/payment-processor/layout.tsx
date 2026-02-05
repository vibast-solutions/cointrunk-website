import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Processor - Accept BZE & Crypto Payments',
  description:
    'Accept BZE and BeeZee blockchain assets with ease. Simple merchant integration, low fees, and an intuitive checkout flow for your business.',
  openGraph: {
    title: 'CoinTrunk Payment Processor',
    description:
      'Accept BZE and BeeZee blockchain assets with ease. Simple merchant integration, low fees, and an intuitive checkout flow.',
    url: 'https://cointrunk.io/payment-processor',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CoinTrunk Payment Processor',
      },
    ],
  },
}

export default function PaymentProcessorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
