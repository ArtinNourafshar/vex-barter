import React from 'react';
import { Link } from 'react-router-dom';

import Brand from './Brand.jsx';
import { navLinks, site } from '../config/site.js';

const resourceLinks = [
  { to: '/services', label: 'خدمات و راهکارها' },
  { to: '/how-it-works', label: 'فرآیند کار' },
  { to: '/faq', label: 'سوالات متداول' },
];

export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-top">
        <Brand />

        <div className="footer-cols">
          <div className="footer-col">
            <h4>سایت</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>منابع</h4>
            <ul>
              {resourceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-word">مبادله، ادامه دارد.</div>

      <div className="footer-bottom">
        <span>
          {site.name} — وب‌سایت شرکتی در حوزه {site.tagline}.
        </span>
        <span>چارچوبی برای معاملاتی که با پول نقد بسته نمی‌شوند.</span>
        <a href="#top">بازگشت به بالا ↑</a>
      </div>
    </footer>
  );
}
