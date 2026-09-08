import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import useMeta from '../hooks/useMeta.js';
import { PRODUCT, CAPABILITIES } from '../data/content.js';

export default function HowItWorks() {
  useMeta({
    title: 'How Nexora AI Platform Works | 3 Steps to AI Trading',
    description:
      'See how Nexora AI Platform works: create your account in minutes, fund from A$250 and let the AI trading engine analyse and trade around the clock.',
    path: '/how-it-works',
    keywords: [
      'Nexora AI Platform how it works',
      'how AI trading works',
      'automated trading setup',
      'minimum deposit A$250',
    ],
  });

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{PRODUCT.title}</h1>
          <p className="section-lead">{PRODUCT.lead}</p>
        </div>
      </div>

      <section className="section section--deep">
        <div className="container">
          <div className="grid grid--3">
            {PRODUCT.steps.map((s, i) => (
              <Reveal className="card" delay={i * 90} key={s.title}>
                <span className="card__num">step {s.step}</span>
                <div className="card__icon">
                  <Icon name={s.icon} size={24} />
                </div>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
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
            <Link className="btn btn--ember" to={PRODUCT.cta.to}>
              {PRODUCT.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
