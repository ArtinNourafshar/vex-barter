import React from 'react';
import Icon from './Icon.jsx';

export default function FeatureCard({ number, icon, title, children, tone = '' }) {
  const toneClass = tone ? ` ${tone}` : '';

  return (
    <article className={`feature-card${toneClass}`}>
      <div className="feature-top">
        <span className="number">{number}</span>
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
