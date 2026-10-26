import RegistrationForm from '@/components/RegistrationForm.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { buildMeta } from '@/lib/seo.js';

export const metadata = buildMeta({
  title: 'Sign In | Access Your Nexora AI Platform Account',
  description:
    'Sign in to your Nexora AI Platform account to view your dashboard, live trades and portfolio performance.',
  path: '/sign-in',
  keywords: ['Nexora AI Platform sign in', 'Nexora AI Platform login', 'trading account login'],
});

export default function SignInPage() {
  return (
    <section className="section section--deep">
      <BreadcrumbJsonLd path="/sign-in" label="Sign In" />
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="page-hero__glow" />
      </div>
      <div className="container" style={{ maxWidth: 520 }}>
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
          Sign in to Nexora AI Platform
        </h1>
        <div className="terminal">
          <div className="terminal__bar">
            <span className="terminal__dots">
              <span className="t--r" />
              <span className="t--a" />
              <span className="t--g" />
            </span>
            nexora-ai-platform - sign in
          </div>
          <div className="terminal__body">
            <RegistrationForm
              idPrefix="signin"
              title="Welcome back"
              subtitle="Confirm your details and we will restore your session securely."
              buttonLabel="Sign In"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
