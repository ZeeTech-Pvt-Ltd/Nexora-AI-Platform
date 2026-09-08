import FaqList from '../components/FaqList.jsx';
import FaqSchema from '../components/FaqSchema.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { FAQS } from '../data/content.js';

export default function FaqSection() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title="Frequently asked questions about Nexora AI Platform" />
        <FaqList items={FAQS} />
      </div>
      <FaqSchema />
    </section>
  );
}
