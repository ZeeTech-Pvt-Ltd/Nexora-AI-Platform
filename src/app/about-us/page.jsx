import Link from 'next/link';
import Icon from '@/components/Icon.jsx';
import Reveal from '@/components/Reveal.jsx';
import SectionHead from '@/components/SectionHead.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { ABOUT } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

export const metadata = buildMeta({
  title: 'About Nexora AI Platform | Our Story, Values & Mission',
  description:
    'Meet the team behind Nexora AI Platform, founded in Sydney. Discover our story, values and what makes our AI trading platform different.',
  path: '/about-us',
  keywords: [
    'Nexora AI Platform team',
    'Nexora AI Platform story',
    'trading company Sydney',
    'AI trading engineers',
  ],
});

export default function AboutUsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/about-us" label="About Us" />

      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{ABOUT.title}</h1>
          <p className="section-lead">{ABOUT.lead}</p>
        </div>
      </div>

      <section className="section section--surface">
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {ABOUT.story.map((p, i) => (
              <Reveal key={i}>
                <p style={{ color: '#6b5f4e', fontSize: 16.5, lineHeight: 1.8, marginBottom: 22 }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="The values we trade on" />
          <div className="grid grid--3">
            {ABOUT.values.map((v, i) => (
              <Reveal className="card" delay={i * 90} key={v.title}>
                <div className="card__icon">
                  <Icon name={v.icon} size={24} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: 'center' }}>
            <Reveal>
              <SectionHead title="What makes us different" align="left" />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {ABOUT.difference.map((d) => (
                  <li
                    key={d}
                    style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: '#211a10', fontSize: 15 }}
                  >
                    <Icon name="check" size={18} style={{ color: '#b45309', flexShrink: 0, marginTop: 3 }} />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="terminal">
                <div className="terminal__bar">
                  <span className="terminal__dots">
                    <span className="t--r" />
                    <span className="t--a" />
                    <span className="t--g" />
                  </span>
                  about - nexora ai platform
                </div>
                <div className="terminal__body">
                  <div className="readout__row" style={{ marginBottom: 10 }}>
                    <span className="k">founded</span>
                    <span className="v">Sydney, 2021</span>
                  </div>
                  <div className="readout__row" style={{ marginBottom: 10 }}>
                    <span className="k">members</span>
                    <span className="v">3.5M+</span>
                  </div>
                  <div className="readout__row" style={{ marginBottom: 10 }}>
                    <span className="k">countries</span>
                    <span className="v">120+</span>
                  </div>
                  <div className="readout__row">
                    <span className="k">support</span>
                    <span className="v up">24/7</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 48 }}>
            <Link className="btn btn--ember" href="/sign-up">
              Join Nexora AI Platform
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
