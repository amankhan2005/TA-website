import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  LogIn, QrCode, Wifi, BadgeCheck, BarChart3, ClipboardCheck,
  DoorOpen, ScanLine, BellRing, Radio, Zap, History,
} from 'lucide-react';
import howImage from '../assets/how-it-works.png';
import rfidImage from '../assets/rfid-student.png';

/* ── Design tokens — shared with Hero, Stats, Features ──
   Both Teacher and Student flows share the same teal identity —
   one consistent visual language across the whole platform.     */
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

/* ── Teacher Attendance — QR / WiFi ── */
const TEACHER_STEPS = [
  { num: '01', icon: LogIn,          title: 'Teacher Opens the App',           desc: "Opens the liberiaschoolhub.com app on their registered device and taps 'Mark Attendance'.", tag: 'Under 10 seconds' },
  { num: '02', icon: QrCode,         title: 'QR Code or WiFi Verification',    desc: 'Scans the campus QR code, or connects automatically over verified school WiFi.',        tag: 'Dual verification' },
  { num: '03', icon: BadgeCheck,     title: 'Attendance Recorded Instantly',   desc: 'Check-in is verified and logged the moment it happens. No duplicate entries.',          tag: 'Zero delay' },
  { num: '04', icon: BarChart3,      title: 'Admin Dashboard Updates',         desc: 'School admin sees staff check-ins live, with suspicious flags auto-highlighted.',        tag: 'Real-time dashboard' },
  { num: '05', icon: ClipboardCheck, title: 'Attendance Reports Generated',    desc: 'Daily and monthly attendance reports are compiled automatically for review.',           tag: 'Auto-generated' },
];

/* ── RFID Student Attendance — RFID / Parent alerts ── */
const STUDENT_STEPS = [
  { num: '01', icon: DoorOpen,  title: 'Student Enters School Campus',            desc: 'Walks through the campus gate as part of their normal morning routine.',                    tag: 'No app needed' },
  { num: '02', icon: ScanLine,  title: 'RFID Card Scanned Automatically',         desc: "The gate reader detects the student's RFID card instantly — no tapping required.",           tag: 'Hands-free scan' },
  { num: '03', icon: BadgeCheck,title: 'Attendance Marked Instantly',             desc: 'Entry and exit are logged the moment the card is read, down to the second.',                 tag: 'Zero delay' },
  { num: '04', icon: BellRing,  title: 'Parent Receives Instant Notification',    desc: 'Parents instantly receive notifications when students enter or leave school.',               tag: 'Live parent alert' },
  { num: '05', icon: BarChart3, title: 'School Dashboard Updates in Real Time',   desc: 'Attendance reflects across every admin dashboard the second it is recorded.',                tag: 'Real-time sync' },
];

/* ── Capability chips for the student flow ── */
const STUDENT_HIGHLIGHTS = [
  { icon: Radio,    label: 'RFID Technology' },
  { icon: Zap,      label: 'Real-time Attendance' },
  { icon: BellRing, label: 'Parent Alerts' },
  { icon: BarChart3,label: 'School Dashboard Updates' },
  { icon: History,  label: 'Attendance History' },
];

/* ── Individual step card (theme: 'teacher' | 'student') ── */
function Step({ s, index, theme }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = s.icon;

  return (
    <motion.div
      ref={ref}
      className={`how-step how-step--${theme}`}
      initial={{ opacity: 0, x: theme === 'student' ? 20 : -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: EASE }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: EASE } }}
    >
      <div className="how-step__left">
        <span className="how-step__num">{s.num}</span>
        <div className="how-step__icon">
          <Icon size={17} strokeWidth={1.75} />
        </div>
      </div>

      <div className="how-step__body">
        <h4 className="how-step__title">{s.title}</h4>
        <p className="how-step__desc">{s.desc}</p>
        <span className="how-step__tag">{s.tag}</span>
      </div>
    </motion.div>
  );
}

/* ── Teacher visual — existing product photo ── */
function TeacherVisual({ inView }) {
  return (
    <motion.div
      className="how-visual how-visual--teacher"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.70, delay: 0.15, ease: EASE }}
    >
      <div className="how-visual__glow how-visual__glow--teacher" aria-hidden="true" />
      <motion.div
        className="how-visual__frame"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={howImage} alt="Teacher marking attendance via QR code and WiFi" />
      </motion.div>
    </motion.div>
  );
}

/* ── Student visual — real product photo, same treatment as
     TeacherVisual, with a few subtle status badges floating
     around the frame instead of a simulated UI mockup.        ── */
function StudentVisual({ inView }) {
  return (
    <motion.div
      className="how-visual how-visual--student"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.70, delay: 0.15, ease: EASE }}
    >
      <div className="how-visual__glow how-visual__glow--student" aria-hidden="true" />

      <motion.div
        className="how-visual__frame how-visual__frame--student"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={rfidImage} alt="Student using RFID attendance system" />

        

    

         
      </motion.div>
    </motion.div>
  );
}

/* ── One workflow block (Teacher or Student), alternating layout ── */
function WorkflowBlock({
  theme, eyebrow, title, tagline, steps, visual, highlights, reverse,
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <div ref={ref} className={`how-block ${reverse ? 'how-block--reverse' : ''}`}>
      <div className="how-block__content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className={`how-sub-eyebrow how-sub-eyebrow--${theme}`}>
            <span className="how-sub-eyebrow-dot" />
            {eyebrow}
          </div>
          <h3 className={`how-sub-heading how-sub-heading--${theme}`}>{title}</h3>
          <p className="how-sub-tagline">{tagline}</p>
        </motion.div>

        <div className="how-steps">
          {steps.map((s, i) => (
            <Step key={s.num} s={s} index={i} theme={theme} />
          ))}
        </div>

        {highlights && (
          <motion.div
            className="how-chips"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          >
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <span className="how-chip" key={h.label}>
                  <Icon size={13} strokeWidth={2} />
                  {h.label}
                </span>
              );
            })}
          </motion.div>
        )}
      </div>

      <div className="how-block__visual">
        {visual(inView)}
      </div>
    </div>
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

        /* ── Section header ── */
        .how-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 72px;
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
          line-height: 1.02;
          color: ${T.dark};
          margin: 0;
          max-width: 640px;
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
          max-width: 320px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── Workflow block, alternating layout ── */
        .how-block {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(40px, 6vw, 72px);
          align-items: center;
          padding: 56px 0;
        }
        .how-block + .how-block {
          border-top: 0.5px solid ${T.border};
        }
        .how-block--reverse {
          grid-template-columns: 1fr 1.05fr;
        }
        .how-block--reverse .how-block__content { order: 2; }
        .how-block--reverse .how-block__visual  { order: 1; }

        .how-block__content { display: flex; flex-direction: column; gap: 28px; }

        /* ── Sub-headers per workflow ── */
        .how-sub-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .how-sub-eyebrow--teacher  { color: ${T.teal}; }
        .how-sub-eyebrow--student  { color: ${T.teal}; }
        .how-sub-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
          flex-shrink: 0;
        }
        .how-sub-heading {
          font-family: ${MELODY};
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.dark};
          margin: 0 0 10px;
          line-height: 1.1;
        }
        .how-sub-tagline {
          font-size: 14px;
          line-height: 1.7;
          color: ${T.mid};
          margin: 0;
          max-width: 460px;
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
          padding: 20px 22px;
          background: #fff;
          transition: background 0.18s;
          cursor: default;
          align-items: flex-start;
        }
        .how-step--teacher:hover { background: ${T.tealLight}; }
        .how-step--student:hover { background: ${T.tealLight}; }

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
          line-height: 1;
        }
        .how-step--teacher .how-step__num { color: ${T.teal}; }
        .how-step--student .how-step__num { color: ${T.teal}; }

        .how-step__icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s, border-color 0.18s;
        }
        .how-step--teacher .how-step__icon { color: ${T.teal}; }
        .how-step--student .how-step__icon { color: ${T.teal}; }
        .how-step--teacher:hover .how-step__icon { background: #fff; border-color: rgba(13,185,172,0.25); }
        .how-step--student:hover .how-step__icon { background: #fff; border-color: rgba(13,185,172,0.25); }

        .how-step__body { display: flex; flex-direction: column; gap: 5px; }
        .how-step__title {
          font-family: ${MELODY};
          font-size: 14.5px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.25;
        }
        .how-step__desc {
          font-size: 12.5px;
          line-height: 1.7;
          color: ${T.mid};
          margin: 0;
        }
        .how-step__tag {
          display: inline-flex;
          align-items: center;
          height: 24px;
          padding: 0 10px;
          border-radius: 999px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          width: fit-content;
          margin-top: 2px;
        }
        .how-step--teacher .how-step__tag { background: rgba(13,185,172,0.10);  color: ${T.teal}; }
        .how-step--student .how-step__tag { background: rgba(13,185,172,0.10);  color: ${T.teal}; }

        /* ── Capability chips (student highlights) ── */
        .how-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .how-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          background: ${T.tealLight};
          color: ${T.teal};
          font-size: 12px;
          font-weight: 600;
          letter-spacing: -0.005em;
          border: 0.5px solid rgba(13,185,172,0.16);
        }

        /* ── Visual column (shared) ── */
        .how-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .how-visual__glow {
          position: absolute;
          inset: -40px;
          pointer-events: none;
          z-index: 0;
        }
        .how-visual__glow--teacher { background: radial-gradient(ellipse at 50% 50%, ${T.tealLight} 0%, transparent 65%); }
        .how-visual__glow--student { background: radial-gradient(ellipse at 50% 50%, ${T.tealLight} 0%, transparent 65%); }

        .how-visual__frame {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .how-visual__frame img {
          width: 100%;
          max-height: 560px;
          object-fit: contain;
          display: block;
          border-radius: 24px;
          box-shadow: 0 28px 64px -24px rgba(15,25,35,0.22);
        }

        /* ── Floating status badges over the student image ── */
        .how-badge {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 13px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          border: 0.5px solid ${T.border};
          border-radius: 999px;
          color: ${T.dark};
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: -0.005em;
          box-shadow: 0 14px 32px -14px rgba(15,25,35,0.22);
          z-index: 2;
        }
        .how-badge svg { color: ${T.teal}; flex-shrink: 0; }
        .how-badge--tl { top: 8%;    left: -4%; }
        .how-badge--br { bottom: 10%; right: -4%; }
        .how-badge--bl { bottom: -3%; left: 14%; }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .how-block { grid-template-columns: 1fr; gap: 40px; }
          .how-block--reverse { grid-template-columns: 1fr; }
          .how-block--reverse .how-block__content { order: 1; }
          .how-block--reverse .how-block__visual  { order: 2; }
          .how-header { flex-direction: column; align-items: flex-start; }
          .how-tagline { text-align: left; max-width: 100%; }
          .how-visual { max-width: 520px; margin: 0 auto; width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .how-step { padding: 16px 14px; gap: 12px; }
          .how-steps { border-radius: 12px; }
          .how-visual { max-width: 100%; }
          .how-visual__glow { inset: -20px; }
          .how-badge { padding: 6px 10px; font-size: 10.5px; gap: 5px; }
          .how-badge--tl { left: 4px; top: 4%; }
          .how-badge--br { right: 4px; bottom: 6%; }
          .how-badge--bl { left: 8%; bottom: -10px; }
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
              Smart Attendance for<br />
              <span className="how-heading-light">Teachers &amp; Students.</span>
            </h2>
          </motion.div>

          <motion.p
            className="how-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Track teacher and student attendance in real time using QR, WiFi, and RFID technology — with instant parent notifications.
          </motion.p>
        </div>

        {/* ── Teacher Attendance — content left, image right ── */}
        <WorkflowBlock
          theme="teacher"
          eyebrow="For Teachers"
          title="Teacher Attendance"
          tagline="From opening the app to the admin dashboard updating — the entire check-in takes under 10 seconds."
          steps={TEACHER_STEPS}
          visual={(inView) => <TeacherVisual inView={inView} />}
        />

        {/* ── RFID Student Attendance — image left, content right ── */}
        <WorkflowBlock
          theme="student"
          eyebrow="For Students"
          title="RFID Student Attendance"
          tagline="No app, no card tap needed. Students walk through the gate and everything else happens automatically."
          steps={STUDENT_STEPS}
           visual={(inView) => <StudentVisual inView={inView} />}
          reverse
        />

      </div>
    </section>
  );
}