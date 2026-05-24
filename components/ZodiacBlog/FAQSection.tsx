'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleItem(idx)}
            >
              <span>{item.question}</span>
              <span className="faq-toggle">▼</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
