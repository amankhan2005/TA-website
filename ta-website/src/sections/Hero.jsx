import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { stagger, fadeUp } from '../utils/motion';
import heroDashboard from '../assets/hero-dashboard.png';

const T = {
  teal:      '#0DB9AC',
  tealLight: '#e0faf8',
  dark:      '#0F1923',
  mid:       '#64748B',
  border:    'rgba(0,0,0,.07)',
};

const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const STATS = [
  { num: '99.9%', label: 'Uptime SLA' },
  { num: '4×',    label: 'Verify layers' },
  { num: '0',     label: 'Proxy attempts pass' },
];

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        fontFamily: INTER,
        paddingTop: '128px',
        paddingBottom: '80px',
        background: '#fff',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 32px);
        }

        /* ── Desktop: two-column grid ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-text-col { order: 1; }
        .hero-image-col {
          order: 2;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Headline ── */
        .hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(52px, 6.5vw, 88px);
          font-weight: 800;
          line-height: 0.91;
          letter-spacing: -0.035em;
          color: ${T.dark};
          margin: 0 0 28px;
          text-align: left;
        }

        /* ── Subtitle ── */
        .hero-sub {
          font-size: clamp(15px, 1.6vw, 17px);
          line-height: 1.78;
          color: ${T.mid};
          max-width: 460px;
          margin: 0 0 40px;
          text-align: left;
        }

        /* ── CTAs ── */
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 52px;
          justify-content: flex-start;
        }
        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: ${T.teal};
          color: #fff;
          padding: 15px 26px;
          border-radius: 14px;
          text-decoration: none;
          font-family: ${INTER};
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: background .18s;
          min-height: 50px;
        }
        .hero-cta-primary:hover { background: #0aa89c; }
        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: ${T.dark};
          text-decoration: none;
          font-family: ${INTER};
          font-weight: 500;
          font-size: 15px;
          white-space: nowrap;
          min-height: 50px;
        }

        /* ── Stats ── */
        .hero-stats {
          display: flex;
          gap: 40px;
          padding-top: 28px;
          border-top: 0.5px solid ${T.border};
          flex-wrap: wrap;
        }
        .hero-stat-num {
          font-family: ${MELODY};
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: ${T.dark};
          line-height: 1;
          margin-bottom: 5px;
        }
        .hero-stat-label {
          font-size: 12px;
          color: ${T.mid};
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        /* ── Tablet (≤900px) ── */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .hero-text-col { order: 1; }
          .hero-image-col {
            order: 2;
            width: 100%;
            max-width: 540px;
            margin: 48px auto 0;
          }
          .hero-h1 { font-size: clamp(42px, 7.5vw, 60px); }
        }

        /* ── Mobile (≤600px) ── */
        @media (max-width: 600px) {

          /* Section spacing */
          section[aria-label="Hero"] {
            padding-top: 104px !important;
            padding-bottom: 56px !important;
          }

          /* Single centered column */
          .hero-grid { gap: 0; }

          /* Center everything */
          .hero-text-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          /* Heading */
          .hero-h1 {
            font-size: clamp(44px, 13vw, 58px);
            line-height: 0.95;
            letter-spacing: -0.04em;
            margin-bottom: 24px;
            text-align: center;
            /* Tighten the display but give each line room to breathe */
            word-spacing: -0.02em;
          }

          /* Subtitle */
          .hero-sub {
            font-size: 16px;
            line-height: 1.75;
            text-align: center;
            max-width: 300px;
            margin: 0 auto 36px;
            color: ${T.mid};
          }

          /* CTAs — stacked, full width */
          .hero-ctas {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            margin-bottom: 0;       /* no bottom margin — stats hidden, image follows */
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }
          .hero-cta-primary {
            padding: 17px 24px;
            border-radius: 16px;
            font-size: 16px;
            font-weight: 600;
            min-height: 56px;
            letter-spacing: -0.02em;
          }
          .hero-cta-secondary {
            justify-content: center;
            min-height: 48px;
            font-size: 15px;
            font-weight: 500;
            color: ${T.mid};
            letter-spacing: -0.01em;
            gap: 4px;
          }

          /* Stats — hidden on mobile */
          .hero-stats { display: none !important; }

          /* Image col */
          .hero-image-col {
            max-width: 100%;
            margin-top: 48px;
          }

          /* Glow — center-bloom, contained */
          .hero-image-glow {
            inset: -20px !important;
            background: radial-gradient(
              ellipse at 50% 44%,
              ${T.tealLight} 0%,
              transparent 62%
            ) !important;
            opacity: 0.85;
          }
        }

        /* ── Tiny (≤380px) ── */
        @media (max-width: 380px) {
          .hero-h1 { font-size: 40px; }
          .hero-ctas { max-width: 100%; }
        }
      `}</style>

      <div className="hero-inner">
        <div className="hero-grid">

          {/* ══ LEFT — text ══ */}
          <motion.div
            className="hero-text-col"
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column' }}
          >

            <motion.h1 className="hero-h1" variants={fadeUp} custom={1}>
              Attendance<br />
              that{' '}
              <span style={{ color: T.teal }}>trusts</span>
              <br />
              <span style={{
                fontWeight: 300,
                fontVariationSettings: "'wght' 300",
                color: T.mid,
                letterSpacing: '-0.02em',
              }}>
                schools.
              </span>
            </motion.h1>

            <motion.p className="hero-sub" variants={fadeUp} custom={2}>
              GPS, WiFi, QR, and live selfie verification —
              all four layers working together. Eliminate proxy
              attendance and get accurate records instantly.
            </motion.p>

            <motion.div className="hero-ctas" variants={fadeUp} custom={3}>
              <Link to="/request-demo" className="hero-cta-primary">
                Request a demo
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link to="/features" className="hero-cta-secondary">
                See how it works
                <ChevronRight size={15} strokeWidth={2.5} />
              </Link>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp} custom={4}>
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="hero-stat-num">{num}</div>
                  <div className="hero-stat-label">{label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* ══ RIGHT — image ══ */}
          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="hero-image-glow"
              style={{
                position: 'absolute',
                inset: '-60px',
                background: `radial-gradient(ellipse at 60% 50%, ${T.tealLight} 0%, transparent 68%)`,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <img
                src={heroDashboard}
                alt="TeacherAttendance dashboard preview"
                style={{
                  width: '100%',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}