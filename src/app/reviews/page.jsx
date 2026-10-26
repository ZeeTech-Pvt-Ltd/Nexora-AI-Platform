import Link from 'next/link';
import Icon from '@/components/Icon.jsx';
import Reveal from '@/components/Reveal.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { TESTIMONIALS, RATING } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

export const metadata = buildMeta({
  title: 'Nexora AI Platform Reviews | Rated 4.8/5 by Members',
  description:
    'Read verified Nexora AI Platform reviews from members across Australia. Rated 4.8 out of 5 based on 1,247 reviews of our AI-powered trading platform.',
  path: '/reviews',
  keywords: [
    'Nexora AI Platform reviews',
    'trading platform reviews',
    'Nexora AI Platform testimonials',
    'AI trading reviews Australia',
  ],
});

function Stars({ n = 5, size = 15 }) {
  return (
    <div className="tcard__stars">
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/reviews" label="Reviews" />

      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{TESTIMONIALS.title}</h1>
          <p className="section-lead">{TESTIMONIALS.lead}</p>
        </div>
      </div>

      <section className="section section--surface">
        <div className="container">
          <Reveal className="rating" style={{ marginBottom: 36, justifyContent: 'center' }}>
            <div className="rating__score">{RATING.score}</div>
            <div className="rating__meta">
              <Stars />
              <div className="count">
                Based on {RATING.total.toLocaleString()} reviews
              </div>
            </div>
          </Reveal>

          <div className="grid grid--3">
            {TESTIMONIALS.items.map((t, i) => (
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

          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <Link className="btn btn--ember" href="/sign-up">
              Register Now
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
