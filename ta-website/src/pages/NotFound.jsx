 import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, MapPinOff, MessageCircle } from 'lucide-react';

/* ── Design tokens — shared with Hero, Stats, Features, HowItWorks ── */
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

export default function NotFound() {
  return (
    <section
      aria-label="Page not found"
      style={{ fontFamily: INTER, background: '#fff', overflowX: 'hidden' }}
    >
      <style>{`
        .nf-wrap {
          max-width: 640px;
          margin: 0 auto;
          padding: clamp(96px, 14vw, 160px) clamp(20px, 4vw, 48px) clamp(80px, 10vw, 120px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .nf-icon-wrap {
          position: relative;
          width: 96px; height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }
        .nf-icon-glow {
          position: absolute;
          inset: -32px;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 50%, ${T.tealLight} 0%, transparent 70%);
          pointer-events: none;
        }
        .nf-icon-core {
          position: relative;
          width: 88px; height: 88px;
          border-radius: 26px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
        }

        .nf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${T.teal};
          margin-bottom: 18px;
        }
        .nf-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }

        .nf-code {
          font-family: ${MELODY};
          font-size: clamp(64px, 11vw, 112px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: ${T.dark};
          margin: 0 0 12px;
        }
        .nf-code span { color: ${T.teal}; }

        .nf-heading {
          font-family: ${MELODY};
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.dark};
          margin: 0 0 14px;
          line-height: 1.2;
        }

        .nf-tagline {
          font-size: 15px;
          line-height: 1.75;
          color: ${T.mid};
          max-width: 420px;
          margin: 0 0 36px;
        }

        .nf-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nf-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 46px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.005em;
          text-decoration: none;
          transition: transform 0.18s ${EASE.join(',')}, box-shadow 0.18s;
        }
        .nf-btn--primary {
          background: ${T.dark};
          color: #fff;
          box-shadow: 0 14px 30px -12px rgba(15,25,35,0.35);
        }
        .nf-btn--primary:hover { transform: translateY(-2px); }
        .nf-btn--secondary {
          background: #fff;
          color: ${T.dark};
          border: 0.5px solid ${T.border};
        }
        .nf-btn--secondary:hover { background: ${T.tealLight}; border-color: rgba(13,185,172,0.25); }

        .nf-path {
          margin-top: 40px;
          font-size: 12px;
          color: ${T.mid};
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          border-radius: 999px;
          padding: 8px 16px;
        }
        .nf-path code {
          font-family: 'SFMono-Regular', Menlo, monospace;
          color: ${T.dark};
        }

        @media (max-width: 480px) {
          .nf-actions { flex-direction: column; width: 100%; }
          .nf-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="nf-wrap">
        <motion.div
          className="nf-icon-wrap"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="nf-icon-glow" aria-hidden="true" />
          <motion.div
            className="nf-icon-core"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MapPinOff size={34} strokeWidth={1.75} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
        >
          <div className="nf-eyebrow">
            <span className="nf-eyebrow-dot" />
            Page not found
          </div>
          <h1 className="nf-code">4<span>0</span>4</h1>
          <h2 className="nf-heading">This page marked itself absent.</h2>
          <p className="nf-tagline">
            The page you're looking for doesn't exist or may have moved.
            Let's get you back to somewhere that's actually checked in.
          </p>
        </motion.div>

        <motion.div
          className="nf-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
        >
          <Link to="/" className="nf-btn nf-btn--primary">
            <Home size={16} strokeWidth={2} />
            Back to Home
          </Link>
          <Link to="/contact" className="nf-btn nf-btn--secondary">
            <MessageCircle size={16} strokeWidth={2} />
            Contact Support
          </Link>
        </motion.div>

        <motion.div
          className="nf-path"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
        >
          Requested URL: <code>{typeof window !== 'undefined' ? window.location.pathname : ''}</code>
        </motion.div>
      </div>
    </section>
  );
}