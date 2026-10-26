import Link from 'next/link';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { EFFORTLESS } from '../data/content.js';

export default function Effortless() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={EFFORTLESS.title} lead={EFFORTLESS.lead} />
        <div className="grid grid--3">
          {EFFORTLESS.items.map((f, i) => (
            <Reveal className="card" delay={i * 90} key={f.title}>
              <span className="card__num">0{i + 1}</span>
              <div className="card__icon">
                <Icon name={f.icon} size={24} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="section-cta">
          <Link className="btn btn--ghost" href="/sign-up">
            Register Now
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
