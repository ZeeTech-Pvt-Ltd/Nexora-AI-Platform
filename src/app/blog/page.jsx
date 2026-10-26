import Reveal from '@/components/Reveal.jsx';
import SectionHead from '@/components/SectionHead.jsx';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd.jsx';
import { BLOG_POSTS } from '@/data/content.js';
import { buildMeta } from '@/lib/seo.js';

export const metadata = buildMeta({
  title: 'Nexora AI Platform Blog | AI Trading Insights & Guides',
  description:
    'Insights from the Nexora AI Platform team: how AI reads markets, cold storage explained and the habits of calm investors. New articles every two weeks.',
  path: '/blog',
  keywords: [
    'Nexora AI Platform blog',
    'AI trading insights',
    'trading education',
    'cold storage explained',
  ],
});

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd path="/blog" label="Blog" />

      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <h1 className="section-title">The Nexora AI Platform blog</h1>
          <p className="section-lead">
            Short, honest reads about AI trading, security and investing well.
          </p>
        </div>
      </div>

      <section className="section section--deep">
        <div className="container">
          <div className="grid grid--3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal className="card blog-card" delay={i * 90} key={post.slug}>
                <div className="blog-card__meta">
                  {post.date}
                  <span>·</span>
                  {post.readTime}
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-card__more">Full article coming soon →</span>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: 40 }}>
            <p className="form__note">
              New articles are published every two weeks. Full posts are currently in final review.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
