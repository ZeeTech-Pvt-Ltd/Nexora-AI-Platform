import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { MARKETS } from '../data/content.js';

export default function Markets() {
  return (
    <section className="section section--deep">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-label">{MARKETS.label}</span>
          <h2 className="section-title">{MARKETS.title}</h2>
        </Reveal>
        <div className="grid grid--4">
          {MARKETS.items.map((m, i) => (
            <Reveal className="card" delay={i * 90} key={m.title}>
              <div className="card__icon">
                <Icon name={m.icon} size={24} />
              </div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
