import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const T = {
  teal:      '#0DB9AC',
  tealLight: '#e0faf8',
  dark:      '#0F1923',
  mid:       '#64748B',
  border:    'rgba(15,25,35,0.08)',
  surface:   '#F8FAFB',
};
const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const EASE   = [0.22, 1, 0.36, 1];

export const FAQS = [
  { q: 'How does attendance verification work?',   a: 'Teachers open the app and pass up to four simultaneous checks: WiFi network match, GPS radius check, unique QR code scan, and live selfie capture — all in under 10 seconds.' },
  { q: 'Can schools use WiFi-only mode?',           a: 'Yes. School admins can independently enable or disable WiFi and QR attendance modes from the settings panel. At least one mode must remain active at all times.' },
  { q: 'How does QR attendance work?',             a: 'The school admin generates a time-limited QR session (1–60 minutes) from the dashboard. Teachers scan it with their camera, capture a live selfie, and attendance is recorded instantly.' },
  { q: 'How does RFID attendance work for students?', a: 'Each student is issued an RFID card linked to their profile. A tap at the gate or classroom reader logs the exact time instantly — no app, no manual marking, and it feeds the same real-time dashboard as staff attendance.' },
  { q: 'Does the app work on iPhone?',             a: 'Yes. The app is built with Expo and works on iOS and Android. Available on the App Store and Google Play — direct APK distribution is also available for Android without the Play Store.' },
  { q: 'Is teacher GPS location continuously tracked?', a: "No. GPS is sampled only at the moment of check-in to confirm the teacher is within the school's configured radius. Location is never stored or tracked beyond that single verification." },
  { q: 'Can multiple schools use the same platform?', a: 'Yes. The platform is fully multi-tenant. Each school has isolated data, its own admin, and its own subscription plan. A Super Admin oversees all schools from one platform dashboard.' },
  { q: 'What happens if a teacher changes device?', a: 'The teacher notifies their school admin, who resets the device session from the dashboard. On next login from the new device, a new device ID is registered automatically.' },
  { q: 'Is there a trial period?',                 a: 'Yes — every school gets a 3-month free trial of the full platform. After that, it\'s a flat $200/month per school. See the Pricing page for details.' },
  { q: 'Can I manage admissions and inquiries on the platform?', a: 'Yes. Parent inquiries and admission leads are tracked through a guided workflow, with follow-up reminders, right through to enrollment.' },
  { q: 'Does the platform handle fee collection?', a: 'Yes. Schools can set up fee structures, accept online payments, auto-generate invoices, send reminders, and track outstanding balances per student.' },
  { q: 'How does student safety tracking work?',   a: 'RFID cards log every entry and exit at the gate. Parents get an instant push or SMS notification when their child arrives, leaves, or is flagged for a late arrival or early departure.' },
  { q: 'What makes this a full 360° school management system?', a: 'One dashboard runs admissions, academics, staff and student attendance (GPS, WiFi, QR, RFID), fees, exams, parent communication, and reporting — replacing a stack of disconnected spreadsheets and tools with a single connected platform.' },
  { q: 'Does the platform manage more than attendance?', a: 'Yes. TeacherAttendance is a complete 360° school management system covering administration, admissions, academics, attendance, student management, staff management, fees, communication, and reporting.' },
];

export function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07, ease: EASE }}
      onClick={() => setOpen(v => !v)}
      style={{
        borderBottom: `0.5px solid ${T.border}`,
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Header row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 0',
      }}>
        <h3 style={{
          fontFamily: MELODY,
          fontSize: 'clamp(14px, 1.4vw, 16px)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          color: T.dark,
          margin: 0,
          lineHeight: 1.35,
          flex: 1,
        }}>
          {q}
        </h3>

        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          style={{
            width: 28, height: 28,
            borderRadius: 8,
            border: `0.5px solid ${open ? T.teal : T.border}`,
            background: open ? T.tealLight : T.surface,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: open ? T.teal : T.mid,
            flexShrink: 0,
            transition: 'background 0.18s, border-color 0.18s, color 0.18s',
          }}
        >
          <Plus size={13} strokeWidth={2} />
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: INTER,
              fontSize: 'clamp(13px, 1.3vw, 14px)',
              lineHeight: 1.75,
              color: T.mid,
              margin: 0,
              paddingBottom: 20,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      style={{ fontFamily: INTER, background: T.surface, overflowX: 'hidden' }}
    >
      <style>{`
        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }
        .faq-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 80px;
          align-items: start;
        }
        .faq-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 40px;
          padding: 0 18px;
          border-radius: 10px;
          background: ${T.dark};
          color: #fff;
          font-family: ${INTER};
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: background 0.18s, transform 0.14s;
          margin-top: 28px;
          width: fit-content;
        }
        .faq-cta-btn:hover  { background: #1a2837; transform: translateY(-1px); }
        .faq-cta-btn:active { transform: scale(0.98); }

        @media (max-width: 860px) {
          .faq-layout { grid-template-columns: 1fr; gap: 40px; }
          .faq-left   { position: static !important; }
        }
      `}</style>

      <div className="faq-inner">
        <div className="faq-layout">

          {/* Left — sticky heading + CTA */}
          <div ref={ref} className="faq-left" style={{ position: 'sticky', top: 40 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: T.teal, marginBottom: 14,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.teal, flexShrink: 0 }} />
                FAQ
              </div>

              <h2 style={{
                fontFamily: MELODY,
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 0.95,
                color: T.dark,
                margin: '0 0 20px',
              }}>
                Frequently<br />
                <span style={{ fontWeight: 300, color: T.mid, letterSpacing: '-0.02em' }}>
                  asked questions.
                </span>
              </h2>

              <p style={{
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                lineHeight: 1.75,
                color: T.mid,
                margin: 0,
              }}>
                Everything you need to know about TeacherAttendance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.14, ease: EASE }}
              whileHover={{ y: -2 }}
              style={{ display: 'inline-block' }}
            >
              <Link to="/contact" className="faq-cta-btn">
                Still have questions? Contact us
              </Link>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div style={{ paddingTop: 4 }}>
            <div style={{ borderTop: `0.5px solid ${T.border}` }}>
              {FAQS.map((f, i) => (
                <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}