import Script from 'next/script';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { SITE } from '../data/content.js';
import '../styles/global.css';

const FONT_CSS =
  'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap';

const SITE_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexora AI Platform',
    url: 'https://nexora-ai-platform.com/',
    logo: 'https://nexora-ai-platform.com/favicon.svg',
    description:
      "Nexora AI Platform is Australia's AI-powered trading platform. Automated trading at 85% accuracy, 95% cold storage and zero hidden fees.",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nexora AI Platform',
    url: 'https://nexora-ai-platform.com/',
  },
];

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Nexora AI Platform: AI-Powered Trading Platform for Australia',
    template: '%s',
  },
  description:
    "Nexora AI Platform is Australia's AI-powered trading platform. Automated trading at 85% accuracy, 95% cold storage and 24/7 support.",
  keywords: [
    'Nexora AI Platform',
    'AI trading platform',
    'automated trading',
    'AI trading engine',
    'trading platform Australia',
    'automated trading Australia',
    'AI trading Australia',
    'secure trading platform',
    'cold storage trading',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    siteName: SITE.name,
    locale: 'en_AU',
    images: ['/og-image.png'],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  verification: { google: '-aW5xgqpBthXs7srZPMLoXRJd2R9r-S0xvdHrPeUt_s' },
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#faf8f3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Non-blocking font load: preload starts the fetch early, the swap to
            stylesheet happens off the critical path so FCP/LCP are not delayed. */}
        <link
          rel="preload"
          as="style"
          href={FONT_CSS}
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link href={FONT_CSS} rel="stylesheet" />
        </noscript>
        {SITE_SCHEMAS.map((schema) => (
          <script
            key={schema['@type']}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S7SRMR895M"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S7SRMR895M');`}
        </Script>
      </body>
    </html>
  );
}
