import LegalPage from '@/components/LegalPage.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { LEGAL } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

const content = LEGAL.privacy;

export const metadata = buildMeta({
  title: content.seoTitle || `${content.title} | Nexora AI Platform`,
  description: content.description,
  path: '/privacy-policy',
  keywords: content.keywords || [],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/privacy-policy" label="Privacy Policy" />
      <LegalPage content={content} />
    </>
  );
}
