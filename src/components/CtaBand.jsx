import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';
import ButtonLink from './ButtonLink.jsx';
import { pad2 } from '../utils/fa.js';

/**
 * باند تاریک فراخوانی به اقدام — در انتهای صفحات.
 */
export default function CtaBand({
  eyebrow,
  title,
  description,
  points = [],
  actions = [],
}) {
  return (
    <section className="section cta-band" aria-labelledby="cta-heading">
      <div className="cta-copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id="cta-heading">{title}</h2>
        {description ? <p>{description}</p> : null}

        {actions.length > 0 ? (
          <div className="cta-actions" style={{ marginTop: 28 }}>
            {actions.map((action) => (
              <ButtonLink
                key={action.to}
                to={action.to}
                variant={action.variant || 'solid-sulfur'}
                arrow={action.arrow ?? 'fwd'}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        ) : null}
      </div>

      {points.length > 0 ? (
        <ul className="cta-points">
          {points.map((point, index) => (
            <li key={point.title}>
              <span className="k">{pad2(index + 1)}</span>
              <span>
                <strong>{point.title}</strong>
                {point.body ? (
                  <>
                    <br />
                    {point.body}
                  </>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
