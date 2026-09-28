import React, { useId, useState } from 'react';

export default function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        type="button"
        className="faq-q"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{question}</span>
        <span className="faq-mark" aria-hidden="true">
          +
        </span>
      </button>

      <div
        className="faq-a"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!open}
      >
        {answer}
      </div>
    </div>
  );
}
