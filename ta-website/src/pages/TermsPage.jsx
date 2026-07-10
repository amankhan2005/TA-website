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
  { title: '1. Acceptance of Terms',      content: 'By accessing or using liberiaschoolhub.com ("the Platform"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Platform.' },
  { title: '2. Description of Service',   content: 'liberiaschoolhub.com is a multi-tenant SaaS school management platform providing administration, admissions, academics, GPS/WiFi/QR/selfie/RFID-verified attendance, student management, fee management, parent communication, and reporting for schools. The platform includes a mobile app, school admin dashboard, and super admin panel.' },
  { title: '3. Account Registration',     content: 'School administrators must register with accurate information. You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized use of your account.' },
  { title: '4. Acceptable Use',           content: `You agree not to:\n• Attempt to bypass or defeat any verification mechanism\n• Provide false attendance records or assist teachers in doing so\n• Access accounts belonging to other schools or users\n• Attempt to reverse engineer, decompile, or extract source code\n• Use the platform for any unlawful purpose\n• Overload or DDoS the platform infrastructure` },
  { title: '5. Data Ownership',           content: 'Schools retain ownership of their attendance, student, staff, and fee data. liberiaschoolhub.com is a data processor acting on behalf of each school. We do not claim ownership of school data and will not use it for purposes beyond platform operation.' },
  { title: '6. Subscription and Payment', content: 'Access to the platform is subject to an active subscription plan. Pricing is agreed upon at the time of onboarding. We reserve the right to suspend access for non-payment after reasonable notice.' },
  { title: '7. Service Availability',     content: 'We target 99.9% uptime. Scheduled maintenance will be communicated in advance. We are not liable for downtime caused by internet service providers, third-party services, or force majeure events.' },
  { title: '8. Termination',              content: 'Either party may terminate the agreement with 30 days written notice. Upon termination, we will provide a data export and delete all school data within 30 days, unless legally required to retain it.' },
  { title: '9. Limitation of Liability',  content: "liberiaschoolhub.com's liability is limited to the amount paid by the school in the 12 months preceding the claim. We are not liable for indirect, consequential, or punitive damages." },
  { title: '10. Governing Law',           content: 'These Terms are governed by the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of Kenyan courts.' },
  { title: '11. Changes to Terms',        content: 'We may update these Terms at any time. We will notify users of material changes 14 days before they take effect. Continued use constitutes acceptance.' },
  { title: '12. Contact',                 content: 'For terms-related questions: info@liberiaschoolhub.com.com' },
];

function renderContent(content) {
  return content.split('\n').map((line, j) => {
    if (!line.trim()) return null;
    if (line.startsWith('•')) {
      return <p key={j} className="tp-bullet">{line}</p>;
    }
    return <p key={j}>{line}</p>;
  });
}

function Section({ s, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  return (
    <motion.div
      ref={ref}
      className="tp-section"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: EASE }}
    >
      <h2 className="tp-section__title">{s.title}</h2>
      <div className="tp-section__body">{renderContent(s.content)}</div>
    </motion.div>
  );
}

export default function TermsPage() {
  const heroRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        /* ══ HERO ══ */
        .tp-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .tp-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tp-eyebrow {
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
        .tp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .tp-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 20px;
        }
        .tp-hero-date {
          font-size: 14px;
          color: ${T.mid};
          margin: 0;
        }

        /* ══ CONTENT ══ */
        .tp-content-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }
        .tp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        /* Two-col: TOC left, content right */
        .tp-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 72px;
          align-items: start;
        }

        /* TOC */
        .tp-toc {
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
        .tp-toc-item {
          background: #fff;
          padding: 10px 14px;
          font-size: 12px;
          font-weight: 600;
          color: ${T.mid};
          line-height: 1.4;
          transition: background 0.15s, color 0.15s;
          cursor: default;
        }
        .tp-toc-item:hover {
          background: #e0faf8;
          color: ${T.dark};
        }

        /* Sections */
        .tp-body {
          display: flex;
          flex-direction: column;
        }
        .tp-section {
          padding: 32px 0;
          border-bottom: 0.5px solid ${T.border};
        }
        .tp-section:first-child { padding-top: 0; }
        .tp-section:last-child  { border-bottom: none; }

        .tp-section__title {
          font-family: ${MELODY};
          font-size: clamp(16px, 1.6vw, 20px);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0 0 16px;
          line-height: 1.2;
        }
        .tp-section__body p {
          font-size: 14px;
          line-height: 1.8;
          color: ${T.mid};
          margin: 0 0 10px;
        }
        .tp-section__body p:last-child { margin-bottom: 0; }
        .tp-bullet { padding-left: 8px; }

        /* Tablet */
        @media (max-width: 900px) {
          .tp-layout { grid-template-columns: 1fr; gap: 40px; }
          .tp-toc    { position: static; }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .tp-hero-inner { text-align: left; align-items: flex-start; }
          .tp-toc        { display: none; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="tp-hero" aria-label="Terms hero">
        <div className="tp-hero-inner" ref={heroRef}>

          <motion.div
            className="tp-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="tp-eyebrow-dot" />
            Legal
          </motion.div>

          <motion.h1
            className="tp-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Terms & Conditions
          </motion.h1>

          <motion.p
            className="tp-hero-date"
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.20, ease: EASE }}
          >
            Last updated: June 2026
          </motion.p>

        </div>
      </section>

      {/* ══ CONTENT ══ */}
      <section className="tp-content-section" aria-label="Terms content">
        <div className="tp-inner">
          <div className="tp-layout">

            {/* TOC */}
            <nav className="tp-toc" aria-label="Table of contents">
              {SECTIONS.map(s => (
                <div key={s.title} className="tp-toc-item">{s.title}</div>
              ))}
            </nav>

            {/* Sections */}
            <div className="tp-body">
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