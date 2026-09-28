import React from 'react';
import { Link } from 'react-router-dom';

/**
 * دکمه پیونددار.
 * to: مسیر داخلی (پیش‌فرض) | اگر to خارجی بود (http/tel/mailto) از a استفاده می‌شود.
 * variant: primary | secondary | on-dark | solid-sulfur
 * arrow: 'fwd' پیکر به جلو، 'down' پایین، null بدون پیکر
 */
export default function ButtonLink({
  to,
  children,
  variant = '',
  arrow = 'fwd',
  className = '',
  ...rest
}) {
  const arrowGlyph = arrow === 'fwd' ? '↖' : arrow === 'down' ? '↓' : null;
  const classes = ['button', variant, className].filter(Boolean).join(' ');

  const inner = (
    <>
      <span>{children}</span>
      {arrowGlyph ? (
        <span className="arrow" aria-hidden="true">
          {arrowGlyph}
        </span>
      ) : null}
    </>
  );

  const isExternal = /^(https?:|mailto:|tel:)/.test(to);

  if (isExternal) {
    return (
      <a className={classes} href={to} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <Link className={classes} to={to} {...rest}>
      {inner}
    </Link>
  );
}
