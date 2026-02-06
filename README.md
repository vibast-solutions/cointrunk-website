# CoinTrunk Website

Official website for CoinTrunk - a Web3 tools company building on the BeeZee blockchain.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

This generates a static export in the `out` directory.

### Preview Production Build

```bash
npm run build && npx serve out
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx      # Root layout, metadata, SEO
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   └── payment-processor/
│       ├── layout.tsx  # Payment processor SEO metadata
│       └── page.tsx    # Payment processor landing page
├── components/
│   ├── header.tsx      # Navigation header
│   ├── footer.tsx      # Site footer
│   ├── hero.tsx        # Hero section
│   ├── about.tsx       # About/mission section
│   ├── tools.tsx       # Tools showcase
│   ├── tool-card.tsx   # Tool card component
│   ├── why-beezee.tsx  # BeeZee partnership section
│   └── custom-dev.tsx  # Custom development CTA
├── lib/
│   └── utils.ts        # Utility functions
├── public/
│   ├── images/         # Static images
│   ├── robots.txt      # Search engine directives
│   └── sitemap.xml     # Sitemap for SEO
└── ...config files
```

## Deployment

The site is configured for static export (`output: 'export'` in `next.config.js`). Build the project and deploy the `out` directory to any static hosting provider.

### Nginx

```nginx
server {
    listen 80;
    server_name cointrunk.io www.cointrunk.io;

    root /var/www/cointrunk/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # cache static assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(ico|png|jpg|jpeg|svg|webp|gif|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public";
    }

    error_page 404 /404.html;
}
```

`try_files $uri $uri.html $uri/ =404` handles Next.js clean URLs (e.g. `/payment-processor` serves `payment-processor.html`).

## Environment

No environment variables required for the base site.

## Links

- **Website:** https://cointrunk.io
- **App:** https://app.cointrunk.io
- **Payment Processor:** https://pay.cointrunk.io
- **BeeZee Blockchain:** https://getbze.com
