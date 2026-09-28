import React from 'react';

import usePageMeta from '../hooks/usePageMeta.js';
import { Eyebrow, SectionHead } from '../components/Eyebrow.jsx';
import ButtonLink from '../components/ButtonLink.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import CaseRow from '../components/CaseRow.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { site } from '../config/site.js';

const principles = [
  'نقدینگی حفظ شود.',
  'موجودی به حرکت درآید.',
  'ارزش، ارزش بماند.',
];

const useCases = [
  {
    number: '۰۱',
    title: 'کالا با کالا.',
    body: 'محصول، مواد اولیه و کالای آماده فروش را مستقیماً با بنگاه دیگر مبادله کنید؛ بدون فروش شتاب‌زده و بدون خروج نقدینگی.',
  },
  {
    number: '۰۲',
    title: 'خدمت با کالا.',
    body: 'هزینه پیمانکاری، تبلیغات، لجستیک یا خدمات تخصصی را با تولید و محصول خود تسویه کنید.',
  },
  {
    number: '۰۳',
    title: 'بدهی با بدهی.',
    body: 'بدهی متقابل دو شرکت را بدون جابه‌جایی پول و در چارچوب یک قرارداد مشخص، ببندید.',
  },
];

export default function Home() {
  usePageMeta(
    'معاوضه و تهاتر کسب‌وکارها',
    `${site.name}؛ بستر معاوضه و تهاتر کسب‌وکارها. کالا، خدمات و سرمایه را بدون خروج نقدینگی مبادله کنید.`
  );

  return (
    <>
      {/* ---------------- هیرو ---------------- */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-top">
          <Eyebrow>بنیانی برای معاوضه و تهاتر کسب‌وکارها</Eyebrow>
          <span className="hero-note">شفاف · ساختاریافته · قابل اتکا</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading">
              دارایی ات را به فرصت تبدیل کن
              <br />
              <span className="hot">
                <span className="ltr">vex</span> شبکه هوشمند تبادل ارزش
              </span>
            </h1>

            <p className="lead">
              وقتی پول محدود است، ارزش باید جریان پیدا کند.
              <br />
              وکس کالا و دارایی شما را با مسیرهای جدید معامله و یا تهاتر آشنا می‌کند.
            </p>

            <div className="hero-actions">
              <ButtonLink to="/contact" arrow="fwd">
                ثبت درخواست تهاتر
              </ButtonLink>
              <ButtonLink to="/how-it-works" variant="secondary" arrow="down">
                مشاهده فرآیند کار
              </ButtonLink>
            </div>
          </div>

          <div
            className="hero-art"
            role="img"
            aria-label="نگاره‌ای انتزاعی: نقاط و حلقه سرمه‌ای روی زمینه سبز و کهربایی"
          >
            <div className="halftone" />
            <div className="art-ring" />
            <div className="art-top" aria-hidden="true">
              <span className="ltr">VEX BARTER / BARTER SERIES</span>
              <span className="num">۰۰۱</span>
            </div>
            <div className="art-bottom" aria-hidden="true">
              <span className="art-title">
                کالا.
                <br />
                خدمت.
                <br />
                بدهی.
              </span>
              <span className="art-plus">✳</span>
            </div>
          </div>
        </div>

        <div className="principles" aria-label="اصول کاری">
          <p>چارچوبی برای معاملاتی که در پول نقد نمی‌گنجند.</p>
          {principles.map((item) => (
            <div className="principle" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- چرا تهاتر ---------------- */}
      <section className="section" id="why" aria-labelledby="why-heading">
        <SectionHead
          eyebrow="کم‌اصطکاک، پُرحرکت"
          title={
            <>
              برای فردای
              <br />
              کسب‌وکار.
            </>
          }
          description="بهترین کسب‌وکارها برای رشد به فضا نیاز دارند. تهاتر همان فضاست: جایی که موجودی شما به جریان می‌افتد، بی‌آنکه نقدینگی از چرخه خارج شود."
        />

        <div className="feature-grid">
          <FeatureCard
            number="۰۱ / مالکیت نقدینگی"
            icon="direction"
            title={
              <>
                سرمایه،
                <br />
                سر جایش بماند.
              </>
            }
            tone="featured"
          >
            به‌جای فروش شتاب‌زده، کالا و خدمت را با چیزی معاوضه کنید که واقعاً به آن
            نیاز دارید. نقدینگی درون چرخه کسب‌وکار شما باقی می‌ماند.
          </FeatureCard>

          <FeatureCard
            number="۰۲ / موجودی در حرکت"
            icon="bolt"
            title={
              <>
                کالای راکد،
                <br />
                تبدیل به تقاضا.
              </>
            }
          >
            مازاد تولید، انبار پُر و ظرفیت بلااستفاده را با بنگاه‌هایی تطبیق دهید که
            همان‌ها را می‌خواهند و چیزی دارند که شما می‌خواهید.
          </FeatureCard>

          <FeatureCard
            number="۰۳ / شبکه بنگاه‌ها"
            icon="circles"
            title={
              <>
                مستقل،
                <br />
                اما تنها نه.
              </>
            }
          >
            به زنجیره تأمین وسیع‌تر وصل شوید. معاوضه لزوماً با یک طرف تمام نمی‌شود و
            می‌تواند چند بنگاه را هم‌زمان تسویه کند.
          </FeatureCard>
        </div>
      </section>

      {/* ---------------- حوزه‌های تهاتر ---------------- */}
      <section className="section use-cases" id="possibilities" aria-labelledby="possibilities-heading">
        <div>
          <span className="tag">فضا برای متفاوت‌ها</span>
          <h2 id="possibilities-heading">
            تهاتر، فقط
            <br />
            کالا نیست.
          </h2>
          <p className="use-case-intro">
            یک قرارداد پیمانکاری. یک ملک در انتظار بهره‌برداری. بدهی متقابل میان دو
            شرکت. هر کدام نقطه شروع یک معاوضه‌اند.
          </p>
        </div>

        <div>
          {useCases.map((item) => (
            <CaseRow key={item.number} number={item.number} title={item.title}>
              {item.body}
            </CaseRow>
          ))}
        </div>
      </section>

      {/* ---------------- فراخوانی ---------------- */}
      <CtaBand
        eyebrow="از یک جرقه شروع می‌شود"
        title={
          <>
            دارایی شما،
            <br />
            <span>معامله بعدی.</span>
          </>
        }
        description="کافی است بگویید چه دارید و چه می‌خواهید. ساختار تهاتر، ارزش‌گذاری و گام بعدی را با هم مشخص می‌کنیم."
        points={[
          {
            title: 'هر آنچه دارید',
            body: 'کالا، خدمت، تجهیزات، ملک یا طلب متقابل.',
          },
          {
            title: 'هر آنچه نیاز دارید',
            body: 'شرح دقیق نیاز، مهلت زمانی و محدوده قیمت مورد انتظار.',
          },
          {
            title: 'یک گفت‌وگوی اولیه',
            body: 'برای روشن شدن اینکه آیا اساساً امکان تطبیق وجود دارد یا نه.',
          },
        ]}
        actions={[
          { to: '/contact', label: 'ثبت درخواست تهاتر', variant: 'solid-sulfur' },
          { to: '/faq', label: 'سوالات متداول', variant: 'on-dark' },
        ]}
      />
    </>
  );
}
