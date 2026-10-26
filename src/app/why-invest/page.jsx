import Link from 'next/link';
import Icon from '@/components/Icon.jsx';
import Reveal from '@/components/Reveal.jsx';
import SectionHead from '@/components/SectionHead.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { WHY } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

export const metadata = buildMeta({
  title: 'Why Invest with Nexora AI Platform | 6 Reasons',
  description:
    'Six reasons Australians choose Nexora AI Platform: a 24/7 AI trading engine, 85% execution accuracy, bank-grade security, transparency and fast withdrawals.',
  path: '/why-invest',
  keywords: [
    'Nexora AI Platform why invest',
    'benefits of AI trading',
    'automated trading benefits',
    'secure trading Australia',
  ],
});

export default function WhyInvestPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/why-invest" label="Why Invest" />

      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{WHY.title}</h1>
          <p className="section-lead">{WHY.lead}</p>
        </div>
      </div>

      <section className="section section--deep">
        <div className="container">
          <div className="grid grid--3">
            {WHY.items.map((w, i) => (
              <Reveal className="card" delay={i * 80} key={w.title}>
                <div className="card__icon">
                  <Icon name={w.icon} size={24} />
                </div>
                <h2>{w.title}</h2>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <Reveal>
            <div
              className="card"
              style={{ borderColor: 'rgba(217,119,6,0.4)', marginBottom: 32 }}
            >
              <Icon name="shield-check" size={28} style={{ color: '#b45309', marginBottom: 12 }} />
              <h3 style={{ fontFamily: "'Sora', sans-serif", marginBottom: 10 }}>A note on risk</h3>
              <p style={{ color: '#6b5f4e', fontSize: 14.5 }}>{WHY.riskNote}</p>
            </div>
            <Link className="btn btn--ember" href={WHY.cta.to}>
              {WHY.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
