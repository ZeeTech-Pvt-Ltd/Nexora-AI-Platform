import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { MARKETS } from '../data/content.js';

export default function Markets() {
  return (
    <section className="section section--deep">
      <div className="container">
        <div className="markets__split">
          <Reveal className="markets__intro">
            <span className="section-label">{MARKETS.label}</span>
            <h2 className="section-title">{MARKETS.title}</h2>
            <p className="section-lead">{MARKETS.lead}</p>
          </Reveal>

          <div className="grid grid--2">
            {MARKETS.items.map((m, i) => (
              <Reveal className="card market-tile" delay={i * 90} key={m.title}>
                <span className="market-tile__icon">
                  <Icon name={m.icon} size={22} />
                </span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
