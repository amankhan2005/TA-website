import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HowItWorks from '../sections/HowItWorks';
import FinalCTA from '../sections/FinalCTA';

/* ── Design tokens — identical to Platform / Features / HowItWorks section ── */
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

/* ── Data ── */
const ROLES = [
  {
    role:    'Teacher',
    eyebrow: 'Mobile app flow',
    color:   '#6366F1',
    steps: [
      'Open app on registered device',
      'Tap "Mark Attendance"',
      'Pass WiFi + GPS check',
      'Scan QR & take selfie',
      'Attendance confirmed in <10 s',
    ],
  },
  {
    role:    'School Admin',
    eyebrow: 'Dashboard flow',
    color:   T.teal,
    steps: [
      'Log into admin dashboard',
      'Generate QR session (1–60 min)',
      'Monitor live check-ins',
      'Review flagged teachers',
      'Download monthly reports',
    ],
  },
];

export default function HowItWorksPage() {
  const heroRef  = useRef(null);
  const rolesRef = useRef(null);

  const heroInView  = useInView(heroRef,  { once: true, margin: '-48px 0px' });
  const rolesInView = useInView(rolesRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        /* ══════════════════════════════
           SHARED INNER / HEADER PATTERN
        ══════════════════════════════ */
        .hiw-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
        }
        .hiw-inner--border { border-top: 0.5px solid ${T.border}; }

        .hiw-eyebrow {
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
        .hiw-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .hiw-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .hiw-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .hiw-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .hiw-tagline {
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
        .hiw-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .hiw-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hiw-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 24px;
        }
        .hiw-hero-accent {
          font-weight: 300;
          color: ${T.teal};
          letter-spacing: -0.02em;
        }
        .hiw-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 500px;
          margin: 0;
        }

        /* ══════════════════════════════
           ROLE JOURNEYS
           Split card — mirrors FinalCTA
        ══════════════════════════════ */
        .hiw-roles-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }

        /* Outer split card */
        .hiw-roles-card {
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: stretch;
          background: #fff;
        }

        /* Divider column */
        .hiw-roles-divider {
          background: ${T.border};
          width: 1px;
          align-self: stretch;
        }

        /* Each role panel */
        .hiw-role-panel {
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
          background: #fff;
        }

        /* Role eyebrow */
        .hiw-role-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${T.mid};
          margin-bottom: 10px;
        }

        /* Role title */
        .hiw-role-title {
          font-family: ${MELODY};
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1;
          color: ${T.dark};
          margin: 0 0 28px;
        }

        /* Steps list */
        .hiw-role-steps {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 12px;
          overflow: hidden;
        }
        .hiw-role-step {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: #fff;
          transition: background 0.16s;
        }
        .hiw-role-step:hover { background: ${T.tealLight}; }

        .hiw-role-step__num {
          font-family: ${MELODY};
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          min-width: 20px;
          text-align: center;
          flex-shrink: 0;
        }
        .hiw-role-step__sep {
          width: 1px;
          height: 20px;
          background: ${T.border};
          flex-shrink: 0;
        }
        .hiw-role-step__label {
          font-size: 13.5px;
          color: ${T.dark};
          line-height: 1.5;
        }

        /* Dark panel variant (second role) */
        .hiw-role-panel--dark {
          background: ${T.dark};
        }
        .hiw-role-panel--dark .hiw-role-eyebrow { color: rgba(255,255,255,0.4); }
        .hiw-role-panel--dark .hiw-role-title   { color: #fff; }
        .hiw-role-panel--dark .hiw-role-steps   {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.08);
        }
        .hiw-role-panel--dark .hiw-role-step {
          background: rgba(255,255,255,0.03);
        }
        .hiw-role-panel--dark .hiw-role-step:hover {
          background: rgba(13,185,172,0.10);
        }
        .hiw-role-panel--dark .hiw-role-step__sep {
          background: rgba(255,255,255,0.08);
        }
        .hiw-role-panel--dark .hiw-role-step__label {
          color: rgba(255,255,255,0.75);
        }
        .hiw-role-panel--dark .hiw-roles-divider {
          background: rgba(255,255,255,0.08);
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .hiw-header     { flex-direction: column; align-items: flex-start; }
          .hiw-tagline    { text-align: left; max-width: 100%; }
          .hiw-roles-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1px auto;
          }
          .hiw-roles-divider { width: auto; height: 1px; }
          .hiw-role-panel    { padding: 36px 32px; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .hiw-hero-inner { text-align: left; align-items: flex-start; }
          .hiw-roles-card { border-radius: 12px; }
          .hiw-role-panel { padding: 28px 22px; }
        }
      `}</style>

      {/* ══ PAGE HERO ══ */}
      <section className="hiw-hero" aria-label="How It Works hero">
        <div className="hiw-hero-inner" ref={heroRef}>

          <motion.div
            className="hiw-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="hiw-eyebrow-dot" />
            How It Works
          </motion.div>

          <motion.h1
            className="hiw-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Attendance verified in<br />
            <span className="hiw-hero-accent">under 10 seconds.</span>
          </motion.h1>

          <motion.p
            className="hiw-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.20, ease: EASE }}
          >
            A five-step process — from teacher arrival to admin dashboard — with zero manual effort.
          </motion.p>

        </div>
      </section>

      {/* ══ HOW IT WORKS SECTION (existing component) ══ */}
      <HowItWorks />

      {/* ══ ROLE JOURNEYS ══ */}
      <section className="hiw-roles-section" aria-label="Role journeys">
        <div className="hiw-inner hiw-inner--border" ref={rolesRef}>

          {/* Header */}
          <div className="hiw-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={rolesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="hiw-eyebrow">
                <span className="hiw-eyebrow-dot" />
                Role journeys
              </div>
              <h2 className="hiw-heading">
                What each user<br />
                <span className="hiw-heading-light">does.</span>
              </h2>
            </motion.div>

            <motion.p
              className="hiw-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={rolesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              Two roles, one seamless platform — each with a clear five-step flow.
            </motion.p>
          </div>

          {/* Split card */}
          <motion.div
            className="hiw-roles-card"
            initial={{ opacity: 0, y: 24 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
          >
            {ROLES.map((r, ri) => (
              <>
                {/* Role panel */}
                <motion.div
                  key={r.role}
                  className={`hiw-role-panel${ri === 1 ? ' hiw-role-panel--dark' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={rolesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.24 + ri * 0.12, ease: EASE }}
                >
                  {/* Eyebrow */}
                  <div className="hiw-role-eyebrow">
                    <span
                      style={{
                        width: 5, height: 5,
                        borderRadius: '50%',
                        background: r.color,
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    {r.eyebrow}
                  </div>

                  {/* Role name */}
                  <h3 className="hiw-role-title" style={{ color: ri === 1 ? '#fff' : T.dark }}>
                    {r.role}
                  </h3>

                  {/* Steps */}
                  <div className="hiw-role-steps">
                    {r.steps.map((s, si) => (
                      <motion.div
                        key={s}
                        className="hiw-role-step"
                        initial={{ opacity: 0, x: ri === 0 ? -12 : 12 }}
                        animate={rolesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.38, delay: 0.32 + ri * 0.12 + si * 0.07, ease: EASE }}
                      >
                        <span
                          className="hiw-role-step__num"
                          style={{ color: r.color }}
                        >
                          {String(si + 1).padStart(2, '0')}
                        </span>
                        <div className="hiw-role-step__sep" />
                        <span className="hiw-role-step__label">{s}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider between panels */}
                {ri === 0 && (
                  <div key="divider" className="hiw-roles-divider" aria-hidden="true" />
                )}
              </>
            ))}
          </motion.div>

        </div>
      </section>

      <FinalCTA />
    </>
  );
}