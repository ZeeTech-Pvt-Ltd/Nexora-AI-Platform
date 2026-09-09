import { lazy, Suspense } from 'react';
import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import { HERO } from '../data/content.js';

// The form (intl-tel-input + its CSS) is heavy; load it off the critical path
// so the hero paints first. A skeleton holds its space until then.
const RegistrationForm = lazy(() => import('../components/RegistrationForm.jsx'));

function FormSkeleton() {
  const bar = (width) => (
    <div className="form-skeleton__bar" style={{ width }} />
  );
  return (
    <div className="form-skeleton" aria-hidden="true">
      {bar('55%')}
      {bar('42%')}
      {bar('100%')}
      {bar('100%')}
      {bar('100%')}
      {bar('45%')}
    </div>
  );
}

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
              <Link className="btn btn--ember" to={HERO.ctaPrimary.to}>
                {HERO.ctaPrimary.label}
                <Icon name="arrow-right" size={17} />
              </Link>
              <Link className="btn btn--ghost" to={HERO.ctaSecondary.to}>
                {HERO.ctaSecondary.label}
              </Link>
            </div>

            <div className="hero__steps">
              {HERO.steps.map((s, i) => (
                <span key={s}>
                  {i > 0 && <span className="hero__steps-sep">→</span>}
                  {s}
                </span>
              ))}
            </div>

            <div className="hero__trust">
              {HERO.trust.map((t) => (
                <span key={t}>
                  <Icon name="check" size={15} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <span className="t--r" />
                <span className="t--a" />
                <span className="t--g" />
              </span>
              nexora-ai-platform — register
            </div>
            <div className="terminal__body">
              <Suspense fallback={<FormSkeleton />}>
                <RegistrationForm idPrefix="hero" />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
