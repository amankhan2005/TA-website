import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  LogIn, Radio, ShieldCheck, BadgeCheck, BarChart3,
} from 'lucide-react';
import howImage from '../assets/how-it-works.png';

/* ── Design tokens — shared with Hero, Stats, Features ── */
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

const STEPS = [
  { num: '01', icon: LogIn,       title: 'Staff Member Arrives at School', desc: "Opens the TeacherAttendance app on their registered device and taps 'Mark Attendance'.", tag: 'Under 10 seconds'    },
  { num: '02', icon: Radio,       title: 'Network Automatically Detected', desc: 'App detects school WiFi SSID and gateway IP. Only authorized networks are accepted.',          tag: 'WiFi validated'       },
  { num: '03', icon: ShieldCheck, title: 'Multi-Layer Verification',      desc: 'GPS radius, WiFi match, device ID, and QR/selfie verified simultaneously in real time.',        tag: '4-layer anti-fraud'   },
  { num: '04', icon: BadgeCheck,  title: 'Attendance Confirmed',          desc: 'Verified and recorded instantly. Duplicate protection prevents multiple check-ins per day.',     tag: 'Instant recording'    },
  { num: '05', icon: BarChart3,   title: 'Admin Dashboard Updates Live',  desc: 'School admin sees check-ins as they happen. Suspicious flags and reports auto-generate.',       tag: 'Real-time dashboard'  },
];

/* ── Individual step card ── */
function Step({ s, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = s.icon;

  return (
    <motion.div
      ref={ref}
      className="how-step"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: EASE }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE } }}
    >
      {/* Step number + icon */}
      <div className="how-step__left">
        <span className="how-step__num">{s.num}</span>
        <div className="how-step__icon">
          <Icon size={17} strokeWidth={1.75} />
        </div>
      </div>

      {/* Content */}
      <div className="how-step__body">
        <h3 className="how-step__title">{s.title}</h3>
        <p className="how-step__desc">{s.desc}</p>
        <span className="how-step__tag">{s.tag}</span>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="how"
      ref={ref}
      aria-label="How It Works"
      style={{ fontFamily: INTER, background: '#fff', overflowX: 'hidden' }}
    >
      <style>{`
        .how-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Section header — same as Stats & Features ── */
        .how-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .how-eyebrow {
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
        .how-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .how-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .how-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .how-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 300px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── Two-column content grid ── */
        .how-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(40px, 6vw, 72px);
          align-items: center;
        }

        /* ── Steps list ── */
        .how-steps {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── Step card ── */
        .how-step {
          display: flex;
          gap: 18px;
          padding: 22px 24px;
          background: #fff;
          transition: background 0.18s;
          cursor: default;
          align-items: flex-start;
        }
        .how-step:hover { background: ${T.tealLight}; }

        .how-step__left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .how-step__num {
          font-family: ${MELODY};
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: ${T.teal};
          line-height: 1;
        }
        .how-step__icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          transition: background 0.18s, border-color 0.18s;
        }
        .how-step:hover .how-step__icon {
          background: #fff;
          border-color: rgba(13,185,172,0.25);
        }

        .how-step__body { display: flex; flex-direction: column; gap: 5px; }
        .how-step__title {
          font-family: ${MELODY};
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.25;
        }
        .how-step__desc {
          font-size: 13px;
          line-height: 1.72;
          color: ${T.mid};
          margin: 0;
        }
        .how-step__tag {
          display: inline-flex;
          align-items: center;
          height: 26px;
          padding: 0 10px;
          border-radius: 999px;
          background: rgba(13,185,172,0.10);
          color: ${T.teal};
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.02em;
          width: fit-content;
          margin-top: 2px;
        }

        /* ── Right image column ── */
        .how-img-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .how-img-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at 50% 50%, ${T.tealLight} 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }
        .how-img-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .how-img-wrap img {
          width: 100%;
          max-height: 600px;
          object-fit: contain;
          display: block;
          border-radius: 24px;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr; gap: 48px; }
          .how-header { flex-direction: column; align-items: flex-start; }
          .how-tagline { text-align: left; max-width: 100%; }
          .how-img-col { max-width: 520px; margin: 0 auto; width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .how-step { padding: 18px 16px; gap: 14px; }
          .how-steps { border-radius: 12px; }
          .how-img-col { max-width: 100%; }
          .how-img-glow { inset: -20px; }
        }
      `}</style>

      <div className="how-inner">

        {/* ── Section header ── */}
        <div className="how-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: EASE }}
          >
            <div className="how-eyebrow">
              <span className="how-eyebrow-dot" />
              How it works
            </div>
            <h2 className="how-heading">
              Attendance in<br />
              <span className="how-heading-light">five steps.</span>
            </h2>
          </motion.div>

          <motion.p
            className="how-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            From opening the app to the admin dashboard updating — the entire flow takes under 10 seconds.
          </motion.p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="how-grid">

          {/* Steps */}
          <div className="how-steps">
            {STEPS.map((s, i) => (
              <Step key={s.num} s={s} index={i} />
            ))}
          </div>

          {/* Image */}
          <motion.div
            className="how-img-col"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.70, delay: 0.15, ease: EASE }}
          >
            <div className="how-img-glow" aria-hidden="true" />
            <motion.div
              className="how-img-wrap"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={howImage} alt="TeacherAttendance how it works" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}