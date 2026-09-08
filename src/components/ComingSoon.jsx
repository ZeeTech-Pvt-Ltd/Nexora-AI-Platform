import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';

export default function ComingSoon({ title }) {
  useMeta({
    title: `${title} | Nexora AI Platform`,
    description: `${title} — coming soon on the Nexora AI Platform platform.`,
    path: `/${title.toLowerCase().replace(/\s+/g, '-')}`,
  });

  return (
    <div className="section section--deep">
      <div className="container coming-soon">
        <span className="code">// coming soon</span>
        <h1 className="section-title">{title} is under construction</h1>
        <p className="section-lead" style={{ maxWidth: 480, margin: '16px auto 32px' }}>
          Our team is building this page right now. In the meantime, explore the rest of the
          platform.
        </p>
        <Link className="btn btn--ember" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
