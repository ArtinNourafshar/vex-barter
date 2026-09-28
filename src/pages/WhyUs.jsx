import React from 'react';

import usePageMeta from '../hooks/usePageMeta.js';
import PageHero from '../components/PageHero.jsx';
import { SectionHead } from '../components/Eyebrow.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CaseRow from '../components/CaseRow.jsx';
import CtaBand from '../components/CtaBand.jsx';

const pillars = [
  {
    number: '۰۱ / ارزش‌گذاری',
    icon: 'chart',
    title: (
      <>
        ارزش واقعی،
        <br />
        نه ارزش کاغذی.
      </>
    ),
    body: 'قیمت پایه روی کاغذ، معامله را نمی‌سازد. روی فاکتور و نرخ روز بازار می‌ایستیم تا طرف مقابل در میانه راه از معامله خارج نشود.',
    tone: 'featured',
  },
  {
    number: '۰۲ / اعتبارسنجی',
    icon: 'shield',
    title: (
      <>
        طرف مقابل،
        <br />
        بررسی‌شده.
      </>
    ),
    body: 'طبیعی است که احتیاط کنید. پیش از معرفی، هویت حقوقی و سابقه فعالیت طرف مقابل بررسی می‌شود تا مذاکره از جای درستی شروع شود.',
  },
  {
    number: '۰۳ / قرارداد',
    icon: 'doc',
    title: (
      <>
        قرارداد،
        <br />
        نه قول شفاهی.
      </>
    ),
    body: 'شرایط تحویل، تضمین و تسویه مابه‌التفاوت، پیش از جابه‌جایی هر کالایی ثبت می‌شود. توافقی که روی کاغذ نیست، توافق نیست.',
  },
];

const differentiators = [
  {
    number: '۰۴',
    title: 'کارگزار، نه فروشنده',
    body: 'منافع ما در بسته‌شدن درست معامله است، نه در فروشِ یک‌طرفه. هیچ سمتی از معامله را نمی‌فروشیم.',
  },
  {
    number: '۰۵',
    title: 'یک مسئول پرونده، تا آخر',
    body: 'از امضای قرارداد تا تأیید تحویل، یک نفر پاسخگوست. پرونده دست‌به‌دست نمی‌شود و در میانه رها نمی‌شود.',
  },
  {
    number: '۰۶',
    title: 'مابه‌التفاوت، روشن از ابتدا',
    body: 'هر جا ارزش دو طرف برابر نباشد، شیوه تسویه مابه‌التفاوت پیش از امضا مشخص است؛ نقدی، مرحله‌ای یا در قالب خدمت جانبی.',
  },
  {
    number: '۰۷',
    title: 'زمان‌بندی با ضرب‌الاجل',
    body: 'برای هر مرحله ضرب‌الاجل توافق می‌شود تا معامله‌ای که نمی‌رسد، بی‌دلیل باز نماند.',
  },
  {
    number: '۰۸',
    title: 'شبکه‌ای که رشد می‌کند',
    body: 'هر معامله بسته‌شده، بنگاه تازه‌ای به شبکه اضافه می‌کند و شانس تطبیق بعدی را بالا می‌برد.',
  },
  {
    number: '۰۹',
    title: 'پاسخ روشن، حتی پاسخ منفی',
    body: 'اگر امکان تطبیق نباشد، همان ابتدای کار اعلام می‌کنیم. زمان شما ارزان‌تر از آن است که در انتظار نگه داشته شود.',
  },
];

export default function WhyUs() {
  usePageMeta(
    'چرا وکس بارتر',
    'مزیت‌های وکس بارتر: ارزش‌گذاری واقع‌بینانه، طرف‌های اعتبارسنجی‌شده، قرارداد کتبی، یک مسئول پرونده و زمان‌بندی مشخص.'
  );

  return (
    <>
      <PageHero
        eyebrow="چرا وکس بارتر"
        tag="مزایا"
        title={
          <>
            چون تهاتر
            <br />
            <span style={{ color: 'var(--ember)' }}>بدون ساختار، ریسک است.</span>
          </>
        }
        lead="مبادله بدون ارزش‌گذاری مستند، بدون اعتبارسنجی طرف مقابل و بدون قرارداد، به‌سرعت به اختلاف می‌انجامد. کار ما دقیقاً همین سه خلأ را می‌بندد."
        actions={[
          { to: '/how-it-works', label: 'فرآیند کار', variant: '' },
          { to: '/contact', label: 'درخواست تهاتر', variant: 'secondary' },
        ]}
      />
      <div className="page-rule" />

      {/* ---------------- سه ستون اصلی ---------------- */}
      <section className="section" aria-labelledby="pillars-heading">
        <SectionHead
          eyebrow="سه ستون اصلی"
          title={
            <>
              آنچه معامله را
              <br />
              ایمن می‌کند.
            </>
          }
          description="اگر فقط یکی از این سه مورد نباشد، تهاتر به قمار تبدیل می‌شود. هر سه، در همه پرونده‌ها اجباری‌اند."
        />

        <div className="feature-grid">
          {pillars.map((pillar) => (
            <FeatureCard
              key={pillar.number}
              number={pillar.number}
              icon={pillar.icon}
              title={pillar.title}
              tone={pillar.tone}
            >
              {pillar.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* ---------------- تفاوت‌ها ---------------- */}
      <section className="section use-cases" aria-labelledby="diff-heading">
        <div>
          <span className="tag">تفاوت‌ها</span>
          <h2 id="diff-heading">
            شش تفاوت
            <br />
            عملی.
          </h2>
          <p className="use-case-intro">
            تفاوت ما در شعار نیست؛ در نحوه ارزش‌گذاری، در قراردادی که می‌نویسیم و در
            اینکه تا آخر پرونده کنار شما می‌مانیم.
          </p>
        </div>

        <div>
          {differentiators.map((item) => (
            <CaseRow key={item.number} number={item.number} title={item.title}>
              {item.body}
            </CaseRow>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="تصمیم با شماست"
        title={
          <>
            اول ارزیابی،
            <br />
            <span>بعد تعهد.</span>
          </>
        }
        description="پیش از هر تعهدی، شرایط شما را ارزیابی می‌کنیم و نتیجه را روشن اعلام می‌کنیم؛ چه مثبت باشد چه منفی."
        points={[
          { title: 'بدون تعهد اولیه', body: 'جلسه و ارزیابی اولیه، پیش از هر تصمیمی.' },
          { title: 'بدون هزینه پنهان', body: 'شرایط مالی، پیش از ورود به مذاکره اعلام می‌شود.' },
          { title: 'با جواب مشخص', body: 'نه، هم یک جواب قابل قبول است.' },
        ]}
        actions={[
          { to: '/contact', label: 'درخواست ارزیابی', variant: 'solid-sulfur' },
          { to: '/about', label: 'درباره ما', variant: 'on-dark' },
        ]}
      />
    </>
  );
}
