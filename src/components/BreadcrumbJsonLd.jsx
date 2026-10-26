import { SITE } from '../data/content.js';

// BreadcrumbList structured data - previously injected at runtime by useMeta().
export default function BreadcrumbJsonLd({ path, label }) {
  const url = `${SITE.url.replace(/\/$/, '')}${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: label, item: url },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
