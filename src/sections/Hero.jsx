import Link from 'next/link';
import Icon from '../components/Icon.jsx';
import HeroForm from './HeroForm.jsx';
import { HERO } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__kicker">
              <span className="pulse" />
              {HERO.kicker}
            </span>

            <h1 className="hero__title">
              <span className="ember">Nexora AI Platform</span> puts AI-powered precision behind
              every trade
            </h1>

            <p className="hero__sub">{HERO.sub}</p>

            <div className="hero__cta">
              <Link className="btn btn--ember" href={HERO.ctaPrimary.to}>
                {HERO.ctaPrimary.label}
                <Icon name="arrow-right" size={17} />
              </Link>
              <Link className="btn btn--ghost" href={HERO.ctaSecondary.to}>
                {HERO.ctaSecondary.label}
              </Link>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <span className="t--r" />
                <span className="t--a" />
                <span className="t--g" />
              </span>
              nexora-ai-platform - register
            </div>
            <div className="terminal__body">
              <HeroForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
