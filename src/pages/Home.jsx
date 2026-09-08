import useMeta from '../hooks/useMeta.js';
import Hero from '../sections/Hero.jsx';
import LiveTicker from '../sections/LiveTicker.jsx';
import StatsBand from '../sections/StatsBand.jsx';
import Features from '../sections/Features.jsx';
import Guarantees from '../sections/Guarantees.jsx';
import Effortless from '../sections/Effortless.jsx';
import Differentiators from '../sections/Differentiators.jsx';
import Innovation from '../sections/Innovation.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Promo from '../sections/Promo.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import Capabilities from '../sections/Capabilities.jsx';
import FinalCta from '../sections/FinalCta.jsx';

export default function Home() {
  useMeta({
    title: 'Nexora AI Platform: AI-Powered Trading Platform for Australia',
    description:
      "Nexora AI Platform is Australia's AI-powered trading platform. Automated trading at 85% accuracy, 95% cold storage and 24/7 support.",
    path: '/',
    keywords: [
      'automated trading Australia',
      'AI trading Australia',
      'secure trading platform',
      'cold storage trading',
      'trading engine 85% accuracy',
    ],
  });

  return (
    <>
      <Hero />
      <LiveTicker />
      <StatsBand />
      <Features />
      <Guarantees />
      <Effortless />
      <Differentiators />
      <Innovation />
      <Testimonials />
      <Promo />
      <FaqSection />
      <Capabilities />
      <FinalCta />
    </>
  );
}
