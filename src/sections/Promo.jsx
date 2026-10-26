import Link from 'next/link';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { PROMO } from '../data/content.js';

export default function Promo() {
  return (
    <section className="section section--deep">
      <div className="container">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <Reveal>
            <SectionHead

              title={PROMO.title}
              lead={PROMO.lead}
              align="left"
            />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {PROMO.bullets.map((b) => (
                <li
                  key={b}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: '#211a10', fontSize: 15 }}
                >
                  <Icon name="check" size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: 3 }} />
                  {b}
                </li>
              ))}
            </ul>
            <Link className="btn btn--ember" href={PROMO.cta.to} style={{ marginTop: 32 }}>
              {PROMO.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <svg
              viewBox="0 0 520 300"
              style={{ width: '100%', height: 'auto' }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="promo-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#d97706" />
                  <stop offset="1" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="promo-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="rgba(217,119,6,0.25)" />
                  <stop offset="1" stopColor="rgba(52,211,153,0)" />
                </linearGradient>
              </defs>
              {[70, 130, 190, 250].map((y) => (
                <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="#e8e2d5" />
              ))}
              {[86, 173, 260, 346, 433].map((x) => (
                <line key={x} x1={x} y1="30" x2={x} y2="290" stroke="#e8e2d5" />
              ))}
              <path
                d="M20 250 L86 210 L152 232 L218 160 L284 184 L350 120 L416 146 L500 64 L500 290 L20 290 Z"
                fill="url(#promo-fill)"
              />
              <path
                d="M20 250 L86 210 L152 232 L218 160 L284 184 L350 120 L416 146 L500 64"
                fill="none"
                stroke="url(#promo-line)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="350" cy="120" r="5" fill="#f59e0b" />
              <rect x="338" y="66" width="76" height="28" rx="6" fill="#ffffff" stroke="#d8cfc0" />
              <text x="352" y="85" fontFamily="'IBM Plex Mono', monospace" fontSize="12" fill="#16a34a">
                +12.4%
              </text>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
