import Link from 'next/link';
import Icon from '@/components/Icon.jsx';
import Reveal from '@/components/Reveal.jsx';
import SectionHead from '@/components/SectionHead.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { FEATURES, CAPABILITIES } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

export const metadata = buildMeta({
  title: 'Nexora AI Platform Features | Smart AI Trading Tools',
  description:
    'Explore the Nexora AI Platform features: an AI-powered trading engine, simple investments, real-time market insight and bank-grade security - all in one dashboard.',
  path: '/features',
  keywords: [
    'Nexora AI Platform features',
    'AI trading features',
    'trading platform tools',
    'automated trading features',
  ],
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/features" label="Features" />

      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{FEATURES.title}</h1>
          <p className="section-lead">{FEATURES.lead}</p>
        </div>
      </div>

      <section className="section section--deep">
        <div className="container">
          <div className="grid grid--4">
            {FEATURES.items.map((f, i) => (
              <Reveal className="card" delay={i * 90} key={f.title}>
                <div className="card__icon">
                  <Icon name={f.icon} size={24} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHead title={CAPABILITIES.title} lead={CAPABILITIES.lead} />
          <div className="caps">
            {CAPABILITIES.items.map((c, i) => (
              <Reveal className="caps__cell" delay={(i % 4) * 70} key={c.title}>
                <Icon name={c.icon} size={24} />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 48 }}>
            <Link className="btn btn--ember" href="/sign-up">
              Register Now
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
