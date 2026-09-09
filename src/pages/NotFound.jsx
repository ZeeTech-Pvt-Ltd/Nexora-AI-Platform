import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';

export default function NotFound() {
  useMeta({
    title: 'Page Not Found | Nexora AI Platform',
    description:
      "The page you were looking for could not be found. Explore Nexora AI Platform's AI-powered trading platform instead.",
    path: '/',
  });

  return (
    <section className="section section--deep">
      <div className="container coming-soon">
        <span className="code">// error 404 - signal lost</span>
        <h1 className="section-title">This page does not exist</h1>
        <p className="section-lead" style={{ maxWidth: 460, margin: '16px auto 32px' }}>
          The link may be broken, or the page may have moved. Let's get you back on track.
        </p>
        <Link className="btn btn--ember" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
