import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import Reveal from '../components/Reveal.jsx';
import useMeta from '../hooks/useMeta.js';
import { CONTACTS } from '../data/content.js';

export default function Contacts() {
  useMeta({
    title: 'Contact Nexora AI Platform | 24/7 Support Team',
    description:
      'Contact the Nexora AI Platform support team 24/7 by email or request a callback. Average first response time: under 5 minutes.',
    path: '/contact-us',
    keywords: [
      'Nexora AI Platform contact',
      'trading support Australia',
      '24/7 trading support',
      'Nexora AI Platform callback',
    ],
  });

  return (
    <>
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">{CONTACTS.title}</h1>
          <p className="section-lead">{CONTACTS.lead}</p>
        </div>
      </div>

      <section className="section section--surface">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: 'start' }}>
            <Reveal>
              <div className="card contact-card">
                <div className="card__icon">
                  <Icon name="mail" size={24} />
                </div>
                <h2>Email us</h2>
                <p>
                  For account, verification and general questions. We answer around the clock.
                </p>
                <span className="big">{CONTACTS.email}</span>
              </div>
              <div className="card contact-card" style={{ marginTop: 22 }}>
                <div className="card__icon">
                  <Icon name="headset" size={24} />
                </div>
                <h2>Support hours</h2>
                <p>{CONTACTS.hours}</p>
                <span className="big">{CONTACTS.response}</span>
              </div>
              <div className="card contact-card" style={{ marginTop: 22 }}>
                <div className="card__icon">
                  <Icon name="shield-check" size={24} />
                </div>
                <h2>Stay safe</h2>
                <p>{CONTACTS.note}</p>
                <span className="big">nexora-ai-platform.com is our only official domain</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="terminal">
                <div className="terminal__bar">
                  <span className="terminal__dots">
                    <span className="t--r" />
                    <span className="t--a" />
                    <span className="t--g" />
                  </span>
                  request a callback
                </div>
                <div className="terminal__body">
                  <RegistrationForm
                    idPrefix="contact"
                    title="Request a callback"
                    subtitle="Leave your details and a member of our Australian team will call you back — usually within the hour."
                    buttonLabel="Request a Callback"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
