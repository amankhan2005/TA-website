import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package } from 'lucide-react';

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

const STORES = [
  { name: 'App Store',   sub: 'Download on the', icon: 'apple' },
  { name: 'Google Play', sub: 'Get it on',        icon: 'play'  },
];

const AppleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.3.17.65.19.97.05l12.38-6.91-2.65-2.65-10.7 9.51zM.54 1.27C.2 1.6 0 2.14 0 2.84v18.32c0 .7.2 1.24.54 1.57l.08.08 10.26-10.26v-.24L.62 1.19l-.08.08zM20.9 10.51l-2.94-1.64-2.98 2.97 2.98 2.98 2.96-1.65c.84-.47.84-1.23-.02-1.66zM3.18.24L15.56 7.1l-2.65 2.64L2.21.26C2.53.12 2.88.14 3.18.24z"/>
  </svg>
);

export default function Download() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="download"
      ref={ref}
      aria-label="Download App"
      style={{ fontFamily: INTER, background: '#fff', overflowX: 'hidden' }}
    >
      <style>{`
        .dl-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Section header — same as all other sections ── */
        .dl-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .dl-eyebrow {
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
        .dl-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .dl-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .dl-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .dl-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 300px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── Content grid — store buttons left, APK note right ── */
        .dl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── Store button panel ── */
        .dl-stores {
          background: #fff;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dl-stores-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: ${T.mid};
          margin-bottom: 4px;
        }

        .dl-store-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          border-radius: 12px;
          border: 0.5px solid ${T.border};
          background: #F8FAFB;
          text-decoration: none;
          color: ${T.dark};
          transition: background 0.18s, border-color 0.18s, transform 0.15s;
          cursor: pointer;
        }
        .dl-store-btn:hover {
          background: ${T.tealLight};
          border-color: rgba(13,185,172,0.25);
          transform: translateY(-2px);
        }
        .dl-store-btn:active { transform: scale(0.98); }
        .dl-store-btn__icon {
          color: ${T.dark};
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dl-store-btn__sub {
          font-size: 11px;
          color: ${T.mid};
          font-weight: 400;
          line-height: 1;
          margin-bottom: 3px;
        }
        .dl-store-btn__name {
          font-family: ${MELODY};
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.dark};
          line-height: 1;
        }

        /* ── APK panel ── */
        .dl-apk {
          background: #fff;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }
        .dl-apk-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .dl-apk-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          flex-shrink: 0;
        }
        .dl-apk-title {
          font-family: ${MELODY};
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.dark};
          line-height: 1.2;
          margin-bottom: 6px;
        }
        .dl-apk-sub {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
        }
        .dl-apk-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 38px;
          padding: 0 16px;
          border-radius: 8px;
          background: ${T.dark};
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          width: fit-content;
          transition: background 0.18s, transform 0.14s;
        }
        .dl-apk-cta:hover  { background: #1a2837; transform: translateY(-1px); }
        .dl-apk-cta:active { transform: scale(0.98); }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .dl-header { flex-direction: column; align-items: flex-start; }
          .dl-tagline { text-align: left; max-width: 100%; }
          .dl-grid { grid-template-columns: 1fr; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .dl-grid { border-radius: 12px; }
          .dl-stores, .dl-apk { padding: 24px 20px; }
        }
      `}</style>

      <div className="dl-inner">

        {/* ── Header ── */}
        <div className="dl-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: EASE }}
          >
            <div className="dl-eyebrow">
              <span className="dl-eyebrow-dot" />
              Mobile app
            </div>
            <h2 className="dl-heading">
              Attendance that moves<br />
              <span className="dl-heading-light">with your school.</span>
            </h2>
          </motion.div>

          <motion.p
            className="dl-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Available for iOS and Android. Direct APK distribution available — no App Store required for Android schools.
          </motion.p>
        </div>

        {/* ── Content grid ── */}
        <motion.div
          className="dl-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.20, ease: EASE }}
        >

          {/* Store buttons */}
          <div className="dl-stores">
            <div className="dl-stores-label">Download the app</div>
            {STORES.map((b, i) => (
              <motion.a
                key={b.name}
                href="/contact"
                className="dl-store-btn"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.28 + i * 0.08, ease: EASE }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="dl-store-btn__icon">
                  {b.icon === 'apple' ? <AppleIcon /> : <PlayIcon />}
                </div>
                <div>
                  <div className="dl-store-btn__sub">{b.sub}</div>
                  <div className="dl-store-btn__name">{b.name}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* APK panel */}
          <div className="dl-apk">
            <div className="dl-apk-top">
              <div className="dl-apk-icon">
                <Package size={18} strokeWidth={1.75} />
              </div>
              <div>
                <div className="dl-apk-title">Direct APK Distribution</div>
                <div className="dl-apk-sub">
                  No Play Store required. Contact us to receive the Android APK directly — ideal for schools with restricted device policies.
                </div>
              </div>
            </div>
            <a href="/contact" className="dl-apk-cta">
              Request APK
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}