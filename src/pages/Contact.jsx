import React from 'react';

import usePageMeta from '../hooks/usePageMeta.js';
import PageHero from '../components/PageHero.jsx';
import { SectionHead } from '../components/Eyebrow.jsx';
import CaseRow from '../components/CaseRow.jsx';
import Icon from '../components/Icon.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import { site } from '../config/site.js';
import { pad2 } from '../utils/fa.js';

const channels = [
  {
    icon: 'phone',
    label: 'تلفن',
    value: site.phone,
    href: site.phoneHref,
    note: 'شنبه تا چهارشنبه، ساعت ۹ تا ۱۷',
  },
  {
    icon: 'mail',
    label: 'ایمیل',
    value: site.email,
    href: `mailto:${site.email}`,
    note: 'پاسخ ظرف یک روز کاری',
  },
  {
    icon: 'pin',
    label: 'آدرس دفتر',
    value: site.address,
    href: null,
    note: 'مراجعه حضوری با هماهنگی قبلی',
  },
  {
    icon: 'sun',
    label: 'ساعات کاری',
    value: site.hours,
    href: null,
    note: 'پنجشنبه‌ها و روزهای تعطیل، پاسخگویی نداریم',
  },
];

const responseSteps = [
  {
    title: 'دریافت پیام',
    body: 'درخواست شما ثبت و دسته‌بندی می‌شود؛ نوع دارایی، نیاز و محدوده زمانی.',
  },
  {
    title: 'ارزیابی اولیه',
    body: 'امکان تطبیق بررسی می‌شود و مشخص می‌گردد آیا اساساً زمینه‌ای برای تهاتر هست.',
  },
  {
    title: 'تماس کارشناسی',
    body: 'کارشناس مربوطه با شما تماس می‌گیرد و گام بعدی و زمان‌بندی را هماهنگ می‌کند.',
  },
];

const preparation = [
  {
    number: '۰۱',
    title: 'چه دارید',
    body: 'کالا، خدمت، تجهیزات، ملک یا طلب متقابل — با فاکتور یا لیست موجودی در صورت داشتن.',
  },
  {
    number: '۰۲',
    title: 'چه می‌خواهید',
    body: 'در مقابل، دقیقاً به چه چیزی نیاز دارید و محدوده قیمت مورد انتظار شما چیست.',
  },
  {
    number: '۰۳',
    title: 'تا چه زمانی',
    body: 'مهلت زمانی که برای بسته شدن معامله در نظر دارید و محدودیت‌های احتمالی آن.',
  },
];

export default function Contact() {
  usePageMeta(
    'تماس با ما',
    'راه‌های تماس با وکس بارتر: تلفن، ایمیل، آدرس دفتر و ساعات کاری. برای ثبت درخواست تهاتر با ما در تماس باشید.'
  );

  return (
    <>
      <PageHero
        eyebrow="تماس با ما"
        tag="ارتباط با وکس بارتر"
        title={
          <>
            شروع یک معاوضه،
            <br />
            با یک <span style={{ color: 'var(--ember)' }}>گفت‌وگو.</span>
          </>
        }
        lead="برای ثبت درخواست تهاتر، پرسش درباره خدمات یا هماهنگی یک جلسه ارزیابی، از یکی از راه‌های زیر با ما در تماس باشید."
        actions={[
          { to: '/how-it-works', label: 'فرآیند کار', variant: '' },
          { to: '/faq', label: 'سوالات متداول', variant: 'secondary' },
        ]}
      />
      <div className="page-rule" />

      {/* ---------------- راه‌های تماس ---------------- */}
      <section className="section" aria-labelledby="channels-heading">
        <SectionHead
          eyebrow="راه‌های تماس"
          title={
            <>
              از هر کدام
              <br />
              که راحت‌ترید.
            </>
          }
          description="برای پرسش‌های کوتاه تلفن، برای شرح شرایط ایمیل، و برای شروع فرآیند، هماهنگی جلسه حضوری."
        />

        <div className="info-grid">
          {channels.map((channel) => {
            const content = (
              <>
                <span className="info-label">{channel.label}</span>
                <span className="info-value">{channel.value}</span>
                <span className="info-note">{channel.note}</span>
              </>
            );

            return channel.href ? (
              <a className="info-card" href={channel.href} key={channel.label}>
                <Icon name={channel.icon} />
                {content}
              </a>
            ) : (
              <div className="info-card" key={channel.label}>
                <Icon name={channel.icon} />
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- آماده‌سازی ---------------- */}
      <section className="section use-cases" aria-labelledby="prep-heading">
        <div>
          <span className="tag">پیش از تماس</span>
          <h2 id="prep-heading">
            سه تا
            <br />
            آماده داشته باشید.
          </h2>
          <p className="use-case-intro">
            دانستن این سه مورد، تماس اول را از یک معرفی کلی به یک گفت‌وگوی جدی تبدیل
            می‌کند و ارزیابی اولیه را کوتاه‌تر می‌سازد.
          </p>
        </div>

        <div>
          {preparation.map((item) => (
            <CaseRow key={item.number} number={item.number} title={item.title}>
              {item.body}
            </CaseRow>
          ))}
        </div>
      </section>

      {/* ---------------- مسیر پاسخ ---------------- */}
      <section className="section" aria-labelledby="response-heading">
        <SectionHead
          eyebrow="مسیر پاسخ"
          title={
            <>
              بعد از تماس
              <br />
              چه اتفاقی می‌افتد.
            </>
          }
          description="بدون انتظار بی‌دلیل. هر مرحله پیام مشخصی دارد و در صورت نبود امکان تطبیق، همان ابتدا اعلام می‌شود."
        />

        <div className="card-grid">
          {responseSteps.map((step, index) => (
            <article className={`panel${index === 0 ? ' accent' : ''}`} key={step.title}>
              <span className="panel-num">{pad2(index + 1)}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- فراخوانی بدون فرم ---------------- */}
      <section className="section cta-band" aria-labelledby="contact-cta-heading">
        <div className="cta-copy">
          <div className="eyebrow">
            <span className="dot" />
            <span>ثبت درخواست تهاتر</span>
          </div>
          <h2 id="contact-cta-heading">
            همین حالا
            <br />
            <span>تماس بگیرید.</span>
          </h2>
          <p>
            درخواست تهاتر به‌صورت تلفنی یا ایمیلی ثبت می‌شود. کافی است شرایط خود را
            شرح دهید تا کارشناس مربوطه پیگیری کند.
          </p>

          <div className="cta-actions" style={{ marginTop: 28 }}>
            <ButtonLink to={site.phoneHref} variant="solid-sulfur" arrow="fwd">
              تماس تلفنی
            </ButtonLink>
            <ButtonLink to={`mailto:${site.email}`} variant="on-dark" arrow="fwd">
              ارسال ایمیل
            </ButtonLink>
          </div>
        </div>

        <ul className="cta-points">
          <li>
            <span className="k">۰۱</span>
            <span>
              <strong>تلفن</strong>
              <br />
              <span className="ltr">{site.phone}</span> — {site.hours}
            </span>
          </li>
          <li>
            <span className="k">۰۲</span>
            <span>
              <strong>ایمیل</strong>
              <br />
              <span className="ltr">{site.email}</span>
            </span>
          </li>
          <li>
            <span className="k">۰۳</span>
            <span>
              <strong>دفتر</strong>
              <br />
              {site.address}
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
