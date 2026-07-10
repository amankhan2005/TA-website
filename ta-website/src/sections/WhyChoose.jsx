import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Smartphone, Building2, BarChart3 } from 'lucide-react';

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

const WHY = [
  { icon: Building2,   title: 'One System, Whole School',  desc: 'Administration, admissions, academics, attendance, students, staff, and fees — no more juggling spreadsheets and separate tools.' },
  { icon: ShieldCheck, title: 'Zero Proxy Attendance',     desc: 'GPS + WiFi + selfie + device ID — four layers that cannot simultaneously be faked by any teacher.' },
  { icon: Zap,         title: 'Real-Time Monitoring',      desc: 'Dashboards auto-refresh across every module. See what\'s happening in your school the instant it happens.' },
  { icon: Lock,        title: 'Enterprise-Grade Security', desc: 'bcrypt, JWT, rate limiting, helmet.js security headers, and immutable audit logs built in.' },
  { icon: Smartphone,  title: 'iOS & Android Native',      desc: 'Built with Expo — works on all modern iPhones and Android phones. APK direct distribution available.' },
  { icon: BarChart3,   title: 'Actionable Analytics',      desc: 'School-wide trends, attendance, fee, and academic reports, with CSV exports for every module.' },
];



/* ── Individual why card ── */
function WhyCard({ item, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = item.icon;

  return (
    <motion.div
      ref={ref}
      className="why-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE } }}
    >
      <div className="why-card__icon">
        <Icon size={17} strokeWidth={1.75} />
      </div>
      <h3 className="why-card__title">{item.title}</h3>
      <p className="why-card__desc">{item.desc}</p>
    </motion.div>
  );
}

export default function WhyChoose() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="Why Choose TeacherAttendance"
      style={{ fontFamily: INTER, background: '#F8FAFB', overflowX: 'hidden' }}
    >
      <style>{`
        .why-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Section header — same as Stats, Features, HowItWorks ── */
        .why-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .why-eyebrow {
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
        .why-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .why-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .why-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .why-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 300px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── 3-col card grid — same as Features ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }

        .why-card {
          background: #fff;
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: default;
          transition: background 0.18s;
        }
        .why-card:hover { background: ${T.tealLight}; }

        .why-card__icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          margin-bottom: 4px;
          flex-shrink: 0;
          transition: background 0.18s, border-color 0.18s;
        }
        .why-card:hover .why-card__icon {
          background: #fff;
          border-color: rgba(13,185,172,0.25);
        }
        .why-card__title {
          font-family: ${MELODY};
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.2;
        }
        .why-card__desc {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
          margin: 0;
        }



        /* ── Tablet ── */
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .why-header { flex-direction: column; align-items: flex-start; }
          .why-tagline { text-align: left; max-width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr; border-radius: 12px; }
          .why-card { padding: 22px 20px 26px; }
        }
      `}</style>

      <div className="why-inner">

        {/* ── Header ── */}
        <div className="why-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: EASE }}
          >
            <div className="why-eyebrow">
              <span className="why-eyebrow-dot" />
              Why schools choose us
            </div>
            <h2 className="why-heading">
              Built for<br />
              <span className="why-heading-light">whole-school accountability.</span>
            </h2>
          </motion.div>

          <motion.p
            className="why-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Every design decision was made to give administrators accurate, real-time data across the entire school.
          </motion.p>
        </div>

        {/* ── Why grid ── */}
        <div className="why-grid">
          {WHY.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}