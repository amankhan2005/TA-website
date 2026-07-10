import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WhyChoose from '../sections/WhyChoose';
import FinalCTA from '../sections/FinalCTA';
import { Heart, Globe, Target, Users } from 'lucide-react';

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

/* ── Data ── */
const MISSION_ITEMS = [
  { icon: Target, color: '#6366F1', title: 'Mission', desc: 'Give every African school one complete system for administration, admissions, academics, attendance, students, staff, fees, and reporting.' },
  { icon: Globe,  color: '#0DB9AC', title: 'Vision',  desc: 'Every school in Africa can run its entire operation with the same precision as enterprise-grade management systems.'       },
  { icon: Heart,  color: '#EC4899', title: 'Values',  desc: 'Data sovereignty, local-first design, honest pricing, and relentless focus on school administrator needs.'              },
  { icon: Users,  color: '#F59E0B', title: 'Impact',  desc: 'Serving 50+ schools and growing — helping administrators run their whole school from one platform daily.'           },
];

const TIMELINE = [
  { year: '2023', title: 'Problem Identified', desc: 'Proxy attendance fraud costing Kenyan schools accountability and resources — we decided to fix it.'               },
  { year: '2024', title: 'Platform Built',     desc: 'Full-stack multi-tenant platform with GPS, WiFi, QR, and selfie verification launched.'                          },
  { year: '2024', title: 'First Schools',      desc: 'First cohort of schools onboarded. Real-time dashboard and mobile app shipped to production.'                    },
  { year: '2025', title: 'Scaling Up',         desc: '50+ schools, 1,200+ teachers, 10,000+ monthly verified records. Expanding beyond Kenya.'                        },
];

/* ── Mission card ── */
function MissionCard({ m, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = m.icon;

  return (
    <motion.div
      ref={ref}
      className="au-mission-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 2) * 0.10, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE } }}
    >
      <div
        className="au-mission-card__icon"
        style={{ background: `${m.color}14`, border: `0.5px solid ${m.color}30` }}
      >
        <Icon size={18} color={m.color} strokeWidth={1.75} />
      </div>
      <h3 className="au-mission-card__title">{m.title}</h3>
      <p className="au-mission-card__desc">{m.desc}</p>
    </motion.div>
  );
}

export default function AboutUs() {
  const heroRef     = useRef(null);
  const missionRef  = useRef(null);
  const timelineRef = useRef(null);

  const heroInView     = useInView(heroRef,     { once: true, margin: '-48px 0px' });
  const missionInView  = useInView(missionRef,  { once: true, margin: '-48px 0px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        /* ══════════════════════════════
           SHARED INNER / HEADER
        ══════════════════════════════ */
        .au-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
        }
        .au-inner--border { border-top: 0.5px solid ${T.border}; }

        .au-eyebrow {
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
        .au-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .au-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .au-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .au-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .au-tagline {
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
        .au-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .au-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .au-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 24px;
        }
        .au-hero-accent {
          font-weight: 300;
          color: ${T.teal};
          letter-spacing: -0.02em;
        }
        .au-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 520px;
          margin: 0;
        }

        /* ══════════════════════════════
           MISSION GRID
           Same 1px gap trick as StackCard
        ══════════════════════════════ */
        .au-mission-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }
        .au-mission-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }
        .au-mission-card {
          background: #fff;
          padding: 32px 32px 36px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: default;
          transition: background 0.18s;
        }
        .au-mission-card:hover { background: ${T.tealLight}; }
        .au-mission-card__icon {
          width: 38px; height: 38px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .au-mission-card:hover .au-mission-card__icon { transform: scale(1.08); }
        .au-mission-card__title {
          font-family: ${MELODY};
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.2;
        }
        .au-mission-card__desc {
          font-size: 13.5px;
          line-height: 1.75;
          color: ${T.mid};
          margin: 0;
        }

        /* ══════════════════════════════
           TIMELINE
           Dark card — single column
        ══════════════════════════════ */
        .au-timeline-section {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .au-timeline-card {
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
          background: ${T.dark};
          display: flex;
          flex-direction: column;
          gap: 1px;
          /* inner gap via 1px bg trick */
          background: ${T.dark};
          /* items separated by rgba line */
        }
        .au-tl-item {
          display: grid;
          grid-template-columns: 80px 1px 1fr;
          align-items: stretch;
          background: ${T.dark};
          transition: background 0.16s;
        }
        .au-tl-item:not(:last-child) {
          border-bottom: 0.5px solid rgba(255,255,255,0.07);
        }
        .au-tl-item:hover { background: #162030; }

        .au-tl-year {
          padding: 28px 0 28px 28px;
          display: flex;
          align-items: center;
        }
        .au-tl-year span {
          font-family: ${MELODY};
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: ${T.teal};
          line-height: 1;
        }
        .au-tl-sep {
          width: 1px;
          background: rgba(255,255,255,0.07);
          align-self: stretch;
          flex-shrink: 0;
        }
        .au-tl-body {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .au-tl-title {
          font-family: ${MELODY};
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }
        .au-tl-desc {
          font-size: 13.5px;
          line-height: 1.72;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .au-header        { flex-direction: column; align-items: flex-start; }
          .au-tagline       { text-align: left; max-width: 100%; }
          .au-mission-grid  { grid-template-columns: 1fr; }
          .au-tl-item       { grid-template-columns: 64px 1px 1fr; }
          .au-tl-year       { padding: 22px 0 22px 20px; }
          .au-tl-body       { padding: 20px 22px; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .au-hero-inner    { text-align: left; align-items: flex-start; }
          .au-mission-grid  { border-radius: 12px; }
          .au-timeline-card { border-radius: 12px; }
          .au-tl-item       { grid-template-columns: 52px 1px 1fr; }
          .au-tl-year       { padding: 18px 0 18px 16px; }
          .au-tl-body       { padding: 18px 16px; }
          .au-mission-card  { padding: 24px 22px 28px; }
        }
      `}</style>

      {/* ══ PAGE HERO ══ */}
      <section className="au-hero" aria-label="About Us hero">
        <div className="au-hero-inner" ref={heroRef}>

          <motion.div
            className="au-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="au-eyebrow-dot" />
            About Us
          </motion.div>

          <motion.h1
            className="au-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Built in Africa,<br />
            <span className="au-hero-accent">for African schools.</span>
          </motion.h1>

          <motion.p
            className="au-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.20, ease: EASE }}
          >
TeacherAttendance began by solving proxy attendance fraud, and grew into a complete 360° school management system — built with the infrastructure, pricing, and design that African schools actually need.
          </motion.p>

        </div>
      </section>

      {/* ══ MISSION / VISION GRID ══ */}
      <section className="au-mission-section" aria-label="Mission, vision, values">
        <div className="au-inner au-inner--border" ref={missionRef}>

          <div className="au-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="au-eyebrow">
                <span className="au-eyebrow-dot" />
                Who we are
              </div>
              <h2 className="au-heading">
                Mission, vision,<br />
                <span className="au-heading-light">values & impact.</span>
              </h2>
            </motion.div>

            <motion.p
              className="au-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              Every decision we make is anchored in what African school administrators actually need.
            </motion.p>
          </div>

          <div className="au-mission-grid">
            {MISSION_ITEMS.map((m, i) => (
              <MissionCard key={m.title} m={m} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="au-timeline-section" aria-label="Our story">
        <div className="au-inner au-inner--border" ref={timelineRef}>

          <div className="au-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="au-eyebrow">
                <span className="au-eyebrow-dot" />
                Our story
              </div>
              <h2 className="au-heading">
                From problem<br />
                <span className="au-heading-light">to platform.</span>
              </h2>
            </motion.div>

            <motion.p
              className="au-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              Two years from identifying the problem to serving 50+ schools across East Africa.
            </motion.p>
          </div>

          <motion.div
            className="au-timeline-card"
            initial={{ opacity: 0, y: 24 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
          >
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year + t.title}
                className="au-tl-item"
                initial={{ opacity: 0, x: -20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.26 + i * 0.09, ease: EASE }}
              >
                <div className="au-tl-year">
                  <span>{t.year}</span>
                </div>
                <div className="au-tl-sep" aria-hidden="true" />
                <div className="au-tl-body">
                  <h3 className="au-tl-title">{t.title}</h3>
                  <p className="au-tl-desc">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <WhyChoose />
      <FinalCTA />
    </>
  );
}