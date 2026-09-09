import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { INNOVATION } from '../data/content.js';

export default function Innovation() {
  return (
    <section className="section section--deep">
      <div className="container">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <Reveal>
            <SectionHead

              title={INNOVATION.title}
              lead={INNOVATION.lead}
              align="left"
            />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {INNOVATION.points.map((p) => (
                <li
                  key={p}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: '#6b5f4e' }}
                >
                  <Icon name="check" size={18} style={{ color: '#b45309', flexShrink: 0, marginTop: 3 }} />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              className="btn btn--ember"
              to={INNOVATION.cta.to}
              style={{ marginTop: 32 }}
            >
              {INNOVATION.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="terminal">
              <div className="terminal__bar">
                <span className="terminal__dots">
                  <span className="t--r" />
                  <span className="t--a" />
                  <span className="t--g" />
                </span>
                engine - weekly report
              </div>
              <div className="terminal__body">
                <div className="readout__row" style={{ marginBottom: 10 }}>
                  <span className="k">model retrained</span>
                  <span className="v up">every week</span>
                </div>
                <div className="readout__row" style={{ marginBottom: 10 }}>
                  <span className="k">execution accuracy</span>
                  <span className="v">85%</span>
                </div>
                <div className="readout__row" style={{ marginBottom: 10 }}>
                  <span className="k">cold storage</span>
                  <span className="v">95%</span>
                </div>
                <div className="readout__row">
                  <span className="k">hidden fees</span>
                  <span className="v down">0</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
