import React from 'react';
import { Link } from 'react-router-dom';

import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta('صفحه پیدا نشد', 'نشانی واردشده درست نیست یا صفحه جابه‌جا شده است.');
  return (
    <section className="page-hero">
      <span className="tag">کد ۴۰۴</span>
      <h1 id="page-heading">این صفحه پیدا نشد.</h1>
      <p className="lead">
        نشانی واردشده درست نیست یا صفحه جابه‌جا شده است. از فهرست ناوبری استفاده کنید
        یا به صفحه اصلی برگردید.
      </p>
      <div className="page-hero-actions">
        <Link className="button" to="/">
          <span>صفحه اصلی</span>
          <span className="arrow" aria-hidden="true">
            ↖
          </span>
        </Link>
        <Link className="button secondary" to="/contact">
          <span>تماس با ما</span>
          <span className="arrow" aria-hidden="true">
            ↖
          </span>
        </Link>
      </div>
      <div className="page-rule" />
    </section>
  );
}
