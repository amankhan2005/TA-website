import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Wifi, MapPin, QrCode, Camera,
  Smartphone, ClipboardList, Lock, Building2, Activity,
} from 'lucide-react';

/* ── Design tokens — same as Hero & Stats ── */
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

const FEATURES = [
  { icon: Wifi,          title: 'WiFi Attendance',        desc: 'SSID and gateway IP verified in real time. Attendance only works inside the school\'s authorized network.' },
  { icon: MapPin,        title: 'GPS Verification',        desc: 'Haversine GPS radius check (50–1000m configurable). Mock GPS and VPN spoofing detected and blocked.' },
  { icon: QrCode,        title: 'QR Check-In',             desc: 'Cryptographically unique expiring QR sessions — auto-invalidate after 1–60 minutes. No reuse possible.' },
  { icon: Camera,        title: 'Selfie Authentication',   desc: 'Live selfie captured on every QR check-in and stored securely. Eliminates proxy attendance completely.' },
  { icon: Smartphone,    title: 'Device Validation',       desc: 'One teacher, one trusted device. Registered on first login. Suspicious device changes flagged instantly.' },
  { icon: ClipboardList, title: 'Audit Logs',              desc: '365-day immutable event log for every action with IP tracking and built-in suspicious activity detection.' },
  { icon: Lock,          title: 'Enterprise Security',     desc: 'bcrypt hashing, JWT auth, rate limiting, helmet.js headers, and role-based access control throughout.' },
  { icon: Building2,     title: 'Multi-School Management', desc: 'One Super Admin manages unlimited schools with isolated data, settings, and subscription plans.' },
  { icon: Activity,      title: 'Real-Time Dashboard',     desc: 'Admin dashboard refreshes live. See present, absent, and flagged teachers the moment they mark in.' },
];

/* ── Individual card ── */
function Card({ f, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const Icon   = f.icon;

  return (
    <motion.div
      ref={ref}
      className="feat-card"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: EASE } }}
    >
      <div className="feat-card__icon">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <h3 className="feat-card__title">{f.title}</h3>
      <p className="feat-card__desc">{f.desc}</p>
    </motion.div>
  );
}

/* ── Section ── */
export default function Features() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-48px 0px' });

  return (
    <section
      id="features"
      ref={ref}
      aria-label="Features"
      style={{ fontFamily: INTER, background: '#fff', overflowX: 'hidden' }}
    >
      <style>{`
        .feat-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* ── Header — same two-column layout as Stats ── */
        .feat-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .feat-eyebrow {
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
        .feat-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .feat-heading {
          font-family: ${MELODY};
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: ${T.dark};
          margin: 0;
        }
        .feat-heading-light {
          font-weight: 300;
          color: ${T.mid};
          letter-spacing: -0.02em;
        }
        .feat-tagline {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 300px;
          text-align: right;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── 3-column card grid ── */
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 16px;
          overflow: hidden;
        }

        /* ── Card ── */
        .feat-card {
          background: #fff;
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: default;
          transition: background 0.18s;
        }
        .feat-card:hover { background: ${T.tealLight}; }

        .feat-card__icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: ${T.cardBg};
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.teal};
          margin-bottom: 4px;
          flex-shrink: 0;
          transition: background 0.18s, border-color 0.18s;
        }
        .feat-card:hover .feat-card__icon {
          background: #fff;
          border-color: rgba(13,185,172,0.25);
        }

        .feat-card__title {
          font-family: ${MELODY};
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0;
          line-height: 1.2;
        }
        .feat-card__desc {
          font-size: 13.5px;
          line-height: 1.72;
          color: ${T.mid};
          margin: 0;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .feat-grid { grid-template-columns: repeat(2, 1fr); }
          .feat-header { flex-direction: column; align-items: flex-start; }
          .feat-tagline { text-align: left; max-width: 100%; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .feat-grid { grid-template-columns: 1fr; border-radius: 12px; }
          .feat-card { padding: 22px 20px 26px; }
        }
      `}</style>

      <div className="feat-inner">

        {/* ── Section header ── */}
        <div className="feat-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0, ease: EASE }}
          >
            <div className="feat-eyebrow">
              <span className="feat-eyebrow-dot" />
              Teacher & attendance module
            </div>
            <h2 className="feat-heading">
              Every layer<br />
              <span className="feat-heading-light">closes a loophole.</span>
            </h2>
          </motion.div>

          <motion.p
            className="feat-tagline"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            One module inside the full school management system — each feature independently eliminates a different attendance fraud vector.
          </motion.p>
        </div>

        {/* ── Card grid ── */}
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <Card key={f.title} f={f} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}