import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  IdCard, ClipboardList, Wallet, GraduationCap, MessageCircle, BarChart3,
  ArrowRight, CheckCircle, UserPlus, ShieldCheck, FileText,
} from 'lucide-react';
import FinalCTA from '../sections/FinalCTA';

/* ── Design tokens — identical to Platform / Features / HowItWorks ── */
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

const MODULES = [
  { icon: UserPlus,      color: '#0DB9AC', label: 'Admissions & Enrollment', desc: 'Capture parent inquiries, track admission leads, and move applicants through a guided workflow into fully enrolled students.' },
  { icon: IdCard,        color: '#6366F1', label: 'Student Profiles & RFID', desc: 'Full student records with RFID card lifecycle — issue, replace, and deactivate cards from one place.' },
  { icon: ClipboardList, color: '#14B8A6', label: 'Attendance Tracking',     desc: 'RFID, smart devices, and QR check-in share the same verified pipeline as staff attendance — accurate, tamper-proof records.' },
  { icon: ShieldCheck,   color: '#EF4444', label: 'Safety & Movement',       desc: 'Every entry and exit through the gate is logged in real time, with instant parent alerts for late arrival or early departure.' },
  { icon: Wallet,        color: '#F59E0B', label: 'Fee Management',         desc: 'Track fee structures, online payments, and balances per student. Automated reminders and exportable statements for parents and finance teams.' },
  { icon: GraduationCap, color: '#EC4899', label: 'Academics & Classes',    desc: 'Assign students to classes, sections, and terms. Keep academic structure in sync with attendance and reports.' },
  { icon: FileText,      color: '#8B5CF6', label: 'Exams & Report Cards',   desc: 'Plan examinations, record results, and generate report cards that track academic progress term over term.' },
  { icon: MessageCircle, color: '#22C55E', label: 'Parent Communication',   desc: 'Daily attendance reports, instant alerts, and school announcements delivered automatically via push and SMS.' },
  { icon: BarChart3,     color: '#0EA5E9', label: 'Reports & Analytics',    desc: 'Attendance trends, defaulter lists, and exportable reports at the student, class, or school level.' },
];

const LIFECYCLE = [
  'Parent inquiry logged and tracked through the admission workflow',
  'Student enrolled with a complete profile — academics, guardians, and contact details',
  'RFID card issued and linked to the student record',
  'Daily attendance and gate movement captured automatically, synced live to the admin dashboard',
  'Parents notified instantly on arrival, departure, and late or early movement',
  'Fees, exam results, and attendance history all visible in one student profile',
];

function ModuleCard({ m, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = m.icon;

  return (
    <motion.div
      ref={ref}
      className="st-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: EASE } }}
    >
      <div className="st-card__icon" style={{ background: `${m.color}14`, border: `0.5px solid ${m.color}30` }}>
        <Icon size={18} color={m.color} strokeWidth={1.75} />
      </div>
      <h3 className="st-card__title">{m.label}</h3>
      <p className="st-card__desc">{m.desc}</p>
    </motion.div>
  );
}

export default function StudentsPage() {
  const heroRef      = useRef(null);
  const modulesRef    = useRef(null);
  const lifecycleRef  = useRef(null);

  const heroInView     = useInView(heroRef,     { once: true, margin: '-48px 0px' });
  const modulesInView   = useInView(modulesRef,   { once: true, margin: '-48px 0px' });
  const lifecycleInView = useInView(lifecycleRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        .st-inner { max-width: 1200px; margin: 0 auto; padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px); }
        .st-inner--border { border-top: 0.5px solid ${T.border}; }

        .st-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 24px; margin-bottom: 56px; flex-wrap: wrap;
        }
        .st-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; color: ${T.teal}; margin-bottom: 14px;
        }
        .st-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: ${T.teal}; flex-shrink: 0; }
        .st-heading {
          font-family: ${MELODY}; font-size: clamp(32px, 4vw, 52px); font-weight: 800;
          letter-spacing: -0.035em; line-height: 0.95; color: ${T.dark}; margin: 0;
        }
        .st-heading-light { font-weight: 300; color: ${T.mid}; letter-spacing: -0.02em; }
        .st-tagline {
          font-size: clamp(14px, 1.4vw, 16px); line-height: 1.75; color: ${T.mid};
          max-width: 320px; text-align: right; margin: 0; flex-shrink: 0;
        }

        /* ── Hero ── */
        .st-hero { font-family: ${INTER}; background: #fff; overflow: hidden; }
        .st-hero-inner {
          max-width: 1200px; margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        .st-hero-h1 {
          font-family: ${MELODY}; font-size: clamp(44px, 6vw, 80px); font-weight: 800;
          letter-spacing: -0.035em; line-height: 0.93; color: ${T.dark}; margin: 0 0 24px;
        }
        .st-hero-accent { font-weight: 300; color: ${T.teal}; letter-spacing: -0.02em; }
        .st-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px); line-height: 1.75; color: ${T.mid};
          max-width: 540px; margin: 0 0 32px;
        }
        .st-hero-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: ${T.teal}; color: #fff; padding: 15px 26px; border-radius: 14px;
          text-decoration: none; font-weight: 600; font-size: 15px; letter-spacing: -0.01em;
          transition: background 0.18s;
        }
        .st-hero-cta:hover { background: #0aa89c; }

        /* ── Module grid ── */
        .st-section { font-family: ${INTER}; background: #F8FAFB; overflow: hidden; }
        .st-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: ${T.border}; border: 0.5px solid ${T.border}; border-radius: 16px; overflow: hidden;
        }
        .st-card { background: #fff; padding: 28px 28px 32px; display: flex; flex-direction: column; gap: 10px; transition: background 0.18s; }
        .st-card:hover { background: ${T.tealLight}; }
        .st-card__icon {
          width: 36px; height: 36px; border-radius: 10px; display: flex;
          align-items: center; justify-content: center; margin-bottom: 4px; flex-shrink: 0;
        }
        .st-card__title { font-family: ${MELODY}; font-size: 16px; font-weight: 800; letter-spacing: -0.025em; color: ${T.dark}; margin: 0; line-height: 1.2; }
        .st-card__desc { font-size: 13.5px; line-height: 1.72; color: ${T.mid}; margin: 0; }

        /* ── Lifecycle ── */
        .st-lifecycle-section { font-family: ${INTER}; background: #fff; overflow: hidden; }
        .st-lifecycle-list {
          display: flex; flex-direction: column; gap: 1px;
          background: ${T.border}; border: 0.5px solid ${T.border}; border-radius: 16px; overflow: hidden;
          max-width: 760px; margin: 0 auto;
        }
        .st-lifecycle-item {
          display: flex; align-items: flex-start; gap: 14px; padding: 20px 24px; background: #fff; transition: background 0.16s;
        }
        .st-lifecycle-item:hover { background: ${T.tealLight}; }
        .st-lifecycle-num {
          font-family: ${MELODY}; font-size: 13px; font-weight: 800; color: ${T.teal};
          width: 26px; height: 26px; border-radius: 8px; background: #F8FAFB; border: 0.5px solid ${T.border};
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .st-lifecycle-text { font-size: 14px; line-height: 1.6; color: ${T.dark}; }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .st-grid { grid-template-columns: repeat(2, 1fr); }
          .st-header { flex-direction: column; align-items: flex-start; }
          .st-tagline { text-align: left; max-width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .st-grid { grid-template-columns: 1fr; border-radius: 12px; }
          .st-hero-inner { text-align: left; align-items: flex-start; }
          .st-lifecycle-item { padding: 16px 18px; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="st-hero" aria-label="Students hero">
        <div className="st-hero-inner" ref={heroRef}>
          <motion.div
            className="st-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <span className="st-eyebrow-dot" />
            Students
          </motion.div>
          <motion.h1
            className="st-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Every student,<br />
            <span className="st-hero-accent">fully accounted for.</span>
          </motion.h1>
          <motion.p
            className="st-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          >
            From inquiry to graduation — admissions, RFID attendance, safety tracking, fees, academics, and parent communication, all connected in one student record.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
          >
            <Link to="/contact" className="st-hero-cta">
              Request a demo
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ MODULES ══ */}
      <section className="st-section" aria-label="Student management modules">
        <div className="st-inner st-inner--border" ref={modulesRef}>
          <div className="st-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={modulesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <div className="st-eyebrow"><span className="st-eyebrow-dot" />Student management</div>
              <h2 className="st-heading">
                Everything about<br />
                <span className="st-heading-light">a student, in one place.</span>
              </h2>
            </motion.div>
            <motion.p
              className="st-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={modulesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              Admissions, attendance, safety, fees, academics, and communication — connected, not scattered across spreadsheets.
            </motion.p>
          </div>

          <div className="st-grid">
            {MODULES.map((m, i) => <ModuleCard key={m.label} m={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ LIFECYCLE ══ */}
      <section className="st-lifecycle-section" aria-label="Student lifecycle">
        <div className="st-inner st-inner--border" ref={lifecycleRef}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <motion.div
              className="st-eyebrow"
              style={{ justifyContent: 'center' }}
              initial={{ opacity: 0, y: 16 }}
              animate={lifecycleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <span className="st-eyebrow-dot" />
              From inquiry to graduation
            </motion.div>
            <h2 style={{
              fontFamily: MELODY, fontSize: 'clamp(26px, 3.4vw, 38px)', fontWeight: 800,
              letterSpacing: '-0.035em', color: T.dark, margin: 0,
            }}>
              The student lifecycle.
            </h2>
          </div>

          <div className="st-lifecycle-list">
            {LIFECYCLE.map((step, i) => (
              <motion.div
                key={step}
                className="st-lifecycle-item"
                initial={{ opacity: 0, x: -16 }}
                animate={lifecycleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
              >
                <span className="st-lifecycle-num">{i + 1}</span>
                <span className="st-lifecycle-text">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
