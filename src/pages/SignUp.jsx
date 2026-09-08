import RegistrationForm from '../components/RegistrationForm.jsx';
import useMeta from '../hooks/useMeta.js';
import { SITE } from '../data/content.js';

export default function SignUp() {
  useMeta({
    title: 'Sign Up | Open a Nexora AI Platform Account Today',
    description:
      'Open your Nexora AI Platform trading account in minutes. Join 3.5 million members, fund from A$250 and let the AI engine trade for you.',
    path: '/sign-up',
    keywords: [
      'Nexora AI Platform sign up',
      'open trading account Australia',
      'AI trading registration',
      'Nexora AI Platform register',
    ],
  });

  return (
    <section className="section section--deep">
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="page-hero__glow" />
      </div>
      <div className="container" style={{ maxWidth: 520 }}>
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
          Open your Nexora AI Platform account
        </h1>
        <div className="terminal">
          <div className="terminal__bar">
            <span className="terminal__dots">
              <span className="t--r" />
              <span className="t--a" />
              <span className="t--g" />
            </span>
            nexora-ai-platform — sign up
          </div>
          <div className="terminal__body">
            <RegistrationForm idPrefix="signup" />
          </div>
        </div>
        <p className="form__note" style={{ marginTop: 20 }}>
          {SITE.tagline} · Minimum deposit A$250
        </p>
      </div>
    </section>
  );
}
