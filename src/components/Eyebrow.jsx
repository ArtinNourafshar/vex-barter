import React from 'react';

export function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="dot" />
      <span>{children}</span>
    </div>
  );
}

export function SectionHead({ eyebrow, title, description }) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
