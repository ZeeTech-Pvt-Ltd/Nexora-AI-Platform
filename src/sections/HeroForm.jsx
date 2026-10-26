'use client';

import dynamic from 'next/dynamic';

// The form (intl-tel-input + its CSS) is heavy; load it off the critical path
// so the hero paints first. A skeleton holds its space until then.
const RegistrationForm = dynamic(() => import('../components/RegistrationForm.jsx'), {
  ssr: false,
  loading: () => <FormSkeleton />,
});

function FormSkeleton() {
  const bar = (width) => (
    <div className="form-skeleton__bar" style={{ width }} />
  );
  return (
    <div className="form-skeleton" aria-hidden="true">
      {bar('55%')}
      {bar('42%')}
      {bar('100%')}
      {bar('100%')}
      {bar('100%')}
      {bar('45%')}
    </div>
  );
}

export default function HeroForm() {
  return <RegistrationForm idPrefix="hero" />;
}
