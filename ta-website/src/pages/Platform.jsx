import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, Database, Globe, Server, Cpu, Lock, CheckCircle } from 'lucide-react';
import FinalCTA from '../sections/FinalCTA';

/* ── Design tokens — shared across all sections ── */
const T = {
  teal:      '#0DB9AC',
  tealLight: '#e0faf8',
  dark:      '#0F1923',
  mid:       '#64748B',
  border:    'rgba(15,25,35,0.08)',
};
const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const EASE   = [0.22, 1, 0.36, 1];

const STACK = [
  { icon: Cpu,      label: 'React Native / Expo',    desc: 'Cross-platform mobile app for iOS & Android teachers.',      color: '#6366F1' },
  { icon: Globe,    label: 'React / Vite',            desc: 'School Admin & Super Admin web dashboards.',                  color: '#EC4899' },
  { icon: Server,   label: 'Node.js / Express',       desc: 'RESTful API backend with JWT auth and role-based access.',   color: '#F59E0B' },
  { icon: Database, label: 'MongoDB Atlas (Africa)',  desc: 'Multi-tenant isolated data. Africa region for sovereignty.', color: '#14B8A6' },
  { icon: Layers,   label: 'Cloudinary',              desc: 'Selfie capture storage — secure, fast, global CDN.',         color: '#22C55E' },
  { icon: Lock,     label: 'Resend + JWT',            desc: 'Transactional email + stateless secure authentication.',     color: '#8B5CF6' },
];

const TIERS = [
  { name: 'Starter',    teachers: 'Up to 30 teachers',   price: 'Contact Us', features: ['WiFi Attendance', 'GPS Verification', 'Mobile App', 'Basic Reports'],                                                             popular: false },
  { name: 'School',     teachers: 'Up to 150 teachers',  price: 'Contact Us', features: ['Everything in Starter', 'QR + Selfie Check-in', 'Advanced Analytics', 'Priority Support'],                                        popular: true  },
  { name: 'Enterprise', teachers: 'Unlimited teachers',  price: 'Contact Us', features: ['Everything in School', 'Multi-branch support', 'Custom integrations', 'Dedicated account manager'],                                popular: false },
];

/* ── Stack card ── */
function StackCard({ s, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = s.icon;

  return (
    <motion.div
      ref={ref}
      className="stack-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE } }}
    >
      <div className="stack-card__icon" style={{ background: `${s.color}14`, border: `0.5px solid ${s.color}30` }}>
        <Icon size={18} color={s.color} strokeWidth={1.75} />
      </div>
      <h3 className="stack-card__title">{s.label}</h3>
      <p className="stack-card__desc">{s.desc}</p>
    </motion.div>
  );
}

/* ── Pricing card ── */
function PricingCard({ t, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      className={`pricing-card${t.popular ? ' pricing-card--popular' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.10, ease: EASE }}
    >
      {t.popular && <div className="pricing-card__pill">Most Popular</div>}
      <div className="pricing-card__head">
        <h3 className="pricing-card__name">{t.name}</h3>
        <span className="pricing-card__teachers">{t.teachers}</span>
      </div>
      <div className="pricing-card__price">{t.price}</div>
      <ul className="pricing-card__features">
        {t.features.map(f => (
          <li key={f}>
            <CheckCircle size={13} strokeWidth={2} style={{ color: T.teal, flexShrink: 0, marginTop: 2 }} />
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/request-demo"
        className={`pricing-card__cta${t.popular ? ' pricing-card__cta--primary' : ''}`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}

export default function Platform() {
  const heroRef    = useRef(null);
  const stackRef   = useRef(null);
  const pricingRef = useRef(null);

  const heroInView    = useInView(heroRef,    { once: true, margin: '-48px 0px' });
  const stackInView   = useInView(stackRef,   { once: true, margin: '-48px 0px' });
  const pricingInView = useInView(pricingRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        /* ── Shared inner ── */
        .plat-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
        }
        .plat-inner--border { border-top: 0.5px solid ${T.border}; }

        /* ── Shared section header ── */
        .plat-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .plat-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${T.teal};
          margin-bottom: 14px;
        }
        .plat-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .plat-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .plat-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .plat-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 300px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ══════════════════════════════
           PAGE HERO
        ══════════════════════════════ */
        .plat-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .plat-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .plat-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 24px;
        }
        .plat-hero-accent {
          font-weight: 300;
          color: ${T.teal};
          letter-spacing: -0.02em;
        }
        .plat-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 520px;
          margin: 0;
        }

        /* ══════════════════════════════
           TECH STACK
        ══════════════════════════════ */
        .stack-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }
        .stack-card {
          background: #fff;
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: default;
          transition: background 0.18s;
        }
        .stack-card:hover { background: #F8FAFB; }
        .stack-card__icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          flex-shrink: 0;
        }
        .stack-card__title {
          font-family: ${MELODY};
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.2;
        }
        .stack-card__desc {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
          margin: 0;
        }

        /* ══════════════════════════════
           PRICING
        ══════════════════════════════ */
        .pricing-section {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }
        .pricing-card {
          background: #fff;
          padding: 32px 28px 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .pricing-card--popular {
          background: ${T.dark};
        }
        .pricing-card__pill {
          display: inline-flex;
          align-items: center;
          height: 24px;
          padding: 0 10px;
          border-radius: 999px;
          background: ${T.teal};
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.03em;
          width: fit-content;
          margin-bottom: 16px;
        }
        .pricing-card__head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .pricing-card__name {
          font-family: ${MELODY};
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.035em;
          color: ${T.dark};
          margin: 0;
          line-height: 1;
        }
        .pricing-card--popular .pricing-card__name { color: #fff; }
        .pricing-card__teachers {
          font-size: 12px;
          font-weight: 500;
          color: ${T.mid};
          white-space: nowrap;
        }
        .pricing-card--popular .pricing-card__teachers { color: rgba(255,255,255,0.55); }
        .pricing-card__price {
          font-family: ${MELODY};
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: ${T.teal};
          margin-bottom: 24px;
        }
        .pricing-card--popular .pricing-card__price { color: ${T.teal}; }
        .pricing-card__features {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .pricing-card__features li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 13.5px;
          color: ${T.mid};
          line-height: 1.5;
        }
        .pricing-card--popular .pricing-card__features li { color: rgba(255,255,255,0.7); }
        .pricing-card__cta {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          border-radius: 10px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          color: ${T.dark};
          font-family: ${INTER};
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: background 0.18s, border-color 0.18s, transform 0.14s;
        }
        .pricing-card__cta:hover {
          background: ${T.tealLight};
          border-color: rgba(13,185,172,0.25);
          transform: translateY(-1px);
        }
        .pricing-card__cta--primary {
          background: ${T.teal};
          border-color: ${T.teal};
          color: #fff;
        }
        .pricing-card__cta--primary:hover {
          background: #0aa89c;
          border-color: #0aa89c;
          transform: translateY(-1px);
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .stack-grid    { grid-template-columns: repeat(2, 1fr); }
          .pricing-grid  { grid-template-columns: 1fr; }
          .plat-header   { flex-direction: column; align-items: flex-start; }
          .plat-tagline  { text-align: left; max-width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .stack-grid   { grid-template-columns: 1fr; border-radius: 12px; }
          .pricing-grid { border-radius: 12px; }
          .plat-hero-inner { text-align: left; align-items: flex-start; }
        }
      `}</style>

      {/* ══ PAGE HERO ══ */}
      <section className="plat-hero" aria-label="Platform hero">
        <div className="plat-hero-inner" ref={heroRef}>
          <motion.div
            className="plat-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="plat-eyebrow-dot" />
            Platform
          </motion.div>

          <motion.h1
            className="plat-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Built for scale.<br />
            <span className="plat-hero-accent">Designed for Africa.</span>
          </motion.h1>

          <motion.p
            className="plat-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.20, ease: EASE }}
          >
            A full-stack multi-tenant SaaS — mobile app, admin dashboards, and a hardened backend — all running on Africa-region infrastructure.
          </motion.p>
        </div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section className="stack-section" aria-label="Tech stack">
        <div className="plat-inner plat-inner--border" ref={stackRef}>
          <div className="plat-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={stackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="plat-eyebrow">
                <span className="plat-eyebrow-dot" />
                Tech stack
              </div>
              <h2 className="plat-heading">
                The infrastructure<br />
                <span className="plat-heading-light">behind the platform.</span>
              </h2>
            </motion.div>
            <motion.p
              className="plat-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={stackInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              Every layer chosen for reliability, security, and Africa-first performance.
            </motion.p>
          </div>

          <div className="stack-grid">
            {STACK.map((s, i) => <StackCard key={s.label} s={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="pricing-section" aria-label="Pricing">
        <div className="plat-inner plat-inner--border" ref={pricingRef}>
          <div className="plat-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="plat-eyebrow">
                <span className="plat-eyebrow-dot" />
                Plans
              </div>
              <h2 className="plat-heading">
                Simple, school-friendly<br />
                <span className="plat-heading-light">pricing.</span>
              </h2>
            </motion.div>
            <motion.p
              className="plat-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              All plans include the mobile app, admin dashboard, and full support.
            </motion.p>
          </div>

          <div className="pricing-grid">
            {TIERS.map((t, i) => <PricingCard key={t.name} t={t} index={i} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}