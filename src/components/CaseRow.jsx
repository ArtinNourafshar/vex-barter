import React from 'react';

export default function CaseRow({ number, title, children }) {
  return (
    <article className="case-row">
      <span className="number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      <span className="arrow" aria-hidden="true">
        ↖
      </span>
    </article>
  );
}
