import React from 'react';

import usePageMeta from '../hooks/usePageMeta.js';
import PageHero from '../components/PageHero.jsx';
import { SectionHead } from '../components/Eyebrow.jsx';
import CtaBand from '../components/CtaBand.jsx';
import CaseRow from '../components/CaseRow.jsx';
import { pad2 } from '../utils/fa.js';

const services = [
  {
    icon: 'swap',
    title: 'تهاتر دوجانبه',
    body: 'مبادله مستقیم کالا یا خدمت میان دو بنگاه، با ارزش‌گذاری مشترک و یک قرارداد واحد.',
    featured: true,
  },
  {
    icon: 'layers',
    title: 'تهاتر چندجانبه',
    body: 'تسویه زنجیره‌ای میان سه بنگاه یا بیشتر؛ زمانی که طرف مقابل شما، طرف دیگر خود شماست.',
  },
  {
    icon: 'handshake',
    title: 'خدمت در برابر کالا',
    body: 'پیمانکاری، تبلیغات، لجستیک یا خدمات تخصصی در برابر محصول و تولید شما.',
  },
  {
    icon: 'scale',
    title: 'تسویه بدهی متقابل',
    body: 'بدهی دو شرکت به یکدیگر، بدون جابه‌جایی نقدینگی و در چارچوب قرارداد مشخص.',
  },
  {
    icon: 'chart',
    title: 'ارزیابی و قیمت‌گذاری',
    body: 'تعیین ارزش پایه کالا و خدمت بر اساس فاکتور، نرخ روز بازار و استاندارد صنفی.',
  },
  {
    icon: 'doc',
    title: 'تنظیم قرارداد و نظارت بر تسویه',
    body: 'شروط تحویل، تضمین‌ها و زمان‌بندی، تا حصول اطمیان مکتوب هر دو طرف.',
  },
];

const sectors = [
  'صنعت و تولید',
  'کشاورزی و مواد غذایی',
  'ساختمان و مصالح',
  'پخش و خرده‌فروشی',
  'خدمات و پیمانکاری',
  'تجهیزات و ماشین‌آلات',
  'لجستیک و حمل‌ونقل',
  'تبلیغات و رسانه',
  'ملک و املاک',
];

const exchangeables = [
  {
    number: '۰۱',
    title: 'کالای آماده فروش',
    body: 'محصول نهایی، اقلام تجاری و موجودی انبار که مشتری مشخص دارد یا در انتظار تقاضاست.',
  },
  {
    number: '۰۲',
    title: 'مازاد تولید و ظرفیت بلااستفاده',
    body: 'خط تولید، انرژی، فضا یا ساعت کاری که بهره‌برداری‌اش به نفع شما نیست.',
  },
  {
    number: '۰۳',
    title: 'خدمات و تخصص',
    body: 'قرارداد پیمانکاری، خدمات فنی، طراحی، تبلیغات، نگهداری و حمل‌ونقل.',
  },
  {
    number: '۰۴',
    title: 'ملک و حق بهره‌برداری',
    body: 'دفتر، انبار، واحد تجاری یا امتیاز بهره‌برداری که می‌تواند موضوع معاوضه باشد.',
  },
  {
    number: '۰۵',
    title: 'طلب و بدهی متقابل',
    body: 'مطالبات متقابل دو بنگاه که بدون خروج نقدینگی قابل بستن است.',
  },
];

export default function Services() {
  usePageMeta(
    'خدمات و راهکارها',
    'شش خدمت وکس بارتر: تهاتر دوجانبه و چندجانبه، خدمت در برابر کالا، تسویه بدهی متقابل، ارزیابی و قیمت‌گذاری، و تنظیم قرارداد.'
  );

  return (
    <>
      <PageHero
        eyebrow="خدمات و راهکارها"
        tag="خدمات"
        title={
          <>
            هر معاوضه،
            <br />
            <span style={{ color: 'var(--ember)' }}>یک ساختار دارد.</span>
          </>
        }
        lead="شش خدمتی که یک توافق خام را به یک معامله بسته، مستند و قابل پیگیری تبدیل می‌کنند. بسته به نوع دارایی و نیاز شما، یکی یا ترکیبی از آن‌ها انتخاب می‌شود."
        actions={[
          { to: '/how-it-works', label: 'فرآیند کار', variant: '' },
          { to: '/contact', label: 'درخواست تهاتر', variant: 'secondary' },
        ]}
      />
      <div className="page-rule" />

      {/* ---------------- فهرست خدمات ---------------- */}
      <section className="section" aria-labelledby="services-heading">
        <SectionHead
          eyebrow="فهرست خدمات"
          title={
            <>
              شش راه
              <br />
              برای بستن معامله.
            </>
          }
          description="هر خدمت به‌تنهایی یا در کنار خدمت دیگر قابل استفاده است؛ ترکیب آن‌ها به ساختار معامله شما بستگی دارد."
        />

        <div className="card-grid">
          {services.map((service, index) => (
            <article
              className={`panel${service.featured ? ' accent' : ''}`}
              key={service.title}
            >
              <span className="panel-num">{pad2(index + 1)} / ۰۶</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- موضوع قابل تهاتر ---------------- */}
      <section className="section use-cases" aria-labelledby="exchangeables-heading">
        <div>
          <span className="tag">چه چیزی قابل تهاتر است؟</span>
          <h2 id="exchangeables-heading">
            تقریباً
            <br />
            هر چیزی.
          </h2>
          <p className="use-case-intro">
            ملاک، نوع دارایی نیست؛ شفاف بودن ارزش آن و وجود طرف مقابلی است که همین
            دارایی را می‌خواهد.
          </p>
        </div>

        <div>
          {exchangeables.map((item) => (
            <CaseRow key={item.number} number={item.number} title={item.title}>
              {item.body}
            </CaseRow>
          ))}
        </div>
      </section>

      {/* ---------------- حوزه‌های صنفی ---------------- */}
      <section className="section" aria-labelledby="sectors-heading">
        <SectionHead
          eyebrow="پوشش حوزه‌ها"
          title={
            <>
              شبکه‌ای از
              <br />
              صنف‌های مختلف.
            </>
          }
          description="هرچه حوزه فعالیت بنگاه‌ها متنوع‌تر باشد، شانس پیدا شدن تطبیق درست بیشتر است."
        />

        <div className="chips">
          {sectors.map((sector) => (
            <span className="chip filled" key={sector}>
              {sector}
            </span>
          ))}
          <span className="chip sulfur">و هر صنف دیگری که کالا یا خدمت دارد</span>
        </div>
      </section>

      <CtaBand
        eyebrow="انتخاب خدمت"
        title={
          <>
            مطمئن نیستید
            <br />
            <span>کدام‌ها مناسب است؟</span>
          </>
        }
        description="انتخاب نوع تهاتر کار ماست. کافی است شرایط خود را شرح دهید تا ساختار مناسب را پیشنهاد کنیم."
        points={[
          { title: 'دارایی شما', body: 'چه دارید و چه می‌خواهید مبادله کنید.' },
          { title: 'نیاز شما', body: 'در مقابل، دقیقاً به چه چیزی نیاز دارید.' },
          { title: 'محدوده زمانی', body: 'تا چه زمانی باید معامله بسته شود.' },
        ]}
        actions={[
          { to: '/contact', label: 'گفت‌وگو با کارشناس', variant: 'solid-sulfur' },
          { to: '/faq', label: 'سوالات متداول', variant: 'on-dark' },
        ]}
      />
    </>
  );
}
