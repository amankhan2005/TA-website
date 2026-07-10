import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Download from '../sections/Download';
import FinalCTA from '../sections/FinalCTA';
import { Apple, Bot, Package } from 'lucide-react';
import heroDashboard from '../assets/hero-dashboard.png';

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

const REQUIREMENTS = [
  { icon: Apple,   color: '#6366F1', platform: 'iOS',     req: 'iOS 14.0 or later · iPhone 8 or newer'            },
  { icon: Bot,     color: '#22C55E', platform: 'Android', req: 'Android 9.0 (API 28) or later · 2 GB RAM minimum'  },
  { icon: Package, color: '#0DB9AC', platform: 'APK',     req: 'Direct install — no Play Store needed for Android'  },
];

function RequirementRow({ r, index, inView }) {
  const Icon = r.icon;
  return (
    <motion.div
      className="da-req-row"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.42, delay: 0.28 + index * 0.08, ease: EASE }}
    >
      <div
        className="da-req-icon"
        style={{ background: `${r.color}14`, border: `0.5px solid ${r.color}30` }}
      >
        <Icon size={16} color={r.color} strokeWidth={1.75} />
      </div>
      <div>
        <div className="da-req-platform">{r.platform}</div>
        <div className="da-req-text">{r.req}</div>
      </div>
    </motion.div>
  );
}

export default function DownloadApp() {
  const heroRef    = useRef(null);
  const contentRef = useRef(null);

  const heroInView    = useInView(heroRef,    { once: true, margin: '-48px 0px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        .da-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .da-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .da-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0DB9AC;
          margin-bottom: 14px;
        }
        .da-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #0DB9AC;
          flex-shrink: 0;
        }
        .da-hero-h1 {
          font-family: 'Melody', 'Inter', sans-serif;
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: #0F1923;
          margin: 0 0 24px;
        }
        .da-hero-accent {
          font-weight: 300;
          color: #0DB9AC;
          letter-spacing: -0.02em;
        }
        .da-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: #64748B;
          max-width: 500px;
          margin: 0;
        }

        .da-section {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #F8FAFB;
          overflow: hidden;
        }
        .da-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid rgba(15,25,35,0.08);
        }

        .da-card {
          border: 0.5px solid rgba(15,25,35,0.08);
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: stretch;
          background: #fff;
        }

        .da-left {
          background: #fff;
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .da-left-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0DB9AC;
          margin-bottom: 12px;
        }
        .da-left-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #0DB9AC;
          flex-shrink: 0;
        }
        .da-left-heading {
          font-family: 'Melody', 'Inter', sans-serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.0;
          color: #0F1923;
          margin: 0 0 28px;
        }
        .da-left-heading-light {
          font-weight: 300;
          color: #64748B;
          letter-spacing: -0.02em;
        }

        .da-req-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: rgba(15,25,35,0.08);
          border: 0.5px solid rgba(15,25,35,0.08);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        .da-req-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: #fff;
          transition: background 0.16s;
        }
        .da-req-row:hover { background: #e0faf8; }
        .da-req-icon {
          width: 34px; height: 34px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .da-req-platform {
          font-family: 'Melody', 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0F1923;
          line-height: 1.2;
          margin-bottom: 2px;
        }
        .da-req-text {
          font-size: 12px;
          color: #64748B;
          line-height: 1.5;
        }

        .da-apk-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(13,185,172,0.06);
          border: 0.5px solid rgba(13,185,172,0.18);
          border-radius: 10px;
        }
        .da-apk-note__title {
          font-family: 'Melody', 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0F1923;
          margin-bottom: 3px;
          line-height: 1.2;
        }
        .da-apk-note__sub {
          font-size: 12px;
          color: #64748B;
          line-height: 1.55;
        }

        .da-divider {
          background: rgba(15,25,35,0.08);
          width: 1px;
          align-self: stretch;
        }

        /* Right — dashboard image */
        .da-right {
          background: #F8FAFB;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 32px;
        }
        .da-dashboard-img {
          width: 100%;
          max-width: 420px;
          height: auto;
          display: block;
          border-radius: 10px;
          box-shadow: 0 12px 48px rgba(15,25,35,0.12), 0 0 0 0.5px rgba(15,25,35,0.08);
        }

        @media (max-width: 900px) {
          .da-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1px auto;
          }
          .da-divider  { width: auto; height: 1px; }
          .da-left     { padding: 36px 32px; }
          .da-right    { padding: 28px; }
        }

        @media (max-width: 560px) {
          .da-hero-inner { text-align: left; align-items: flex-start; }
          .da-card       { border-radius: 12px; }
          .da-left       { padding: 28px 22px; }
          .da-right      { padding: 24px; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="da-hero" aria-label="Download App hero">
        <div className="da-hero-inner" ref={heroRef}>

          <motion.div
            className="da-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="da-eyebrow-dot" />
            Download App
          </motion.div>

          <motion.h1
            className="da-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Available on iOS,<br />
            <span className="da-hero-accent">Android & direct APK.</span>
          </motion.h1>

          <motion.p
            className="da-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.20, ease: EASE }}
          >
            Built with Expo — works on all modern phones. No App Store needed for Android distribution.
          </motion.p>

        </div>
      </section>

      {/* ══ REQUIREMENTS + DASHBOARD ══ */}
      <section className="da-section" aria-label="Device requirements">
        <div className="da-inner" ref={contentRef}>

          <motion.div
            className="da-card"
            initial={{ opacity: 0, y: 24 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            {/* Left */}
            <div className="da-left">
              <div className="da-left-eyebrow">
                <span className="da-left-eyebrow-dot" />
                Device requirements
              </div>
              <h2 className="da-left-heading">
                Works on all<br />
                <span className="da-left-heading-light">modern phones.</span>
              </h2>

              <div className="da-req-list">
                {REQUIREMENTS.map((r, i) => (
                  <RequirementRow key={r.platform} r={r} index={i} inView={contentInView} />
                ))}
              </div>

              <motion.div
                className="da-apk-note"
                initial={{ opacity: 0, y: 12 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: 0.52, ease: EASE }}
              >
                <Package size={16} strokeWidth={1.75} style={{ color: '#0DB9AC', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="da-apk-note__title">APK Direct Distribution</div>
                  <div className="da-apk-note__sub">
                    Contact us for the APK file — install directly on Android without Play Store approval. Ideal for schools with restricted devices.
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="da-divider" aria-hidden="true" />

            {/* Right — dashboard image */}
            <motion.div
              className="da-right"
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.70, delay: 0.20, ease: EASE }}
            >
              <img
                src={heroDashboard}
                alt="liberiaschoolhub.com dashboard preview"
                className="da-dashboard-img"
              />
            </motion.div>

          </motion.div>

        </div>
      </section>

      <Download />
      <FinalCTA />
    </>
  );
}