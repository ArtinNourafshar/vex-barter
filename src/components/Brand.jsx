import React from 'react';

export default function Brand({ className = 'brand', label = 'وکس بارتر' }) {
  return (
    <a className={className} href="/" aria-label={`${label} — صفحه اصلی`}>
      <img
        className="brand-logo"
        src="/logo.png"
        width="487"
        height="512"
        alt=""
        aria-hidden="true"
      />
      <span className="brand-name ltr">vex barter</span>
    </a>
  );
}
