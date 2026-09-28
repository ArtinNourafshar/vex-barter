import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import Brand from './Brand.jsx';
import ButtonLink from './ButtonLink.jsx';
import Footer from './Footer.jsx';
import { navLinks } from '../config/site.js';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const navRef = React.useRef(null);

  const close = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape' && open) {
        close();
        navRef.current?.querySelector('.menu-toggle')?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  return (
    <nav
      className={`nav${open ? ' is-open' : ''}`}
      aria-label="ناوبری اصلی"
      ref={navRef}
    >
      <Brand />

      <button
        type="button"
        className="button secondary menu-toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'بستن −' : 'منو +'}
      </button>

      <div className="nav-links" id="nav-links">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={close}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <ButtonLink to="/contact" arrow="fwd">
        درخواست تهاتر
      </ButtonLink>
    </nav>
  );
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        رفتن به محتوای اصلی
      </a>

      <header className="site-header wrap" id="top">
        <Navbar />
      </header>

      <main className="wrap" id="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
