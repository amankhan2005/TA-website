import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const DATA = [
  { value: 50,    suffix: '+',   label: 'Schools Onboarded',  sub: 'Across Kenya'         },
  { value: 10000, suffix: '+',   label: 'Attendance Records', sub: 'Verified this month'  },
  { value: 99,    suffix: '.9%', label: 'System Uptime',      sub: 'Always-on monitoring' },
  { value: 24,    suffix: '/7',  label: 'Live Monitoring',    sub: 'Real-time audit logs' },
];

/* ── Design tokens — same as Hero ── */
const T = {
  teal:   '#0DB9AC',
  dark:   '#0F1923',
  mid:    '#64748B',
  border: 'rgba(15,25,35,0.08)',
};
const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const EASE   = [0.22, 1, 0.36, 1];

/* ── Counter — unchanged logic ── */
function Counter({ target, suffix }) {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true });
  const count   = useMotionValue(0);
  const display = useTransform(count, v => {
    const rounded =
      v >= 1000
        ? (v / 1000).toFixed(0) + 'K'
        : v % 1 !== 0
        ? v.toFixed(1)
        : Math.floor(v).toString();
    return rounded + suffix;
  });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, target, { duration: 1.8, ease: EASE });
    return ctrl.stop;
  }, [inView, target]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Stats() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section ref={ref} aria-label="Platform statistics" style={{ fontFamily: INTER, background: '#fff', overflowX: 'hidden' }}>
      <style>{`
        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Section header ── */
        .stats-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .stats-eyebrow {
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
        .stats-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .stats-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .stats-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .stats-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 320px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── Stats grid ── */
        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        /* ── Individual stat card ── */
        .stat {
          padding: 32px 32px 32px 0;
          border-right: 0.5px solid ${T.border};
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat:first-child { padding-left: 0; }
        .stat:last-child  { border-right: none; padding-right: 0; }
        .stat:not(:first-child) { padding-left: 32px; }

        .stat__value {
          font-family: ${MELODY};
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: ${T.dark};
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat__label {
          font-size: 14px;
          font-weight: 600;
          color: ${T.dark};
          line-height: 1.3;
        }
        .stat__sub {
          font-size: 12px;
          color: ${T.mid};
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .stats__grid { grid-template-columns: repeat(2, 1fr); }
          .stats-header { flex-direction: column; align-items: flex-start; }
          .stats-tagline { text-align: left; max-width: 100%; }

          .stat { border-right: none; padding: 24px 0; border-bottom: 0.5px solid ${T.border}; }
          .stat:not(:first-child) { padding-left: 0; }
          .stat:last-child  { border-bottom: none; }
          .stat:nth-child(odd) { padding-right: 24px; border-right: 0.5px solid ${T.border}; }
          .stat:nth-child(even) { padding-left: 24px; }
          .stat:nth-last-child(-n+2) { border-bottom: none; }
        }

        /* ── Mobile ── */
        @media (max-width: 540px) {
          .stats__grid { grid-template-columns: repeat(2, 1fr); gap: 0; }
          .stat { padding: 20px 0; }
          .stat:nth-child(odd) { padding-right: 16px; }
          .stat:nth-child(even) { padding-left: 16px; }
        }
      `}</style>

      <div className="stats-inner">

        {/* ── Header ── */}
        <div className="stats-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: EASE }}
          >
            <div className="stats-eyebrow">
              <span className="stats-eyebrow-dot" />
              By the numbers
            </div>
            <h2 className="stats-heading">
              Trusted by<br />
              <span className="stats-heading-light">schools that matter.</span>
            </h2>
          </motion.div>

          <motion.p
            className="stats-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Real numbers from real institutions — updated live as our platform grows across East Africa.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="stats__grid">
          {DATA.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.20 + i * 0.10, ease: EASE }}
            >
              <div className="stat__value">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="stat__label">{s.label}</div>
              <div className="stat__sub">{s.sub}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}