import { lazy } from 'react';
import useMeta from '../hooks/useMeta.js';
import Hero from '../sections/Hero.jsx';
import LazySection from '../components/LazySection.jsx';

// Below-fold sections are split into their own chunks and download only as the
// user scrolls near them — keeps the initial mobile parse to just the hero.
const LiveTicker = lazy(() => import('../sections/LiveTicker.jsx'));
const StatsBand = lazy(() => import('../sections/StatsBand.jsx'));
const Features = lazy(() => import('../sections/Features.jsx'));
const Guarantees = lazy(() => import('../sections/Guarantees.jsx'));
const Effortless = lazy(() => import('../sections/Effortless.jsx'));
const Differentiators = lazy(() => import('../sections/Differentiators.jsx'));
const Innovation = lazy(() => import('../sections/Innovation.jsx'));
const Testimonials = lazy(() => import('../sections/Testimonials.jsx'));
const Promo = lazy(() => import('../sections/Promo.jsx'));
const FaqSection = lazy(() => import('../sections/FaqSection.jsx'));
const Capabilities = lazy(() => import('../sections/Capabilities.jsx'));
const FinalCta = lazy(() => import('../sections/FinalCta.jsx'));

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
      <LazySection height={90}><LiveTicker /></LazySection>
      <LazySection><StatsBand /></LazySection>
      <LazySection><Features /></LazySection>
      <LazySection><Guarantees /></LazySection>
      <LazySection><Effortless /></LazySection>
      <LazySection><Differentiators /></LazySection>
      <LazySection><Innovation /></LazySection>
      <LazySection><Testimonials /></LazySection>
      <LazySection><Promo /></LazySection>
      <LazySection><FaqSection /></LazySection>
      <LazySection><Capabilities /></LazySection>
      <LazySection><FinalCta /></LazySection>
    </>
  );
}
