import LegalPage from '@/components/LegalPage.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { LEGAL } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

const content = LEGAL.terms;

export const metadata = buildMeta({
  title: content.seoTitle || `${content.title} | Nexora AI Platform`,
  description: content.description,
  path: '/terms-of-use',
  keywords: content.keywords || [],
});

export default function TermsOfUsePage() {
  return (
    <>
      <BreadcrumbJsonLd path="/terms-of-use" label="Terms of Use" />
      <LegalPage content={content} />
    </>
  );
}
