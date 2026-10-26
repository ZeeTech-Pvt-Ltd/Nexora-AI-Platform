import Link from 'next/link';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { FINAL_CTA } from '../data/content.js';

export default function FinalCta() {
  return (
    <section className="section section--surface final-cta">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{FINAL_CTA.title}</h2>
          <p className="section-lead">{FINAL_CTA.lead}</p>
          <Link className="btn btn--ember" href={FINAL_CTA.cta.to}>
            {FINAL_CTA.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
          <p
            className="form__note"
            style={{ marginTop: 18, fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {FINAL_CTA.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
