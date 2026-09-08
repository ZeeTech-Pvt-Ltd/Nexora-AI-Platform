import { useEffect } from 'react';
import { SITE, NAV_LINKS } from '../data/content.js';

const titleCase = (slug) =>
  slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

const setOrCreate = (attr, value, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const BASE_KEYWORDS = [
  'Nexora AI Platform',
  'AI trading platform',
  'automated trading',
  'AI trading engine',
  'trading platform Australia',
];

export default function useMeta({ title, description, path = '/', keywords = [] }) {
  useEffect(() => {
    const url = `${SITE.url.replace(/\/$/, '')}${path}`;
    document.title = title;

    setOrCreate('name', 'description', description);
    setOrCreate('name', 'keywords', [...BASE_KEYWORDS, ...keywords].join(', '));
    setOrCreate('property', 'og:title', title);
    setOrCreate('property', 'og:description', description);
    setOrCreate('property', 'og:url', url);
    setOrCreate('property', 'og:image', `${SITE.url}og-image.png`);
    setOrCreate('property', 'og:type', 'website');
    setOrCreate('property', 'og:site_name', SITE.name);
    setOrCreate('property', 'og:locale', 'en_AU');
    setOrCreate('name', 'twitter:card', 'summary_large_image');
    setOrCreate('name', 'twitter:title', title);
    setOrCreate('name', 'twitter:description', description);
    setOrCreate('name', 'twitter:image', `${SITE.url}og-image.png`);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // BreadcrumbList schema on inner pages.
    if (path !== '/') {
      const slug = path.replace(/^\//, '').replace(/\/$/, '');
      const label =
        NAV_LINKS.find((l) => l.to === path)?.label ||
        titleCase(slug.replace(/-/g, ' '));
      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: label, item: url },
        ],
      };
      let script = document.getElementById('breadcrumb-json');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'breadcrumb-json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(breadcrumb);
    } else {
      document.getElementById('breadcrumb-json')?.remove();
    }
  }, [title, description, path, keywords.join(',')]);
}
