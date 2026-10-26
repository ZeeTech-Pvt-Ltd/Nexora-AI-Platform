import { SITE } from '../data/content.js';

const BASE_KEYWORDS = [
  'Nexora AI Platform',
  'AI trading platform',
  'automated trading',
  'AI trading engine',
  'trading platform Australia',
];

// Builds a Next.js Metadata object from the values previously fed to useMeta().
export function buildMeta({ title, description, path = '/', keywords = [] }) {
  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: 'en_AU',
      type: 'website',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}
