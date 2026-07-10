import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Smartphone, Shield, Scale } from 'lucide-react';
import axios from 'axios';

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

/* ── API logic — unchanged ── */
const API_BASE  = import.meta.env.VITE_API_URL || 'https://api.teacherattendance.com';
export const COUNTRIES = ['Kenya','Uganda','Tanzania','Rwanda','Ethiopia','Nigeria','Ghana','South Africa','Zambia','Zimbabwe','Mozambique','Malawi','Other'];
export const T_RANGES  = ['1–20 staff','21–60 staff','61–200 staff','200+ staff'];
export const INIT_FORM = { schoolName:'', contactPerson:'', email:'', phone:'', country:'', teacherCount:'', message:'' };

export function validate(form) {
  const e = {};
  if (!form.schoolName.trim())    e.schoolName    = 'School name is required';
  if (!form.contactPerson.trim()) e.contactPerson = 'Contact person name is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address';
  if (!form.phone.trim())         e.phone         = 'Phone number is required';
  if (!form.country)              e.country       = 'Please select your country';
  if (!form.teacherCount)         e.teacherCount  = 'Please select staff count';
  return e;
}

export async function submitInquiry(form) {
  const count = parseInt(form.teacherCount.match(/\d+/)?.[0] || '20');
  await axios.post(`${API_BASE}/api/inquiries`, {
    schoolName:    form.schoolName.trim(),
    contactPerson: form.contactPerson.trim(),
    email:         form.email.trim(),
    phone:         form.phone.trim(),
    country:       form.country,
    teacherCount:  count,
    message:       form.message.trim(),
  });
}

/* ── Trust items ── */
const TRUST_ITEMS = [
  { icon: Scale,      title: 'Any school size',      sub: '10 to 500+ staff — platform scales with you'  },
  { icon: Clock,      title: 'Setup in 48 hours',    sub: 'Our team onboards your school within two days'    },
  { icon: Shield,     title: 'Data stays in Africa', sub: 'MongoDB Atlas Africa region — data sovereignty'   },
  { icon: Smartphone, title: 'APK distribution',     sub: 'No App Store required for Android deployment'     },
];

/* ── Form field wrapper ── */
export function FormField({ id, label, required, error, children }) {
  return (
    <div className="iq-field">
      <label className={`iq-label${required ? ' iq-label--req' : ''}`} htmlFor={id}>{label}</label>
      {children}
      {error && <span className="iq-field-err" role="alert">{error}</span>}
    </div>
  );
}

/* ── Demo form card ── */
export function DemoFormCard({ compact = false }) {
  const [form, setForm]     = useState(INIT_FORM);
  const [errs, setErrs]     = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiErr, setApiErr]   = useState('');

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async ev => {
    ev.preventDefault();
    const e = validate(form);
    setErrs(e);
    if (Object.keys(e).length) return;
    setLoading(true); setApiErr('');
    try {
      await submitInquiry(form);
      setSuccess(true);
    } catch (err) {
      setApiErr(err?.response?.data?.message || 'Something went wrong. Please try again.');
    } finally { setLoading(false); }
  };

  return (
    <div className="iq-form-card">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div key="success"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="iq-success"
          >
            <motion.div
              animate={{ scale: [0.8, 1.1, 1] }}
              transition={{ duration: 0.5 }}
              className="iq-success__icon"
            >
              <CheckCircle size={28} strokeWidth={1.5} />
            </motion.div>
            <h3 className="iq-success__title">Thanks! We'll be in touch.</h3>
            <p className="iq-success__sub">Our team will contact you within 24 hours to schedule your demo and onboarding.</p>
            <div className="iq-success__next">
              <p className="iq-success__next-label">What happens next?</p>
              <div className="iq-success__steps">
                {['Demo call scheduled within 24 hours','School account created in 48 hours','Staff onboarded with the app','Live attendance from day one'].map(s => (
                  <div key={s} className="iq-success__step">
                    <span className="iq-success__step-dot" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} noValidate>
            <p className="iq-form-title">Request a Demo</p>
            <p className="iq-form-sub">Tell us about your school — we respond in 24 hours.</p>

            {apiErr && (
              <div className="iq-api-err" role="alert">{apiErr}</div>
            )}

            <div className="iq-rows">
              <div className="iq-row-2">
                <FormField id="schoolName" label="School Name" required error={errs.schoolName}>
                  <input id="schoolName" className={`iq-input${errs.schoolName ? ' iq-input--err' : ''}`}
                    placeholder="Nairobi High School" value={form.schoolName} onChange={set('schoolName')} />
                </FormField>
                <FormField id="contactPerson" label="Contact Person" required error={errs.contactPerson}>
                  <input id="contactPerson" className={`iq-input${errs.contactPerson ? ' iq-input--err' : ''}`}
                    placeholder="James Mwangi" value={form.contactPerson} onChange={set('contactPerson')} />
                </FormField>
              </div>
              <div className="iq-row-2">
                <FormField id="email" label="School Email" required error={errs.email}>
                  <input id="email" type="email" className={`iq-input${errs.email ? ' iq-input--err' : ''}`}
                    placeholder="admin@school.ac.ke" value={form.email} onChange={set('email')} />
                </FormField>
                <FormField id="phone" label="Phone Number" required error={errs.phone}>
                  <input id="phone" type="tel" className={`iq-input${errs.phone ? ' iq-input--err' : ''}`}
                    placeholder="+254 7XX XXX XXX" value={form.phone} onChange={set('phone')} />
                </FormField>
              </div>
              <div className="iq-row-2">
                <FormField id="country" label="Country" required error={errs.country}>
                  <select id="country" className={`iq-input${errs.country ? ' iq-input--err' : ''}`}
                    value={form.country} onChange={set('country')}>
                    <option value="">Select country</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </FormField>
                <FormField id="teacherCount" label="Number of Staff / Teachers" required error={errs.teacherCount}>
                  <select id="teacherCount" className={`iq-input${errs.teacherCount ? ' iq-input--err' : ''}`}
                    value={form.teacherCount} onChange={set('teacherCount')}>
                    <option value="">Select range</option>
                    {T_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </FormField>
              </div>
              <FormField id="message" label="Message / Requirements">
                <textarea id="message" className="iq-input iq-textarea"
                  placeholder="Tell us about your school's needs…"
                  value={form.message} onChange={set('message')} />
              </FormField>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="iq-submit"
              whileHover={loading ? {} : { y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ animation: 'iq-spin 0.8s linear infinite' }}>
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity=".25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  Sending…
                </>
              ) : 'Request School Demo →'}
            </motion.button>

            <p className="iq-note">
              We respond within 24 hours · No spam · <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Section ── */
export default function InquiryForm() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Request a Demo"
      style={{ fontFamily: INTER, background: '#F8FAFB', overflowX: 'hidden' }}
    >
      <style>{`
        .iq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Section header ── */
        .iq-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .iq-eyebrow {
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
        .iq-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .iq-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .iq-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .iq-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 300px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── Two-column content grid ── */
        .iq-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
          align-items: stretch;
        }

        /* ── Left — trust panel ── */
        .iq-left {
          background: #fff;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .iq-left-intro {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
          margin-bottom: 28px;
        }

        /* ── Trust items ── */
        .iq-trust-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 12px;
          overflow: hidden;
        }
        .iq-trust-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          background: #fff;
          transition: background 0.16s;
        }
        .iq-trust-item:hover { background: ${T.tealLight}; }
        .iq-trust-icon {
          width: 34px; height: 34px;
          border-radius: 9px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          flex-shrink: 0;
          transition: background 0.16s, border-color 0.16s;
        }
        .iq-trust-item:hover .iq-trust-icon {
          background: #fff;
          border-color: rgba(13,185,172,0.25);
        }
        .iq-trust-title {
          font-family: ${MELODY};
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: ${T.dark};
          line-height: 1.2;
          margin-bottom: 2px;
        }
        .iq-trust-sub {
          font-size: 12px;
          color: ${T.mid};
          line-height: 1.5;
        }

        /* ── Right — form card ── */
        .iq-form-card {
          background: #fff;
          padding: 36px 32px;
        }
        .iq-form-title {
          font-family: ${MELODY};
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.dark};
          margin: 0 0 6px;
          line-height: 1.15;
        }
        .iq-form-sub {
          font-size: 13.5px;
          color: ${T.mid};
          line-height: 1.6;
          margin: 0 0 24px;
        }

        /* ── API error ── */
        .iq-api-err {
          font-size: 13px;
          color: #b91c1c;
          background: #fef2f2;
          border: 0.5px solid #fecaca;
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 16px;
        }

        /* ── Form layout ── */
        .iq-rows { display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px; }
        .iq-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        /* ── Field ── */
        .iq-field { display: flex; flex-direction: column; gap: 5px; }
        .iq-label {
          font-size: 12px;
          font-weight: 600;
          color: ${T.dark};
          letter-spacing: 0.01em;
        }
        .iq-label--req::after { content: ' *'; color: ${T.teal}; }
        .iq-field-err { font-size: 11.5px; color: #b91c1c; }

        /* ── Input / select / textarea ── */
        .iq-input {
          height: 38px;
          padding: 0 12px;
          border-radius: 8px;
          border: 0.5px solid ${T.border};
          background: #F8FAFB;
          font-family: ${INTER};
          font-size: 13.5px;
          color: ${T.dark};
          outline: none;
          transition: border-color 0.15s, background 0.15s;
          width: 100%;
          box-sizing: border-box;
          appearance: none;
        }
        .iq-input:focus {
          border-color: ${T.teal};
          background: #fff;
        }
        .iq-input--err { border-color: #fca5a5; background: #fef2f2; }
        .iq-textarea {
          height: 88px;
          padding: 10px 12px;
          resize: none;
        }

        /* ── Submit ── */
        .iq-submit {
          width: 100%;
          height: 46px;
          border-radius: 10px;
          background: ${T.dark};
          color: #fff;
          font-family: ${INTER};
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.18s;
          margin-bottom: 12px;
        }
        .iq-submit:hover:not(:disabled) { background: #1a2837; }
        .iq-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .iq-note {
          font-size: 12px;
          color: ${T.mid};
          text-align: center;
          margin: 0;
        }
        .iq-note a { color: ${T.teal}; text-decoration: none; }
        .iq-note a:hover { text-decoration: underline; }

        /* ── Spinner ── */
        @keyframes iq-spin { to { transform: rotate(360deg); } }

        /* ── Success state ── */
        .iq-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
          padding: 24px 0;
        }
        .iq-success__icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: ${T.tealLight};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          margin-bottom: 4px;
        }
        .iq-success__title {
          font-family: ${MELODY};
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${T.dark};
          margin: 0;
        }
        .iq-success__sub {
          font-size: 13.5px;
          color: ${T.mid};
          line-height: 1.7;
          max-width: 320px;
          margin: 0;
        }
        .iq-success__next {
          width: 100%;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          border-radius: 10px;
          padding: 16px 20px;
          text-align: left;
          margin-top: 4px;
        }
        .iq-success__next-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: ${T.teal};
          margin: 0 0 10px;
        }
        .iq-success__steps { display: flex; flex-direction: column; gap: 8px; }
        .iq-success__step {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: ${T.dark};
        }
        .iq-success__step-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .iq-grid { grid-template-columns: 1fr; }
          .iq-header { flex-direction: column; align-items: flex-start; }
          .iq-tagline { text-align: left; max-width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .iq-grid { border-radius: 12px; }
          .iq-left, .iq-form-card { padding: 24px 20px; }
          .iq-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="iq-inner">

        {/* ── Header ── */}
        <div className="iq-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: EASE }}
          >
            <div className="iq-eyebrow">
              <span className="iq-eyebrow-dot" />
              Get started
            </div>
            <h2 className="iq-heading">
              Bring TeacherAttendance<br />
              <span className="iq-heading-light">to your school.</span>
            </h2>
          </motion.div>

          <motion.p
            className="iq-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Join schools using secure, GPS-verified attendance. Our team responds within 24 hours.
          </motion.p>
        </div>

        {/* ── Two-column grid ── */}
        <motion.div
          className="iq-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
        >
          {/* Left — trust panel */}
          <div className="iq-left">
            <p className="iq-left-intro">
              Every design decision was made to give administrators accurate, tamper-proof attendance data.
            </p>
            <div className="iq-trust-list">
              {TRUST_ITEMS.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={t.title}
                    className="iq-trust-item"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.26 + i * 0.08, ease: EASE }}
                  >
                    <div className="iq-trust-icon">
                      <Icon size={16} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="iq-trust-title">{t.title}</div>
                      <div className="iq-trust-sub">{t.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.14, ease: EASE }}
          >
            <DemoFormCard />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}