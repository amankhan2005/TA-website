import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

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

export default function FinalCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      aria-label="Call to action"
      style={{ fontFamily: INTER, background: '#F8FAFB', overflowX: 'hidden' }}
    >
      <style>{`
        .cta-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Single unified card ── */
        .cta-card {
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: stretch;
          background: #fff;
        }

        /* ── Left — main message ── */
        .cta-left {
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
          position: relative;
          overflow: hidden;
        }
        .cta-glow {
          position: absolute;
          inset: -60px;
          background: radial-gradient(ellipse at 20% 60%, ${T.tealLight} 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }
        .cta-left-content { position: relative; z-index: 1; }

        .cta-eyebrow {
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
        .cta-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .cta-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 3.5vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0 0 16px;
        }
        .cta-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .cta-sub {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          margin: 0;
          max-width: 380px;
        }

        /* ── Divider ── */
        .cta-divider {
          background: ${T.border};
          width: 1px;
          align-self: stretch;
        }

        /* ── Right — CTAs ── */
        .cta-right {
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
        }
        .cta-right-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: ${T.mid};
          margin-bottom: 4px;
        }

        .cta-btn-primary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          background: ${T.dark};
          color: #fff;
          text-decoration: none;
          font-family: ${INTER};
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.01em;
          transition: background 0.18s, transform 0.14s;
        }
        .cta-btn-primary:hover  { background: #1a2837; transform: translateY(-2px); }
        .cta-btn-primary:active { transform: scale(0.98); }
        .cta-btn-primary__icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          color: ${T.dark};
          text-decoration: none;
          font-family: ${INTER};
          font-weight: 600;
          font-size: 15px;
          letter-spacing: -0.01em;
          transition: background 0.18s, border-color 0.18s, transform 0.14s;
        }
        .cta-btn-secondary:hover {
          background: ${T.tealLight};
          border-color: rgba(13,185,172,0.25);
          transform: translateY(-2px);
        }
        .cta-btn-secondary:active { transform: scale(0.98); }
        .cta-btn-secondary__icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: #fff;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          flex-shrink: 0;
        }

        .cta-note {
          font-size: 12px;
          color: ${T.mid};
          margin: 4px 0 0;
          line-height: 1.6;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .cta-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1px auto;
          }
          .cta-divider {
            width: auto;
            height: 1px;
          }
          .cta-left, .cta-right { padding: 36px 32px; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .cta-card { border-radius: 12px; }
          .cta-left, .cta-right { padding: 28px 22px; }
        }
      `}</style>

      <div className="cta-inner" ref={ref}>
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0, ease: EASE }}
        >

          {/* ── Left ── */}
          <div className="cta-left">
            <div className="cta-glow" aria-hidden="true" />
            <div className="cta-left-content">
              <motion.div
                className="cta-eyebrow"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.10, ease: EASE }}
              >
                <span className="cta-eyebrow-dot" />
                Ready to start?
              </motion.div>

              <motion.h2
                className="cta-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              >
                Modernize your<br />
                <span className="cta-heading-light">whole school.</span>
              </motion.h2>

              <motion.p
                className="cta-sub"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.50, delay: 0.26, ease: EASE }}
              >
                Join schools across Kenya using one system for administration, admissions, academics, attendance, students, staff, and fees.
              </motion.p>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="cta-divider" aria-hidden="true" />

          {/* ── Right ── */}
          <motion.div
            className="cta-right"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22, ease: EASE }}
          >
            <div className="cta-right-label">Get started today</div>

            <motion.div whileHover={{ y: -2, transition: { duration: 0.18, ease: EASE } }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="cta-btn-primary">
                <span>Request a Demo</span>
                <span className="cta-btn-primary__icon">
                  <ArrowRight size={15} strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2, transition: { duration: 0.18, ease: EASE } }} whileTap={{ scale: 0.98 }}>
              <Link to="/download-app" className="cta-btn-secondary">
                <span>Download App</span>
                <span className="cta-btn-secondary__icon">
                  <Download size={15} strokeWidth={2} />
                </span>
              </Link>
            </motion.div>

            <p className="cta-note">3-month free trial · Our team responds within 24 hours</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}