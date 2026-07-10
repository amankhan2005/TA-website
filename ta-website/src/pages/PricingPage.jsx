import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import FinalCTA from '../sections/FinalCTA';

/* ── Design tokens — identical to Platform / Features / HowItWorks ── */
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

const INCLUDED = [
  'Full School Administration & Setup',
  'Multi-School & Branch Management',
  'Academic Structure — Classes, Subjects, Terms',
  'Admissions & Inquiry Management',
  'Student Management & RFID Profiles',
  'Staff & Teacher Management',
  'GPS, WiFi, QR & Selfie Attendance Verification',
  'RFID Student Check-In/Check-Out & Safety Alerts',
  'Fee Management & Online Billing',
  'Parent Communication & Instant Notifications',
  'Automated Reports & Analytics',
  'Unlimited Staff and Students',
  'Mobile App for Staff and Parents',
  'School Admin Web Dashboard',
  'Priority Onboarding & Support',
];

const PRICING_FAQS = [
  { q: 'What happens after the free trial?',   a: 'After your 3-month free trial ends, your school moves to the standard plan at $200 per month, per school. You can cancel any time during the trial with no charge.' },
  { q: 'Is there a setup fee?',                 a: 'No. There are no setup fees or hidden costs. Your $200/month covers the full platform — administration, admissions, academics, attendance, students, staff, fees, communication, and reporting.' },
  { q: 'Does pricing change with school size?', a: 'No. It\'s a flat $200/month per school, regardless of how many staff, students, or branches you onboard.' },
  { q: 'Can I cancel any time?',                a: 'Yes. There\'s no long-term contract. You can cancel your subscription at any time from the School Admin dashboard.' },
];

export default function PricingPage() {
  const heroRef    = useRef(null);
  const planRef     = useRef(null);
  const faqRef      = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-48px 0px' });
  const planInView  = useInView(planRef,  { once: true, margin: '-48px 0px' });
  const faqInView   = useInView(faqRef,   { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        .pr-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
        }
        .pr-inner--border { border-top: 0.5px solid ${T.border}; }

        .pr-hero { font-family: ${INTER}; background: #fff; overflow: hidden; }
        .pr-hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(48px, 6vw, 72px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pr-eyebrow {
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
        .pr-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: ${T.teal}; flex-shrink: 0; }
        .pr-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(40px, 5.5vw, 68px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0 0 20px;
        }
        .pr-hero-accent { font-weight: 300; color: ${T.teal}; letter-spacing: -0.02em; }
        .pr-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 480px;
          margin: 0;
        }

        /* ── Plan card ── */
        .pr-plan-wrap { display: flex; justify-content: center; }
        .pr-plan-card {
          width: 100%;
          max-width: 640px;
          border-radius: 20px;
          background: ${T.dark};
          overflow: hidden;
          position: relative;
        }
        .pr-plan-glow {
          position: absolute;
          inset: -80px;
          background: radial-gradient(ellipse at 80% -10%, rgba(13,185,172,0.35) 0%, transparent 60%);
          pointer-events: none;
        }
        .pr-plan-inner { position: relative; z-index: 1; padding: clamp(36px, 5vw, 52px); }
        .pr-plan-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 26px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(13,185,172,0.16);
          border: 0.5px solid rgba(13,185,172,0.4);
          color: ${T.teal};
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.03em;
          margin-bottom: 20px;
        }
        .pr-plan-name {
          font-family: ${MELODY};
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0 0 8px;
        }
        .pr-plan-desc {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.62);
          margin: 0 0 28px;
          max-width: 420px;
        }
        .pr-price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .pr-price-trial {
          font-family: ${MELODY};
          font-size: clamp(30px, 4vw, 40px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.teal};
        }
        .pr-price-then {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
        }
        .pr-price-amount {
          font-family: ${MELODY};
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .pr-price-unit { font-size: 13px; color: rgba(255,255,255,0.55); }
        .pr-price-note {
          font-size: 12.5px;
          color: rgba(255,255,255,0.45);
          margin: 0 0 28px;
        }

        .pr-features {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 20px;
        }
        .pr-features li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.82);
          line-height: 1.5;
        }

        .pr-plan-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          height: 52px;
          border-radius: 14px;
          background: ${T.teal};
          color: #fff;
          text-decoration: none;
          font-family: ${INTER};
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.01em;
          transition: background 0.18s, transform 0.14s;
        }
        .pr-plan-cta:hover  { background: #0aa89c; transform: translateY(-1px); }
        .pr-plan-cta:active { transform: scale(0.98); }

        /* ── FAQ mini ── */
        .pr-faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; }
        .pr-faq-item { padding: 22px 0; border-bottom: 0.5px solid ${T.border}; }
        .pr-faq-q {
          font-family: ${MELODY};
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0 0 8px;
        }
        .pr-faq-a { font-size: 13.5px; line-height: 1.72; color: ${T.mid}; margin: 0; }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .pr-hero-inner { text-align: left; align-items: flex-start; }
          .pr-features { grid-template-columns: 1fr; }
          .pr-plan-inner { padding: 28px 22px; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="pr-hero" aria-label="Pricing hero">
        <div className="pr-hero-inner" ref={heroRef}>
          <motion.div
            className="pr-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <span className="pr-eyebrow-dot" />
            Pricing
          </motion.div>
          <motion.h1
            className="pr-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            One plan.<br />
            <span className="pr-hero-accent">Everything your school needs.</span>
          </motion.h1>
          <motion.p
            className="pr-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          >
            Simple, transparent pricing for the complete 360° school management system — administration, admissions, academics, attendance, students, staff, fees, communication, and reporting.
          </motion.p>
        </div>
      </section>

      {/* ══ PLAN ══ */}
      <section aria-label="Plan" style={{ fontFamily: INTER, background: '#F8FAFB' }}>
        <div className="pr-inner pr-inner--border" ref={planRef}>
          <div className="pr-plan-wrap">
            <motion.div
              className="pr-plan-card"
              initial={{ opacity: 0, y: 28 }}
              animate={planInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="pr-plan-glow" aria-hidden="true" />
              <div className="pr-plan-inner">
                <div className="pr-plan-pill">
                  <Sparkles size={12} strokeWidth={2} />
                  Full platform included
                </div>
                <h2 className="pr-plan-name">School Plan</h2>
                <p className="pr-plan-desc">
                  Everything you need to run your school in one system — no add-ons, no tiers, no per-module fees.
                </p>

                <div className="pr-price-row">
                  <span className="pr-price-trial">3 Months Free</span>
                </div>
                <div className="pr-price-row">
                  <span className="pr-price-then">then</span>
                  <span className="pr-price-amount">$200</span>
                  <span className="pr-price-unit">/ month</span>
                </div>
                <p className="pr-price-note">No setup fees · Cancel any time · Billed per school</p>

                <ul className="pr-features">
                  {INCLUDED.map(f => (
                    <li key={f}>
                      <CheckCircle size={13} strokeWidth={2} style={{ color: T.teal, flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="pr-plan-cta">
                  Start Your Free Trial
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PRICING FAQ ══ */}
      <section aria-label="Pricing FAQ" style={{ fontFamily: INTER, background: '#fff' }}>
        <div className="pr-inner pr-inner--border" ref={faqRef}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <motion.div
              className="pr-eyebrow"
              style={{ justifyContent: 'center' }}
              initial={{ opacity: 0, y: 16 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <span className="pr-eyebrow-dot" />
              Pricing questions
            </motion.div>
            <h2 style={{
              fontFamily: MELODY, fontSize: 'clamp(26px, 3.4vw, 38px)', fontWeight: 800,
              letterSpacing: '-0.035em', color: T.dark, margin: 0,
            }}>
              Before you get started.
            </h2>
          </div>

          <div className="pr-faq-list">
            {PRICING_FAQS.map((f, i) => (
              <motion.div
                key={f.q}
                className="pr-faq-item"
                initial={{ opacity: 0, y: 16 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
              >
                <h3 className="pr-faq-q">{f.q}</h3>
                <p className="pr-faq-a">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
