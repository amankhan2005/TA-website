import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

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

export const FAQS = [
  { q: 'How does attendance verification work?',    a: 'Teachers open the app and pass up to four simultaneous checks: WiFi network match, GPS radius check, unique QR code scan, and live selfie capture — all in under 10 seconds.' },
  { q: 'How does RFID attendance work for students?', a: 'Each student carries an RFID card. A tap at the gate or classroom reader logs the exact time instantly — no app, no manual marking — and shows up live on the admin dashboard.' },
   { q: 'How does QR attendance work?',              a: 'The school admin generates a time-limited QR session (1–60 minutes) from the dashboard. Teachers scan it with their camera, capture a live selfie, and attendance is recorded instantly.' },
   { q: 'Is teacher GPS location continuously tracked?', a: "No. GPS is sampled only at the moment of check-in to confirm the teacher is within the school's configured radius. Location is never stored or tracked beyond that single verification." },
   { q: 'Is there a free trial?',                        a: 'Yes — every school gets a 3-month free trial of the full platform. After that, it\'s a flat $200/month per school with no setup fees.' },
  ];

/* ── Individual FAQ item ── */
export function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-32px 0px' });

  return (
    <motion.div
      ref={ref}
      className={`faq-item${open ? ' faq-item--open' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07, ease: EASE }}
      onClick={() => setOpen(v => !v)}
    >
      <div className="faq-item__header">
        <h3 className="faq-item__q">{q}</h3>
        <motion.div
          className="faq-item__icon"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          {open ? <Minus size={13} strokeWidth={2} /> : <Plus size={13} strokeWidth={2} />}
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <p className="faq-item__a">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Section ── */
export default function FAQ() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="faq"
      ref={ref}
      aria-label="Frequently Asked Questions"
      style={{ fontFamily: INTER, background: '#fff', overflowX: 'hidden' }}
    >
      <style>{`
        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Section header ── */
        .faq-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .faq-eyebrow {
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
        .faq-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .faq-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .faq-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .faq-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 300px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── Two-column grid ── */
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
          align-items: stretch;
        }

        /* ── Left sticky panel ── */
        .faq-left {
          background: #fff;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .faq-left-sub {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
          margin: 0 0 28px;
        }
        .faq-left-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${T.teal};
          margin-bottom: 12px;
        }
        .faq-left-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .faq-left-title {
          font-family: ${MELODY};
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1;
          color: ${T.dark};
          margin: 0 0 14px;
        }
        .faq-left-title span {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .faq-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 40px;
          padding: 0 18px;
          border-radius: 9px;
          background: ${T.dark};
          color: #fff;
          font-family: ${INTER};
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          width: fit-content;
          transition: background 0.18s, transform 0.14s;
          margin-top: auto;
        }
        .faq-contact-btn:hover  { background: #1a2837; transform: translateY(-1px); }
        .faq-contact-btn:active { transform: scale(0.98); }

        /* ── FAQ list ── */
        .faq-list {
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
        }

        /* ── FAQ item ── */
        .faq-item {
          background: #fff;
          padding: 20px 24px;
          cursor: pointer;
          user-select: none;
          transition: background 0.16s;
        }
        .faq-item:hover        { background: ${T.tealLight}; }
        .faq-item--open        { background: ${T.tealLight}; }

        .faq-item__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .faq-item__q {
          font-family: ${MELODY};
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.3;
        }
        .faq-item__icon {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          flex-shrink: 0;
          transition: background 0.16s, border-color 0.16s;
        }
        .faq-item--open .faq-item__icon {
          background: #fff;
          border-color: rgba(13,185,172,0.25);
        }
        .faq-item__a {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
          margin: 12px 0 0;
          padding-right: 44px;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr; }
          .faq-header { flex-direction: column; align-items: flex-start; }
          .faq-tagline { text-align: left; max-width: 100%; }
          .faq-left { padding-bottom: 28px; }
          .faq-contact-btn { margin-top: 20px; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .faq-grid { border-radius: 12px; }
          .faq-left { padding: 24px 20px; }
          .faq-item { padding: 18px 20px; }
          .faq-item__a { padding-right: 0; }
        }
      `}</style>

      <div className="faq-inner">

        {/* ── Header ── */}
        <div className="faq-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: EASE }}
          >
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-dot" />
              FAQ
            </div>
            <h2 className="faq-heading">
              Common questions<br />
              <span className="faq-heading-light">answered.</span>
            </h2>
          </motion.div>

          <motion.p
            className="faq-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Everything you need to know about liberiaschoolhub.com.
          </motion.p>
        </div>

        {/* ── Two-column grid ── */}
        <motion.div
          className="faq-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
        >
          {/* Left panel */}
          <div className="faq-left">
            <div className="faq-left-eyebrow">
              <span className="faq-left-dot" />
              Got questions?
            </div>
            <h3 className="faq-left-title">
              Frequently asked<br />
              <span>questions.</span>
            </h3>
            <p className="faq-left-sub">
              Can't find what you're looking for? Our team is happy to help — reach out directly.
            </p>
            <motion.div whileHover={{ y: -2, transition: { duration: 0.2, ease: EASE } }}>
              <Link to="/contact" className="faq-contact-btn">
                Still have questions? →
              </Link>
            </motion.div>
          </div>

          {/* FAQ list */}
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}