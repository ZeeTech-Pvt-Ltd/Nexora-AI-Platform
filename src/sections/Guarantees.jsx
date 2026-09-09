import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { GUARANTEES } from '../data/content.js';

export default function Guarantees() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={GUARANTEES.title} lead={GUARANTEES.lead} />
        <div className="grid grid--3">
          {GUARANTEES.items.map((g, i) => (
            <Reveal
              as={Link}
              to="/sign-up"
              className="card guarantee"
              delay={i * 90}
              key={g.title}
              aria-label={`${g.title}: ${g.text} - Register now`}
            >
              <div className="card__icon" style={{ margin: '0 auto 18px' }}>
                <Icon name={g.icon} size={24} />
              </div>
              <div className="guarantee__value">{g.value}</div>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
