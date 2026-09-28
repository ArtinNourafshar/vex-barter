import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';
import ButtonLink from './ButtonLink.jsx';

/**
 * سرصفحه مشترک صفحات داخلی.
 */
export default function PageHero({ eyebrow, tag, title, lead, actions = [] }) {
  return (
    <section className="page-hero" aria-labelledby="page-heading">
      {tag ? <span className="tag">{tag}</span> : null}
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1 id="page-heading">{title}</h1>
      {lead ? <p className="lead">{lead}</p> : null}

      {actions.length > 0 ? (
        <div className="page-hero-actions">
          {actions.map((action) => (
            <ButtonLink
              key={action.to}
              to={action.to}
              variant={action.variant || ''}
              arrow={action.arrow ?? 'fwd'}
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}
    </section>
  );
}
