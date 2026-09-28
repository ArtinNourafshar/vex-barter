import React from 'react';

import usePageMeta from '../hooks/usePageMeta.js';
import PageHero from '../components/PageHero.jsx';
import { SectionHead } from '../components/Eyebrow.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Icon from '../components/Icon.jsx';
import { site } from '../config/site.js';

const values = [
  {
    icon: 'eye',
    title: 'شفافیت، پیش از امضا',
    body: 'قیمت پایه، فاکتور و شیوه محاسبه اختلاف ارزش، پیش از هر توافقی در اختیار دو طرف قرار می‌گیرد.',
  },
  {
    icon: 'shield',
    title: 'اعتبارسنجی طرف مقابل',
    body: 'هویت حقوقی، سابقه فعالیت و توان تعهد طرف مقابل پیش از معرفی ارزیابی می‌شود.',
  },
  {
    icon: 'scale',
    title: 'بی‌طرفی',
    body: 'کارگزار تهاتریم، نه فروشنده. منافع ما در بسته‌شدن درست و پایدار معامله است.',
  },
  {
    icon: 'clock',
    title: 'پیگیری تا تسویه',
    body: 'تحویل، مابه‌التفاوت و تسویه تا حصول اطمیان مکتوب دو طرف پیگیری می‌شود.',
  },
];

const roles = [
  {
    icon: 'handshake',
    title: 'کارشناسان تهاتر',
    body: 'ساختاردهی معامله، تطبیق طرفین و هماهنگی مذاکره.',
  },
  {
    icon: 'chart',
    title: 'ارزیابان کالا',
    body: 'قیمت‌گذاری پایه، بررسی فاکتور و سنجش استاندارد ارزش.',
  },
  {
    icon: 'doc',
    title: 'حقوق و قرارداد',
    body: 'تنظیم قرارداد، شرایط تضمین و چارچوب تسویه.',
  },
  {
    icon: 'network',
    title: 'توسعه شبکه',
    body: 'شناسایی بنگاه‌ها، توسعه پوشش صنفی و نگه‌داشت طرف مقابل.',
  },
];

export default function About() {
  usePageMeta(
    'درباره ما',
    'درباره وکس بارتر؛ چرا شکل گرفتیم، چه می‌کنیم، ارزش‌هایمان چیست و تیم ما چه نقش‌هایی دارد.'
  );

  return (
    <>
      <PageHero
        eyebrow="درباره وکس بارتر"
        tag="درباره ما"
        title={
          <>
            واسطه نیستیم؛
            <br />
            <span style={{ color: 'var(--ember)' }}>ساختاریم.</span>
          </>
        }
        lead="ما دست‌یابی به کالا یا خدمت را تسهیل نمی‌کنیم؛ ما ساختار معامله را می‌سازیم. کارگزاری تهاتر، ارزش‌گذاری مستند، قرارداد کتبی و پیگیری تا تسویه کامل."
        actions={[
          { to: '/services', label: 'مشاهده خدمات', variant: '' },
          { to: '/how-it-works', label: 'فرآیند کار', variant: 'secondary' },
        ]}
      />
      <div className="page-rule" />

      {/* ---------------- داستان ---------------- */}
      <section className="section split" aria-labelledby="story-heading">
        <div>
          <span className="tag">داستان ما</span>
          <h2 id="story-heading" style={{ marginTop: 24 }}>
            از یک مشکل
            <br />
            ساده شروع شد.
          </h2>
        </div>

        <div className="split-body">
          <p>
            کسب‌وکارها هم‌زمان با دو مسئله روبه‌رو هستند: نقدینگی که باید حفظ شود و
            موجودی که باید بفروشد. سنتی‌ترین راه‌حلِ فروش شتاب‌زده است؛ راه‌حلی که
            نقدینگی را از چرخه خارج می‌کند و حاشیه سود را می‌خورد.
          </p>
          <p>
            {site.name} برای همین شکل گرفت: بستری که معاوضه و تهاتر را از یک توافق
            شفاهی و پُرریسک، به یک فرآیند قراردادی، ارزیابی‌شده و پیگیری‌شده تبدیل
            می‌کند.
          </p>
          <p>
            کار ما با یک جلسه ارزیابی آغاز می‌شود و تا لحظه‌ای ادامه دارد که هر دو
            طرف، تحویل و تسویه را مکتوب تأیید کنند. هیچ پرونده‌ای در میانه رها نمی‌شود.
          </p>
        </div>
      </section>

      {/* ---------------- ارزش‌ها ---------------- */}
      <section className="section" aria-labelledby="values-heading">
        <SectionHead
          eyebrow="ارزش‌های ما"
          title={
            <>
              چهار چیزی که
              <br />
              روی آن می‌ایستیم.
            </>
          }
          description="این ارزش‌ها شعار نیستند؛ در قرارداد، در ارزش‌گذاری و در نحوه پیگیری پرونده دیده می‌شوند."
        />

        <div className="card-grid four">
          {values.map((value) => (
            <article className="panel" key={value.title}>
              <Icon name={value.icon} />
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- ماموریت و چشم‌انداز ---------------- */}
      <section className="section cta-band" aria-labelledby="vision-heading">
        <div className="cta-copy">
          <div className="eyebrow">
            <span className="dot" />
            <span>ماموریت و چشم‌انداز</span>
          </div>
          <h2 id="vision-heading">
            تهاتر، یک
            <br />
            <span>گزینه عادی.</span>
          </h2>
          <p>
            می‌خواهیم معاوضه و تهاتر به‌اندازه فروش نقدی، مسیری عادی، قابل اتکا و
            بدون ریسکِ پنهان برای کسب‌وکارها باشد.
          </p>
        </div>

        <ul className="cta-points">
          <li>
            <span className="k">۰۱</span>
            <span>
              <strong>ماموریت ما</strong>
              <br />
              حفظ نقدینگی بنگاه‌ها با ساختاردهی درست معاوضه کالا، خدمت و بدهی.
            </span>
          </li>
          <li>
            <span className="k">۰۲</span>
            <span>
              <strong>چشم‌انداز ما</strong>
              <br />
              شبکه‌ای از بنگاه‌های اعتبارسنجی‌شده که در آن هر دارایی، معادل واقعی خود
              را پیدا می‌کند.
            </span>
          </li>
        </ul>
      </section>

      {/* ---------------- تیم ---------------- */}
      <section className="section" aria-labelledby="team-heading">
        <SectionHead
          eyebrow="ساختار تیم"
          title={
            <>
              پشت هر پرونده،
              <br />
              چه کسی هست.
            </>
          }
          description="تیم ما بر مبنای نقش تعریف شده است؛ هر پرونده از ارزیابی تا تسویه، به یک مسئول مشخص واگذار می‌شود."
        />

        <div className="card-grid four">
          {roles.map((role) => (
            <article className="panel" key={role.title}>
              <Icon name={role.icon} />
              <h3>{role.title}</h3>
              <p>{role.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="قدم اول"
        title={
          <>
            بیایید
            <br />
            <span>شروع کنیم.</span>
          </>
        }
        description="اگر کالا، خدمت یا بدهی‌ای دارید که می‌تواند موضوع یک تهاتر باشد، یک گفت‌وگوی اولیه کافی است."
        points={[
          { title: 'ارزیابی اولیه', body: 'بررسی اینکه آیا اساساً امکان تطبیق وجود دارد.' },
          { title: 'ساختار پیشنهادی', body: 'نوع تهاتر، زمان‌بندی و چارچوب قرارداد.' },
          { title: 'تصمیم روشن', body: 'بدون تعهد، بدون هزینه پنهان، با جواب مشخص.' },
        ]}
        actions={[
          { to: '/contact', label: 'تماس با ما', variant: 'solid-sulfur' },
          { to: '/why-us', label: 'چرا وکس بارتر', variant: 'on-dark' },
        ]}
      />
    </>
  );
}
