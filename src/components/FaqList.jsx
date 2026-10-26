'use client';

import { useState } from 'react';
import { FAQS } from '../data/content.js';

export default function FaqList({ items = FAQS }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq__list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
            <button
              className="faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className="faq__icon" aria-hidden="true">
                +
              </span>
            </button>
            <div className="faq__a">
              <p className="faq__a-inner">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
