import React from 'react';

const paths = {
  direction: <path d="M39 9H9v30M9 9h30v30" />,
  bolt: <path d="m26 4-15 23h12l-1 17 15-23H25l1-17Z" strokeLinejoin="round" />,
  circles: (
    <>
      <circle cx="18" cy="24" r="13" />
      <circle cx="31" cy="24" r="13" />
    </>
  ),
  swap: (
    <>
      <path d="M8 17h32M8 31h32" />
      <path d="m17 8-9 9 9 9" strokeLinejoin="round" />
      <path d="m31 40 9-9-9-9" strokeLinejoin="round" />
    </>
  ),
  layers: (
    <>
      <path d="M24 6 6 16l18 10 18-10L24 6Z" strokeLinejoin="round" />
      <path d="m6 30 18 10 18-10" strokeLinejoin="round" />
    </>
  ),
  doc: (
    <>
      <path d="M12 6h17l7 7v29H12V6Z" strokeLinejoin="round" />
      <path d="M18 24h12M18 31h12" />
    </>
  ),
  scale: (
    <>
      <path d="M24 8v32M12 40h24" />
      <path d="M8 16h32M8 16 3 28h10L8 16ZM40 16l-5 12h10l-5-12Z" strokeLinejoin="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="24" cy="24" r="17" />
      <path d="M24 14v10l7 5" strokeLinecap="round" />
    </>
  ),
  shield: (
    <>
      <path d="M24 5 9 11v13c0 10 6.5 16.5 15 19 8.5-2.5 15-9 15-19V11L24 5Z" strokeLinejoin="round" />
      <path d="m17 24 5 5 10-11" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  network: (
    <>
      <circle cx="24" cy="10" r="5" />
      <circle cx="10" cy="36" r="5" />
      <circle cx="38" cy="36" r="5" />
      <path d="m21 15-8 16M27 15l8 16M15 36h18" />
    </>
  ),
  search: (
    <>
      <circle cx="21" cy="21" r="13" />
      <path d="m31 31 11 11" strokeLinecap="round" />
    </>
  ),
  handshake: (
    <>
      <path d="M6 22 16 12l8 4 8-4 10 10" strokeLinejoin="round" />
      <path d="m14 26 6 6 4-3 4 4 6-6" strokeLinejoin="round" />
    </>
  ),
  truck: (
    <>
      <path d="M4 12h22v20H4V12ZM26 18h9l7 7v7H26V18Z" strokeLinejoin="round" />
      <circle cx="14" cy="35" r="4" />
      <circle cx="34" cy="35" r="4" />
    </>
  ),
  chart: (
    <>
      <path d="M6 42V6M6 42h36" />
      <path d="M14 34V24M23 34V16M32 34v-7M41 34V11" strokeLinecap="round" />
    </>
  ),
  chat: (
    <>
      <path d="M8 10h32v22H20l-10 8v-8H8V10Z" strokeLinejoin="round" />
      <path d="M17 21h14M17 26h9" strokeLinecap="round" />
    </>
  ),
  pin: (
    <>
      <path d="M24 42s13-12.5 13-22a13 13 0 1 0-26 0c0 9.5 13 22 13 22Z" strokeLinejoin="round" />
      <circle cx="24" cy="20" r="5" />
    </>
  ),
  mail: (
    <>
      <path d="M6 12h36v24H6V12Z" strokeLinejoin="round" />
      <path d="m6 14 18 13 18-13" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path
      d="M16 6 9 10c0 17 12 29 29 29l4-7-9-5-4 4c-5-2-9-6-11-11l4-4-6-10Z"
      strokeLinejoin="round"
    />
  ),
  sun: (
    <>
      <circle cx="24" cy="24" r="9" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" strokeLinecap="round" />
    </>
  ),
  target: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="2" />
    </>
  ),
  eye: (
    <>
      <path d="M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24Z" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="5" />
    </>
  ),
  lock: (
    <>
      <path d="M11 21h26v21H11V21Z" strokeLinejoin="round" />
      <path d="M17 21v-6a7 7 0 0 1 14 0v6" strokeLinecap="round" />
    </>
  ),
  globe: (
    <>
      <circle cx="24" cy="24" r="17" />
      <path d="M7 24h34M24 7c5 5 5 29 0 34M24 7c-5 5-5 29 0 34" />
    </>
  ),
};

export default function Icon({ name, className = 'feature-icon' }) {
  const glyph = paths[name] ?? paths.direction;

  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
