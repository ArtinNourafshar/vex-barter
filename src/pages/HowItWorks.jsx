import React from 'react';

import usePageMeta from '../hooks/usePageMeta.js';
import PageHero from '../components/PageHero.jsx';
import { SectionHead } from '../components/Eyebrow.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { pad2 } from '../utils/fa.js';

const steps = [
  {
    title: 'ثبت درخواست',
    body: 'ساختار کالا، خدمت یا بدهی خود را شرح می‌دهید و می‌گویید در مقابل، چه چیزی نیاز دارید. در همین مرحله مشخص می‌شود که آیا اساساً زمینه تطبیق وجود دارد یا نه.',
  },
  {
    title: 'ارزیابی و قیمت‌گذاری',
    body: 'ارزش پایه بر اساس فاکتور و نرخ روز بازار تعیین می‌شود. اختلاف احتمالی ارزش دو طرف، شفاف محاسبه و اعلام می‌گردد تا در مذاکره پنهان نماند.',
  },
  {
    title: 'تطبیق و معرفی طرف مقابل',
    body: 'در میان بنگاه‌های اعتبارسنجی‌شده شبکه، به دنبال تطبیق می‌گردیم. طرف مقابل همراه با سابقه فعالیت و وضعیت حقوقی‌اش به شما معرفی می‌شود.',
  },
  {
    title: 'مذاکره و تنظیم قرارداد',
    body: 'شروط تحویل، زمان‌بندی، تضمین‌ها و نحوه تسویه مابه‌التفاوت، در قراردادی مشترک ثبت می‌شود. تا امضای این قرارداد، هیچ کالایی جابه‌جا نمی‌شود.',
  },
  {
    title: 'تحویل، تسویه و بستن پرونده',
    body: 'تحویل رصد و تسویه انجام می‌شود. پرونده پس از تأیید مکتوب دو طرف بسته می‌شود و هر دو سند نهایی دریافت می‌کنند.',
  },
];

const checklist = [
  'مدارک ثبتی و هویتی بنگاه',
  'فاکتور یا لیست موجودی برای کالایی که ارائه می‌دهید',
  'شرح دقیق چیزی که در مقابل نیاز دارید',
  'محدوده قیمت و مهلت زمانی مورد انتظار',
];

export default function HowItWorks() {
  usePageMeta(
    'فرآیند کار',
    'فرآیند پنج‌مرحله‌ای تهاتر در وکس بارتر: ثبت درخواست، ارزیابی و قیمت‌گذاری، تطبیق و معرفی طرف مقابل، مذاکره و قرارداد، تحویل و تسویه.'
  );

  return (
    <>
      <PageHero
        eyebrow="فرآیند کار"
        tag="چطور کار می‌کنیم"
        title={
          <>
            پنج گام
            <br />
            <span style={{ color: 'var(--ember)' }}>تا تسویه.</span>
          </>
        }
        lead="مسیر هر تهاتر یکسان است؛ تنها ساختار معامله است که تغییر می‌کند. هر گام، خروجی مشخص و زمان‌بندی توافق‌شده خودش را دارد."
        actions={[
          { to: '/contact', label: 'شروع فرآیند', variant: '' },
          { to: '/services', label: 'مشاهده خدمات', variant: 'secondary' },
        ]}
      />
      <div className="page-rule" />

      {/* ---------------- گام‌ها ---------------- */}
      <section className="section" aria-labelledby="steps-heading">
        <SectionHead
          eyebrow="نقشه راه"
          title={
            <>
              از درخواست
              <br />
              تا بستن پرونده.
            </>
          }
          description="هیچ مرحله‌ای بدون خروجی مشخص شروع نمی‌شود و هیچ گامی بدون اعلام قبلی جا به جا نمی‌شود."
        />

        <div className="steps">
          {steps.map((step, index) => (
            <article className="step-row" key={step.title}>
              <span className="step-num">{pad2(index + 1)}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- چک‌لیست مدارک ---------------- */}
      <section className="section split" aria-labelledby="checklist-heading">
        <div>
          <span className="tag">برای شروع</span>
          <h2 id="checklist-heading" style={{ marginTop: 24 }}>
            چه چیزی
            <br />
            لازم دارید؟
          </h2>
          <p style={{ marginTop: 22, maxWidth: 420, lineHeight: 2 }}>
            آماده بودن این چهار مورد، مرحله ارزیابی را به‌شکل محسوسی کوتاه‌تر می‌کند.
            اگر موردی را ندارید، هنوز هم می‌توانید شروع کنید؛ فقط زمان‌بندی
            واقع‌بینانه‌تر خواهد بود.
          </p>
        </div>

        <div className="split-body">
          <ul className="check-list">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="panel" style={{ marginTop: 12 }}>
            <span className="panel-num">نکته</span>
            <h3>جلسه اول، تعهدی ایجاد نمی‌کند.</h3>
            <p>
              هدف جلسه اول روشن شدن امکان تطبیق است. اگر پاسخ «نه» باشد، همان‌جا
              اعلام می‌شود تا زمان شما تلف نشود.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="گام اول"
        title={
          <>
            درخواست شما،
            <br />
            <span>شروع ماست.</span>
          </>
        }
        description="درخواست تهاتر خود را ثبت کنید تا کارشناس مربوطه شرایط را بررسی و گام بعدی را با شما هماهنگ کند."
        points={[
          { title: 'ثبت درخواست', body: 'شرح دارایی و نیاز، به همراه مدارک اولیه.' },
          { title: 'ارزیابی اولیه', body: 'بررسی امکان تطبیق و اعلام نتیجه روشن.' },
          { title: 'جلسه کارشناسی', body: 'هماهنگی زمان‌بندی و ساختار پیشنهادی.' },
        ]}
        actions={[
          { to: '/contact', label: 'ثبت درخواست تهاتر', variant: 'solid-sulfur' },
          { to: '/faq', label: 'سوالات متداول', variant: 'on-dark' },
        ]}
      />
    </>
  );
}
