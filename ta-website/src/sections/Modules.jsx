import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Building2, GraduationCap, ClipboardCheck, Users,
  UserCog, Wallet, MessageCircle, BarChart3, UserPlus,
} from 'lucide-react';

/* ── Design tokens — shared across all sections ── */
const T = {
  teal:      '#0DB9AC',
  tealLight: '#e0faf8',
  dark:      '#0F1923',
  mid:       '#64748B',
  border:    'rgba(15,25,35,0.08)',
  cardBg:    '#F8FAFB',
};
const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const EASE   = [0.22, 1, 0.36, 1];

const MODULES = [
  { icon: Building2,      title: 'Administration',      desc: 'Multi-school setup, academic sessions, roles, and permissions — configured once, applied everywhere.' },
  { icon: UserPlus,       title: 'Admissions & Inquiries', desc: 'Track parent inquiries and admission leads through a guided workflow, from first call to enrolled student.' },
  { icon: GraduationCap,  title: 'Academics',            desc: 'Classes, sections, subjects, timetables, and exams — the academic structure everything else is built on.' },
  { icon: ClipboardCheck, title: 'Attendance',           desc: 'GPS, WiFi, QR, RFID, and selfie-verified attendance for both staff and students.' },
  { icon: Users,          title: 'Student Management',   desc: 'Complete student profiles, RFID lifecycle, safety tracking, and academic records in one place.' },
  { icon: UserCog,        title: 'Staff & Teachers',     desc: 'Staff records, device registration, scheduling, and attendance visibility for every teacher.' },
  { icon: Wallet,         title: 'Fee Management',       desc: 'Fee structures, online payments, automated invoices, and balances — tracked per student, per term.' },
  { icon: MessageCircle,  title: 'Communication',        desc: 'A parent portal and instant notification system that keeps families and staff informed automatically.' },
  { icon: BarChart3,      title: 'Reporting',            desc: 'School-wide analytics and exportable reports across attendance, fees, and academics.' },
];

function ModuleCard({ m, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = m.icon;

  return (
    <motion.div
      ref={ref}
      className="mod-card"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: EASE } }}
    >
      <div className="mod-card__icon">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <h3 className="mod-card__title">{m.title}</h3>
      <p className="mod-card__desc">{m.desc}</p>
    </motion.div>
  );
}

export default function Modules() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="modules"
      ref={ref}
      aria-label="School management modules"
      style={{ fontFamily: INTER, background: '#F8FAFB', overflowX: 'hidden' }}
    >
      <style>{`
        .mod-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        .mod-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .mod-eyebrow {
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
        .mod-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: ${T.teal}; flex-shrink: 0; }
        .mod-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .mod-heading-light { font-weight: 300; color: ${T.mid}; letter-spacing: -0.02em; }
        .mod-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 320px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        .mod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }
        .mod-card {
          background: #fff;
          padding: 26px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: background 0.18s;
        }
        .mod-card:hover { background: ${T.tealLight}; }
        .mod-card__icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: ${T.cardBg};
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          margin-bottom: 2px;
          flex-shrink: 0;
          transition: background 0.18s, border-color 0.18s;
        }
        .mod-card:hover .mod-card__icon { background: #fff; border-color: rgba(13,185,172,0.25); }
        .mod-card__title {
          font-family: ${MELODY};
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.2;
        }
        .mod-card__desc { font-size: 12.5px; line-height: 1.65; color: ${T.mid}; margin: 0; }

        @media (max-width: 900px) {
          .mod-grid { grid-template-columns: repeat(2, 1fr); }
          .mod-header { flex-direction: column; align-items: flex-start; }
          .mod-tagline { text-align: left; max-width: 100%; }
        }

        @media (max-width: 560px) {
          .mod-grid { grid-template-columns: 1fr; border-radius: 12px; }
          .mod-card { padding: 22px 20px 24px; }
        }
      `}</style>

      <div className="mod-inner">
        <div className="mod-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="mod-eyebrow">
              <span className="mod-eyebrow-dot" />
              A complete system
            </div>
            <h2 className="mod-heading">
              360° coverage,<br />
              <span className="mod-heading-light">start to finish.</span>
            </h2>
          </motion.div>

          <motion.p
            className="mod-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Every part of running a school, connected in one platform — not a patchwork of disconnected tools.
          </motion.p>
        </div>

        <div className="mod-grid">
          {MODULES.map((m, i) => <ModuleCard key={m.title} m={m} index={i} />)}
        </div>
      </div>
    </section>
  );
}
