import LegalPage from '@/components/LegalPage.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { LEGAL } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

const content = LEGAL.risk;

export const metadata = buildMeta({
  title: content.seoTitle || `${content.title} | Nexora AI Platform`,
  description: content.description,
  path: '/risk-disclosure',
  keywords: content.keywords || [],
});

export default function RiskDisclosurePage() {
  return (
    <>
      <BreadcrumbJsonLd path="/risk-disclosure" label="Risk Disclosure" />
      <LegalPage content={content} />
    </>
  );
}
