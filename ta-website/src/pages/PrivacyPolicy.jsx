import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const T = {
  teal:   '#0DB9AC',
  dark:   '#0F1923',
  mid:    '#64748B',
  border: 'rgba(15,25,35,0.08)',
};
const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const EASE   = [0.22, 1, 0.36, 1];

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: `We collect information necessary to operate the TeacherAttendance platform:

• **Account Information:** School name, admin name, email address, and phone number provided during registration.
• **Teacher Data:** Teacher names, email addresses, and device identifiers registered by school administrators.
• **Attendance Records:** Check-in timestamps, GPS coordinates (captured at the moment of check-in only), WiFi network identifiers, and selfie images.
• **Device Information:** Device ID, operating system version, and app version for security and support purposes.
• **Audit Logs:** All platform actions are logged with IP addresses and timestamps for security and accountability.`
  },
  {
    title: '2. How We Use Your Information',
    content: `We use collected information to:

• Provide and operate the attendance verification service
• Detect and prevent attendance fraud (proxy check-ins, GPS spoofing, VPN usage)
• Generate attendance reports and analytics for school administrators
• Send transactional emails (account setup, notifications, alerts)
• Maintain platform security and investigate suspicious activity
• Improve platform features and performance`
  },
  {
    title: '3. Data Storage & Location',
    content: `All data is stored on MongoDB Atlas using Africa-region clusters. Selfie images are stored via Cloudinary on their Africa CDN edge nodes. We do not transfer personal data outside Africa without explicit consent.

Data is retained for a maximum of 365 days for audit logs and attendance records, after which records are archived. School administrators can request earlier deletion.`
  },
  {
    title: '4. GPS & Location Data',
    content: `We capture GPS coordinates only at the moment of attendance check-in. Location is used solely to verify that the teacher is within the school's configured radius. We do not:

• Track teacher location continuously
• Store location history beyond the check-in record
• Share location data with third parties

The GPS radius is configured by each school administrator and is used only for on-premises verification.`
  },
  {
    title: '5. Data Sharing',
    content: `We do not sell, rent, or share personal data with third parties for marketing purposes. We may share data with:

• **Within your school:** School administrators can view all data for teachers under their account.
• **Super Administrators:** Platform operators can view aggregated analytics (not personal teacher data) for system management.
• **Legal obligations:** We may disclose data if required by law or to prevent fraud and abuse.`
  },
  {
    title: '6. Security',
    content: `We implement enterprise-grade security measures including bcrypt password hashing, JWT-based authentication, rate limiting, HTTPS encryption in transit, helmet.js security headers, and immutable audit logging. Selfie images are stored with restricted access controls.`
  },
  {
    title: '7. Your Rights',
    content: `You have the right to access your personal data, request corrections, and request deletion (subject to legal retention requirements). To exercise these rights, contact info@teacherattendance.com. School administrators can delete teacher accounts directly from the dashboard.`
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy periodically. We will notify school administrators of material changes via email at least 14 days before changes take effect. Continued use of the platform after changes constitutes acceptance.`
  },
  {
    title: '9. Contact',
    content: `For privacy-related questions, contact us at: info@teacherattendance.com`
  },
];

function renderContent(content) {
  return content.split('\n').map((line, j) => {
    if (!line.trim()) return null;
    const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    if (line.startsWith('•')) {
      return (
        <p key={j}
          className="pp-bullet"
          dangerouslySetInnerHTML={{ __html: '• ' + html.slice(1) }}
        />
      );
    }
    return <p key={j} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

function Section({ s, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  return (
    <motion.div
      ref={ref}
      className="pp-section"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: EASE }}
    >
      <h2 className="pp-section__title">{s.title}</h2>
      <div className="pp-section__body">{renderContent(s.content)}</div>
    </motion.div>
  );
}

export default function PrivacyPolicy() {
  const heroRef  = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        /* ══ HERO ══ */
        .pp-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .pp-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pp-eyebrow {
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
        .pp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .pp-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 20px;
        }
        .pp-hero-date {
          font-size: 14px;
          color: ${T.mid};
          margin: 0;
        }

        /* ══ CONTENT ══ */
        .pp-content-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }
        .pp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* Two-col: TOC left, content right */
        .pp-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 72px;
          align-items: start;
        }

        /* ── TOC ── */
        .pp-toc {
          position: sticky;
          top: 40px;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${T.border};
          border: 0.5px solid ${T.border};
          border-radius: 12px;
          overflow: hidden;
        }
        .pp-toc-item {
          background: #fff;
          padding: 10px 14px;
          font-size: 12px;
          font-weight: 600;
          color: ${T.mid};
          line-height: 1.4;
          transition: background 0.15s, color 0.15s;
          cursor: default;
        }
        .pp-toc-item:hover {
          background: #e0faf8;
          color: ${T.dark};
        }

        /* ── Sections ── */
        .pp-body {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .pp-section {
          padding: 32px 0;
          border-bottom: 0.5px solid ${T.border};
        }
        .pp-section:first-child { padding-top: 0; }
        .pp-section:last-child  { border-bottom: none; }

        .pp-section__title {
          font-family: ${MELODY};
          font-size: clamp(16px, 1.6vw, 20px);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0 0 16px;
          line-height: 1.2;
        }
        .pp-section__body p {
          font-size: 14px;
          line-height: 1.8;
          color: ${T.mid};
          margin: 0 0 10px;
        }
        .pp-section__body p:last-child { margin-bottom: 0; }
        .pp-section__body strong { color: ${T.dark}; font-weight: 600; }

        .pp-bullet {
          padding-left: 8px;
          position: relative;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .pp-layout { grid-template-columns: 1fr; gap: 40px; }
          .pp-toc    { position: static; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .pp-hero-inner { text-align: left; align-items: flex-start; }
          .pp-toc        { display: none; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="pp-hero" aria-label="Privacy Policy hero">
        <div className="pp-hero-inner" ref={heroRef}>

          <motion.div
            className="pp-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="pp-eyebrow-dot" />
            Legal
          </motion.div>

          <motion.h1
            className="pp-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="pp-hero-date"
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.20, ease: EASE }}
          >
            Last updated: June 2026
          </motion.p>

        </div>
      </section>

      {/* ══ CONTENT ══ */}
      <section className="pp-content-section" aria-label="Privacy Policy content">
        <div className="pp-inner">
          <div className="pp-layout">

            {/* TOC — sticky left */}
            <nav className="pp-toc" aria-label="Table of contents">
              {SECTIONS.map(s => (
                <div key={s.title} className="pp-toc-item">
                  {s.title}
                </div>
              ))}
            </nav>

            {/* Sections — right */}
            <div className="pp-body">
              {SECTIONS.map((s, i) => (
                <Section key={s.title} s={s} index={i} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}