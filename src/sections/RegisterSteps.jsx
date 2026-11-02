import Link from 'next/link';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { REGISTER_STEPS } from '../data/content.js';

export default function RegisterSteps() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={REGISTER_STEPS.title} />
        <div className="grid grid--4">
          {REGISTER_STEPS.steps.map((s, i) => (
            <Reveal className="card" delay={i * 90} key={s.title}>
              <span className="card__num">step {s.step}</span>
              <div className="card__icon">
                <Icon name={s.icon} size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="section-cta">
          <Link className="btn btn--ember" href={REGISTER_STEPS.cta.to}>
            {REGISTER_STEPS.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
