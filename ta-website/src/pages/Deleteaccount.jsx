import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, UserCheck, Clock, Trash2, Mail } from 'lucide-react';

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
  { num: '01', icon: Smartphone, title: 'Open the App',            desc: 'Launch the TeacherAttendance app and log in to your account.' },
  { num: '02', icon: UserCheck,  title: 'Go to Profile Section',   desc: 'Navigate to your profile from the main menu.' },
  { num: '03', icon: Trash2,     title: 'Tap Delete Account',      desc: 'Click on "Delete Request Account" to submit your request.' },
  { num: '04', icon: Mail,       title: 'Confirmation from Team',  desc: 'Our team may contact you to confirm the request was intentional.' },
  { num: '05', icon: Clock,      title: 'Data Deleted in 24 Hours', desc: 'Once approved, all account data is permanently deleted within 24 hours.' },
];

const DATA_DELETED = [
  'Account information',
  'Profile details',
  'Attendance-related records linked to the account',
  'Associated app usage data',
];

function StepRow({ s, index, inView }) {
  const Icon = s.icon;
  return (
    <motion.div
      className="da-step"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.42, delay: 0.22 + index * 0.08, ease: EASE }}
    >
      <div className="da-step__left">
        <span className="da-step__num">{s.num}</span>
        <div className="da-step__icon">
          <Icon size={16} strokeWidth={1.75} />
        </div>
      </div>
      <div className="da-step__body">
        <div className="da-step__title">{s.title}</div>
        <div className="da-step__desc">{s.desc}</div>
      </div>
    </motion.div>
  );
}

export default function DeleteAccount() {
  const heroRef    = useRef(null);
  const stepsRef   = useRef(null);
  const dataRef    = useRef(null);

  const heroInView  = useInView(heroRef,  { once: true, margin: '-48px 0px' });
  const stepsInView = useInView(stepsRef, { once: true, margin: '-48px 0px' });
  const dataInView  = useInView(dataRef,  { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        /* ══ HERO ══ */
        .dac-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .dac-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dac-eyebrow {
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
        .dac-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .dac-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 20px;
        }
        .dac-hero-accent {
          font-weight: 300;
          color: ${T.teal};
          letter-spacing: -0.02em;
        }
        .dac-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 480px;
          margin: 0;
        }

        /* ══ SHARED SECTION ══ */
        .dac-section-white { font-family: ${INTER}; background: #fff; overflow: hidden; }
        .dac-section-gray  { font-family: ${INTER}; background: #F8FAFB; overflow: hidden; }
        .dac-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ══ SHARED HEADER ══ */
        .dac-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .dac-heading {
          font-family: ${MELODY};
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .dac-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .dac-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 280px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ══ STEPS LIST ══ */
        .da-steps {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }
        .da-step {
          display: flex;
          gap: 18px;
          padding: 22px 24px;
          background: #fff;
          align-items: flex-start;
          transition: background 0.18s;
          cursor: default;
        }
        .da-step:hover { background: ${T.tealLight}; }
        .da-step__left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .da-step__num {
          font-family: ${MELODY};
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: ${T.teal};
          line-height: 1;
        }
        .da-step__icon {
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
        .da-step:hover .da-step__icon {
          background: #fff;
          border-color: rgba(13,185,172,0.25);
        }
        .da-step__body { display: flex; flex-direction: column; gap: 4px; padding-top: 2px; }
        .da-step__title {
          font-family: ${MELODY};
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.25;
        }
        .da-step__desc {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
        }

        /* ══ DATA DELETED CARD ══ */
        .dac-data-card {
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          align-items: stretch;
          background: #fff;
        }
        .dac-data-left {
          background: ${T.dark};
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .dac-data-left-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${T.teal};
          margin-bottom: 16px;
        }
        .dac-data-left-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .dac-data-left-heading {
          font-family: ${MELODY};
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.0;
          color: #fff;
          margin: 0 0 12px;
        }
        .dac-data-left-sub {
          font-size: 13.5px;
          line-height: 1.72;
          color: rgba(255,255,255,0.50);
        }

        .dac-data-divider {
          background: ${T.border};
          width: 1px;
          align-self: stretch;
        }

        .dac-data-right {
          background: #fff;
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .dac-data-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .dac-data-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          background: #fff;
          font-size: 13.5px;
          color: ${T.dark};
          transition: background 0.16s;
        }
        .dac-data-item:hover { background: ${T.tealLight}; }
        .dac-data-item__dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }

        /* Contact note */
        .dac-contact-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(13,185,172,0.06);
          border: 0.5px solid rgba(13,185,172,0.18);
          border-radius: 10px;
        }
        .dac-contact-note__title {
          font-family: ${MELODY};
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: ${T.dark};
          margin-bottom: 3px;
          line-height: 1.2;
        }
        .dac-contact-note__sub {
          font-size: 12px;
          color: ${T.mid};
          line-height: 1.55;
        }
        .dac-contact-note__sub a {
          color: ${T.teal};
          text-decoration: none;
          font-weight: 600;
        }
        .dac-contact-note__sub a:hover { text-decoration: underline; }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .dac-header    { flex-direction: column; align-items: flex-start; }
          .dac-tagline   { text-align: left; max-width: 100%; }
          .dac-data-card {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1px auto;
          }
          .dac-data-divider { width: auto; height: 1px; }
          .dac-data-left,
          .dac-data-right   { padding: 36px 32px; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .dac-hero-inner { text-align: left; align-items: flex-start; }
          .da-steps       { border-radius: 12px; }
          .dac-data-card  { border-radius: 12px; }
          .dac-data-left,
          .dac-data-right { padding: 28px 22px; }
          .da-step        { padding: 18px 16px; gap: 14px; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="dac-hero" aria-label="Delete Account hero">
        <div className="dac-hero-inner" ref={heroRef}>

          <motion.div
            className="dac-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="dac-eyebrow-dot" />
            Account Management
          </motion.div>

          <motion.h1
            className="dac-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Delete Account<br />
            <span className="dac-hero-accent">TeacherAttendance</span>
          </motion.h1>

          <motion.p
            className="dac-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.20, ease: EASE }}
          >
            We respect your privacy and give users full control over their account and personal data.
          </motion.p>

        </div>
      </section>

      {/* ══ HOW TO REQUEST ══ */}
      <section className="dac-section-gray" aria-label="How to request deletion">
        <div className="dac-inner" ref={stepsRef}>

          <div className="dac-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="dac-eyebrow">
                <span className="dac-eyebrow-dot" />
                How to request
              </div>
              <h2 className="dac-heading">
                Five steps to<br />
                <span className="dac-heading-light">delete your account.</span>
              </h2>
            </motion.div>

            <motion.p
              className="dac-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              The entire process takes under a minute. Data is permanently removed within 24 hours of approval.
            </motion.p>
          </div>

          <div className="da-steps">
            {STEPS.map((s, i) => (
              <StepRow key={s.num} s={s} index={i} inView={stepsInView} />
            ))}
          </div>

        </div>
      </section>

      {/* ══ DATA DELETED ══ */}
      <section className="dac-section-white" aria-label="Data deleted">
        <div className="dac-inner" ref={dataRef}>

          <div className="dac-header">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={dataInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div className="dac-eyebrow">
                <span className="dac-eyebrow-dot" />
                Data deletion
              </div>
              <h2 className="dac-heading">
                What gets<br />
                <span className="dac-heading-light">permanently removed.</span>
              </h2>
            </motion.div>

            <motion.p
              className="dac-tagline"
              initial={{ opacity: 0, y: 24 }}
              animate={dataInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
            >
              All data is purged from our database within 24 hours of approval. This action is irreversible.
            </motion.p>
          </div>

          <motion.div
            className="dac-data-card"
            initial={{ opacity: 0, y: 24 }}
            animate={dataInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
          >
            {/* Left — dark panel */}
            <div className="dac-data-left">
              <div className="dac-data-left-eyebrow">
                <span className="dac-data-left-dot" />
                Timeline
              </div>
              <h3 className="dac-data-left-heading">Deleted within<br />24 hours.</h3>
              <p className="dac-data-left-sub">
                Once our team approves your request, all associated data is permanently and irreversibly removed from our systems — no backups retained.
              </p>
            </div>

            {/* Divider */}
            <div className="dac-data-divider" aria-hidden="true" />

            {/* Right — data list + contact */}
            <div className="dac-data-right">
              <div className="dac-data-list">
                {DATA_DELETED.map((item, i) => (
                  <motion.div
                    key={item}
                    className="dac-data-item"
                    initial={{ opacity: 0, x: 14 }}
                    animate={dataInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.38, delay: 0.28 + i * 0.07, ease: EASE }}
                  >
                    <span className="dac-data-item__dot" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="dac-contact-note"
                initial={{ opacity: 0, y: 10 }}
                animate={dataInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.40, delay: 0.52, ease: EASE }}
              >
                <Mail size={16} strokeWidth={1.75} style={{ color: T.teal, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="dac-contact-note__title">Need help?</div>
                  <div className="dac-contact-note__sub">
                    Contact our support team at{' '}
                    <a href="mailto:info@teacherattendance.com">info@teacherattendance.com</a>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}