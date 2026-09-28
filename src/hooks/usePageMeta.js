import { useEffect } from 'react';
import { site } from '../config/site.js';

/**
 * عنوان و توضیحات متغییر هر صفحه را تنظیم می‌کند.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute('content', description);
    }
  }, [title, description]);
}
