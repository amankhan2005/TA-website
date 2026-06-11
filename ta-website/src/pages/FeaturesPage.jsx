import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Features from '../sections/Features';
import FinalCTA from '../sections/FinalCTA';
import {
  Wifi, MapPin, QrCode, Camera,
  Lock, Activity, CheckCircle,
} from 'lucide-react';

/* ── Design tokens — identical to Platform / Features / Stats ── */
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
const HIGHLIGHTS = [
  { icon: Wifi,     color: '#6366F1', label: 'WiFi Verification',  desc: 'SSID + gateway IP checked in real time inside the school network.'  },
  { icon: MapPin,   color: '#EC4899', label: 'GPS Radius Check',   desc: 'Haversine formula, 50–1000m configurable. VPN & mock GPS blocked.'   },
  { icon: QrCode,   color: '#14B8A6', label: 'QR Code Sessions',   desc: 'Cryptographically unique, expiring. Auto-invalidate. No reuse.'      },
  { icon: Camera,   color: '#F59E0B', label: 'Live Selfie Auth',   desc: 'Selfie captured on every QR check-in. Proxy attendance eliminated.'  },
  { icon: Lock,     color: '#EF4444', label: 'Enterprise Security', desc: 'bcrypt, JWT, rate limiting, helmet.js — hardened at every layer.'    },
  { icon: Activity, color: '#22C55E', label: 'Real-Time Dashboard', desc: 'Admin dashboard auto-refreshes. Live present / absent / flagged.'   },
];

const SECURITY = [
  'bcrypt password hashing',
  'JWT access & refresh tokens',
  'Rate-limited API endpoints',
  'helmet.js security headers',
  'CORS policy enforcement',
  'Immutable 365-day audit logs',
  'Device fingerprint validation',
  'VPN & mock GPS detection',
];

const SECURITY_STATUS = [
  'WiFi Network Auth',
  'GPS Boundary Check',
  'Device Fingerprint',
  'Selfie Liveness',
  'Rate Limit Active',
  'Audit Log: On',
];

/* ── Highlight card (same pattern as StackCard in Platform) ── */
function HighlightCard({ h, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = h.icon;

  return (
    <motion.div
      ref={ref}
      className="fp-hl-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE } }}
    >
      <div
        className="fp-hl-card__icon"
        style={{
          background: `${h.color}14`,
          border: `0.5px solid ${h.color}30`,
        }}
      >
        <Icon size={18} color={h.color} strokeWidth={1.75} />
      </div>
      <h3 className="fp-hl-card__title">{h.label}</h3>
      <p className="fp-hl-card__desc">{h.desc}</p>
    </motion.div>
  );
}

export default function FeaturesPage() {
  const heroRef     = useRef(null);
  const hlRef       = useRef(null);
  const secRef      = useRef(null);

  const heroInView  = useInView(heroRef,  { once: true, margin: '-48px 0px' });
  const hlInView    = useInView(hlRef,    { once: true, margin: '-48px 0px' });
  const secInView   = useInView(secRef,   { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        /* ══════════════════════════════
           SHARED INNER / HEADER PATTERN
           (mirrors Platform.jsx exactly)
        ══════════════════════════════ */
        .fp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
        }
        .fp-inner--border { border-top: 0.5px solid ${T.border}; }

        .fp-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .fp-eyebrow {
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
        .fp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .fp-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .fp-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .fp-tagline {
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
           (mirrors Platform hero exactly)
        ══════════════════════════════ */
        .fp-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .fp-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .fp-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 24px;
        }
        .fp-hero-accent {
          font-weight: 300;
          color: ${T.teal};
          letter-spacing: -0.02em;
        }
        .fp-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 520px;
          margin: 0;
        }

        /* ══════════════════════════════
           HIGHLIGHTS GRID
           (same pattern as stack-grid in Platform)
        ══════════════════════════════ */
        .fp-hl-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }
        .fp-hl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }
        .fp-hl-card {
          background: #fff;
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: default;
          transition: background 0.18s;
        }
        .fp-hl-card:hover { background: #F8FAFB; }
        .fp-hl-card__icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          flex-shrink: 0;
        }
        .fp-hl-card__title {
          font-family: ${MELODY};
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.2;
        }
        .fp-hl-card__desc {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
          margin: 0;
        }

        /* ══════════════════════════════
           SECURITY SECTION
           (two-panel card — same as FinalCTA)
        ══════════════════════════════ */
        .fp-sec-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }

        /* Split card — mirrors .cta-card exactly */
        .fp-sec-card {
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: stretch;
          background: #fff;
        }

        /* Left panel */
        .fp-sec-left {
          background: #fff;
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .fp-sec-intro {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          margin: 0 0 32px;
          max-width: 360px;
        }
        .fp-sec-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 12px;
          overflow: hidden;
        }
        .fp-sec-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          background: #fff;
          font-size: 13.5px;
          color: ${T.dark};
          transition: background 0.16s;
        }
        .fp-sec-item:hover { background: ${T.tealLight}; }

        /* Divider */
        .fp-sec-divider {
          background: ${T.border};
          width: 1px;
          align-self: stretch;
        }

        /* Right panel — dark navy (mirrors pricing-card--popular) */
        .fp-sec-right {
          background: ${T.dark};
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .fp-sec-right-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${T.teal};
          margin-bottom: 20px;
        }
        .fp-sec-right-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .fp-sec-badge-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 16px;
        }
        .fp-sec-rows {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          overflow: hidden;
        }
        .fp-sec-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          background: rgba(255,255,255,0.03);
          transition: background 0.16s;
        }
        .fp-sec-row:hover { background: rgba(13,185,172,0.08); }
        .fp-sec-row__dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .fp-sec-row__label {
          flex: 1;
          font-size: 13.5px;
          color: rgba(255,255,255,0.75);
        }
        .fp-sec-row__ok {
          font-size: 12px;
          font-weight: 700;
          color: ${T.teal};
          letter-spacing: 0.02em;
        }
        .fp-sec-note {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          margin: 16px 0 0;
          line-height: 1.6;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .fp-hl-grid   { grid-template-columns: repeat(2, 1fr); }
          .fp-header    { flex-direction: column; align-items: flex-start; }
          .fp-tagline   { text-align: left; max-width: 100%; }
          .fp-sec-card  {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1px auto;
          }
          .fp-sec-divider { width: auto; height: 1px; }
          .fp-sec-left,
          .fp-sec-right { padding: 36px 32px; }
          .fp-sec-intro { max-width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .fp-hero-inner  { text-align: left; align-items: flex-start; }
          .fp-hl-grid     { grid-template-columns: 1fr; border-radius: 12px; }
          .fp-sec-card    { border-radius: 12px; }
          .fp-sec-left,
          .fp-sec-right   { padding: 28px 22px; }
        }
      `}</style>

      {/* ══ PAGE HERO ══ */}
      <section className="fp-hero" aria-label="Features hero">
        <div className="fp-hero-inner" ref={heroRef}>

          <motion.div
            className="fp-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="fp-eyebrow-dot" />
            Platform Features
          </motion.div>

          <motion.h1
            className="fp-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Every layer closes a<br />
            <span className="fp-hero-accent">different fraud loophole.</span>
          </motion.h1>

          <motion.p
            className="fp-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.20, ease: EASE }}
          >
            TeacherAttendance uses four simultaneous verification methods — so no single failure point can be exploited.
          </motion.p>

        </div>
      </section>

      {/* ══ HIGHLIGHTS GRID ══ */}
      <section className="fp-hl-section" aria-label="Feature highlights">
        <div className="fp-inner fp-inner--border" ref={hlRef}>

          <div className="fp-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={hlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="fp-eyebrow">
                <span className="fp-eyebrow-dot" />
                Verification methods
              </div>
              <h2 className="fp-heading">
                Four layers.<br />
                <span className="fp-heading-light">Zero loopholes.</span>
              </h2>
            </motion.div>

            <motion.p
              className="fp-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={hlInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              Each method independently blocks a different fraud vector — together they're airtight.
            </motion.p>
          </div>

          <div className="fp-hl-grid">
            {HIGHLIGHTS.map((h, i) => (
              <HighlightCard key={h.label} h={h} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ══ FEATURES GRID (section component) ══ */}
      <Features />

      {/* ══ SECURITY SECTION ══ */}
      <section className="fp-sec-section" aria-label="Security architecture">
        <div className="fp-inner fp-inner--border" ref={secRef}>

          {/* Header */}
          <div className="fp-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={secInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="fp-eyebrow">
                <span className="fp-eyebrow-dot" />
                Security architecture
              </div>
              <h2 className="fp-heading">
                Enterprise-grade<br />
                <span className="fp-heading-light">protection, built in.</span>
              </h2>
            </motion.div>

            <motion.p
              className="fp-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={secInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              Every layer of the stack is hardened. No shortcuts, no optional patches.
            </motion.p>
          </div>

          {/* Split card */}
          <motion.div
            className="fp-sec-card"
            initial={{ opacity: 0, y: 24 }}
            animate={secInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
          >

            {/* Left — checklist */}
            <div className="fp-sec-left">
              <p className="fp-sec-intro">
                Eight independent security controls are active on every request — from password storage through to network-level audit logging.
              </p>
              <div className="fp-sec-list">
                {SECURITY.map((s, i) => (
                  <motion.div
                    key={s}
                    className="fp-sec-item"
                    initial={{ opacity: 0, x: -16 }}
                    animate={secInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.40, delay: 0.28 + i * 0.06, ease: EASE }}
                  >
                    <CheckCircle size={14} strokeWidth={2.5} style={{ color: T.teal, flexShrink: 0 }} />
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="fp-sec-divider" aria-hidden="true" />

            {/* Right — live status panel */}
            <motion.div
              className="fp-sec-right"
              initial={{ opacity: 0, x: 24 }}
              animate={secInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
            >
              <div className="fp-sec-right-eyebrow">
                <span className="fp-sec-right-eyebrow-dot" />
                Live security status
              </div>

              <div className="fp-sec-badge-label">All systems active</div>

              <div className="fp-sec-rows">
                {SECURITY_STATUS.map((item, i) => (
                  <motion.div
                    key={item}
                    className="fp-sec-row"
                    initial={{ opacity: 0, x: 16 }}
                    animate={secInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.40, delay: 0.32 + i * 0.07, ease: EASE }}
                  >
                    <div className="fp-sec-row__dot" />
                    <span className="fp-sec-row__label">{item}</span>
                    <span className="fp-sec-row__ok">✓ Active</span>
                  </motion.div>
                ))}
              </div>

              <p className="fp-sec-note">
                Status refreshes with every API request · Audit logs retained 365 days
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>

      <FinalCTA />
    </>
  );
}