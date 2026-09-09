import useMeta from '../hooks/useMeta.js';

// Template legal copy - needs lawyer review before launch.
export default function LegalPage({ content, path }) {
  useMeta({
    title: content.seoTitle || `${content.title} | Nexora AI Platform`,
    description:
      content.description ||
      `${content.title} for the Nexora AI Platform AI trading platform - Australian trading with AI precision.`,
    path,
    keywords: content.keywords || [],
  });

  return (
    <div className="section section--surface">
      <div className="container">
        <div className="legal-page">
          <span className="section-label">{content.title}</span>
          <h1 className="section-title" style={{ marginBottom: 16 }}>
            {content.title}
          </h1>
          <span className="updated">{content.updated}</span>
          {content.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
              {s.items && (
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
