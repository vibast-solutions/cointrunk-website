import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Processor - Accept BZE & Crypto Payments',
  description:
    'Accept BZE and BeeZee blockchain assets straight into your own wallet. Non-custodial payment links, API and webhooks, with no cut taken from your payments.',
  openGraph: {
    title: 'CoinTrunk Payment Processor',
    description:
      'Accept BZE and BeeZee blockchain assets straight into your own wallet. Non-custodial, with no cut taken from your payments.',
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
