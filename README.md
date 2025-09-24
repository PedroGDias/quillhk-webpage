# Crafted - LinkedIn Leadership Platform

Transform your senior leaders into client and talent magnets on LinkedIn.

## Features

- **Hero Section**: Compelling value proposition with clear CTAs
- **Waitlist Modal**: Captures leads and delivers PDF guide via email
- **Social Proof**: Marquee of client logos and testimonials
- **Feature Comparison**: What Crafted is vs. what it's not
- **Results Section**: Key metrics and user outcomes
- **Email Integration**: Automated PDF delivery via Resend

## Environment Variables

Create a `.env.local` file with the following variables:

```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_here
SENDER_EMAIL=your_verified_sender_email@domain.com
```

### Setting up Resend

1. Sign up at [resend.com](https://resend.com)
2. Verify your sender email domain
3. Create an API key
4. Create an audience for your waitlist
5. Add the credentials to your environment variables

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Email**: Resend + React Email
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (see above)

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173)

## Components

- `Header`: Navigation with logo and CTA buttons
- `Hero`: Main value proposition and hero image
- `LogosMarquee`: Social proof with client logos
- `WhatIs`: Feature comparison (is vs. is not)
- `Results`: Key metrics and outcomes
- `FinalCta`: Final conversion section
- `Footer`: Minimal footer with branding
- `JoinWaitlistModal`: Modal for capturing leads

## API Routes

Since this is a Vite project (not Next.js), you'll need to implement the API endpoint separately. The frontend expects:

- `POST /api/join-waitlist`: Accepts `{ name?, email }` and returns `{ ok: boolean, message? }`

For a complete implementation, consider using:
- Vercel Functions
- Netlify Functions  
- Or a separate Express.js server

## Files Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── LogosMarquee.tsx # Social proof logos
│   ├── WhatIs.tsx      # Feature comparison
│   ├── Results.tsx     # Results metrics
│   ├── FinalCta.tsx    # Final CTA section
│   ├── Footer.tsx      # Footer
│   └── JoinWaitlistModal.tsx # Waitlist modal
├── emails/             # Email templates
│   └── GuideEmail.tsx  # PDF guide email
├── lib/                # Utilities
│   └── resend.ts       # Resend client
└── assets/             # Static assets
    ├── crafted-logo.webp
    └── crafted-hero-image.webp
```

## Deployment

The app can be deployed to any static hosting platform. The PDF guide is served from `/public/guides/crafted-5-principles.pdf`.

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels and descriptions
- Focus management
- Screen reader friendly

## Performance

- Optimized images
- Tree-shaken icon imports
- Minimal bundle size
- Fast loading times

---

## Project Info

This project uses:
- Vite
- TypeScript  
- React
- shadcn-ui
- Tailwind CSS