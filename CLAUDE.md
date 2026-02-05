# CoinTrunk Website

## Project Overview

CoinTrunk is a Web3 tools company building on the BeeZee blockchain. This is the official marketing website showcasing the company's mission, tools, and services.

**Live URL:** https://cointrunk.io

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Poppins (via Google Fonts)

## Build Type

**Static export** - No Node.js server required. The `npm run build` command generates static files in the `out` directory that can be served by any static file server (nginx, Apache, etc.).

## Commands

```bash
npm install     # Install dependencies
npm run dev     # Start development server (localhost:3000)
npm run build   # Build static site to /out directory
npm run lint    # Run linter
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx      # Root layout, metadata, SEO, JSON-LD
│   ├── page.tsx        # Home page (composes all sections)
│   ├── globals.css     # Global styles, Tailwind imports
│   └── payment-processor/
│       ├── layout.tsx  # Payment processor SEO metadata
│       └── page.tsx    # Payment processor landing page
├── components/
│   ├── header.tsx      # Sticky navigation (uses /#anchor links for cross-page compat)
│   ├── footer.tsx      # Footer with links, emails, social
│   ├── hero.tsx        # Hero section with animated gradient
│   ├── about.tsx       # Mission/about section
│   ├── tools.tsx       # Tools showcase section
│   ├── tool-card.tsx   # Individual tool card (supports internal + external links)
│   ├── why-beezee.tsx  # BeeZee partnership section
│   └── custom-dev.tsx  # Custom development services CTA
├── lib/
│   └── utils.ts        # cn() utility for class merging
├── public/
│   ├── images/         # Logo, favicon, OG image
│   ├── robots.txt      # SEO crawl directives
│   └── sitemap.xml     # Sitemap
├── tailwind.config.ts  # Brand colors, custom animations
├── next.config.js      # Static export config
└── package.json
```

## Brand Colors

Defined in `tailwind.config.ts`:
- **Primary:** #231c6f (dark blue)
- **Primary Light:** #29217e
- **Accent:** #d94934 (orange)
- **Background:** #0f0d1f (dark)

## Key URLs & Links

**CoinTrunk Products:**
- Content App: https://app.cointrunk.io
- Payment Processor: https://pay.cointrunk.io

**External:**
- BeeZee Blockchain: https://getbze.com
- BeeZee Docs: https://docs.getbze.com
- X (Twitter): https://x.com/CoinTrunkBZE

**Contact:**
- contact@cointrunk.io
- alphateam@getbze.com

**Legal Entity:**
- Vibast Solutions SRL (https://vibast.ro)

## Pages

### Home (`/`)

Sections in order:
1. **Header** - Sticky nav with logo and links (About, Tools, Why BeeZee, Contact)
2. **Hero** - Main headline, subtext, CTA buttons
3. **About** - Mission statement, company values
4. **Tools** - Three tool cards (Content Sharing, Payment Processor, Coming Soon)
5. **Why BeeZee** - Partnership with BeeZee blockchain
6. **Custom Dev** - Blockchain development services CTA
7. **Footer** - Links, emails, social, copyright, vibast.ro mention

### Payment Processor (`/payment-processor`)

Dedicated landing page for the payment processor product. Reuses Header and Footer.

Sections: Hero (Coming Soon), Features (6 cards), Supported Assets (BZE, USDC, PHOTON, ATONE, VDL), CTA Banner (Coming Soon).

The homepage tool card links to this page internally; CTA buttons on this page will link to `https://pay.cointrunk.io` once the app is live (currently disabled with "Coming Soon").

## Notes

- Multi-page website with shared Header/Footer
- Header nav uses `/#anchor` links so they work from any page
- tool-card.tsx detects internal vs external links (Next.js `<Link>` for `/` paths, `<a target="_blank">` for `http`)
- Dark theme throughout
- Smooth scroll navigation
- Framer Motion for scroll animations
- All external links open in new tab
- OG image at `/public/images/og-image.png` should be replaced with proper 1200x630 branded image
