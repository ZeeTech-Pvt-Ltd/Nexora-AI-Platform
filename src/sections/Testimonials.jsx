import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { TESTIMONIALS, RATING } from '../data/content.js';

function Stars({ n = 5, size = 15 }) {
  return (
    <div className="tcard__stars">
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="testimonials__top">
          <SectionHead

            title={TESTIMONIALS.title}
            lead={TESTIMONIALS.lead}
            align="left"
          />
          <Reveal className="rating">
            <div className="rating__score">{RATING.score}</div>
            <div className="rating__meta">
              <Stars />
              <div className="count">
                Based on {RATING.total.toLocaleString()} reviews
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid--3">
          {/* Homepage shows a curated three; the full list lives on /reviews. */}
          {TESTIMONIALS.items.slice(0, 3).map((t, i) => (
            <Reveal className="card tcard" delay={i * 90} key={t.name}>
              <Stars />
              <p className="tcard__quote">“{t.quote}”</p>
              <div className="tcard__person">
                <div className="tcard__avatar">
                  {t.avatar ? (
                    <img src={t.avatar} alt={`Portrait of ${t.name}`} loading="lazy" />
                  ) : (
                    t.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                  )}
                </div>
                <div>
                  <div className="tcard__name">
                    {t.name} · {t.place}
                  </div>
                  <span className="tcard__tag">
                    <Icon name="verified" size={14} />
                    {t.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
