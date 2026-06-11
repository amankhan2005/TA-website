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
  { title: '1. What Are Cookies',       content: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.' },
  { title: '2. Cookies We Use',         content: `**Essential Cookies**\nThese are required for the platform to function:\n• Authentication session tokens (JWT stored in localStorage)\n• Session preferences (remembers your last visited page)\n• CSRF protection tokens\n\n**Analytics Cookies**\nWe use minimal, privacy-respecting analytics to understand usage patterns. No personal data is shared with advertising networks.\n\n**No Third-Party Advertising Cookies**\nWe do not use advertising cookies. We do not track users across other websites.` },
  { title: '3. How to Control Cookies', content: 'You can control cookies through your browser settings. Note that disabling essential cookies may prevent login and other core features from working correctly.' },
  { title: '4. Local Storage',          content: 'In addition to cookies, we use localStorage to store your theme preference and JWT session tokens on the client side. This is standard practice for React-based web applications.' },
  { title: '5. Updates',                content: 'We may update this Cookie Policy as the platform evolves. Changes will be communicated through the platform or via email.' },
  { title: '6. Contact',                content: 'Questions about our cookie usage: support@teacherattendance.com' },
];

function renderContent(content) {
  return content.split('\n').map((line, j) => {
    if (!line.trim()) return null;
    if (line.startsWith('•')) {
      return <p key={j} className="cp-bullet">{line}</p>;
    }
    const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    if (html !== line) {
      return <p key={j} className="cp-category" dangerouslySetInnerHTML={{ __html: html }} />;
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
      className="cp-section"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3), ease: EASE }}
    >
      <h2 className="cp-section__title">{s.title}</h2>
      <div className="cp-section__body">{renderContent(s.content)}</div>
    </motion.div>
  );
}

export default function CookiePolicy() {
  const heroRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-48px 0px' });

  return (
    <>
      <style>{`
        .cp-hero {
          font-family: ${INTER};
          background: #fff;
          overflow: hidden;
        }
        .cp-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 96px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cp-eyebrow {
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
        .cp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${T.teal};
          flex-shrink: 0;
        }
        .cp-hero-h1 {
          font-family: ${MELODY};
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 20px;
        }
        .cp-hero-date {
          font-size: 14px;
          color: ${T.mid};
          margin: 0;
        }

        .cp-content-section {
          font-family: ${INTER};
          background: #F8FAFB;
          overflow: hidden;
        }
        .cp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(64px, 8vw, 96px) clamp(20px, 4vw, 48px);
          border-top: 0.5px solid ${T.border};
        }

        .cp-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 72px;
          align-items: start;
        }

        .cp-toc {
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
        .cp-toc-item {
          background: #fff;
          padding: 10px 14px;
          font-size: 12px;
          font-weight: 600;
          color: ${T.mid};
          line-height: 1.4;
          transition: background 0.15s, color 0.15s;
          cursor: default;
        }
        .cp-toc-item:hover { background: #e0faf8; color: ${T.dark}; }

        .cp-body { display: flex; flex-direction: column; }

        .cp-section {
          padding: 32px 0;
          border-bottom: 0.5px solid ${T.border};
        }
        .cp-section:first-child { padding-top: 0; }
        .cp-section:last-child  { border-bottom: none; }

        .cp-section__title {
          font-family: ${MELODY};
          font-size: clamp(16px, 1.6vw, 20px);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: ${T.dark};
          margin: 0 0 16px;
          line-height: 1.2;
        }
        .cp-section__body p {
          font-size: 14px;
          line-height: 1.8;
          color: ${T.mid};
          margin: 0 0 10px;
        }
        .cp-section__body p:last-child { margin-bottom: 0; }
        .cp-section__body strong { color: ${T.dark}; font-weight: 700; }
        .cp-category { margin-top: 6px !important; }
        .cp-bullet   { padding-left: 8px; }

        @media (max-width: 900px) {
          .cp-layout { grid-template-columns: 1fr; gap: 40px; }
          .cp-toc    { position: static; }
        }
        @media (max-width: 560px) {
          .cp-hero-inner { text-align: left; align-items: flex-start; }
          .cp-toc        { display: none; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="cp-hero" aria-label="Cookie Policy hero">
        <div className="cp-hero-inner" ref={heroRef}>

          <motion.div
            className="cp-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="cp-eyebrow-dot" />
            Legal
          </motion.div>

          <motion.h1
            className="cp-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Cookie Policy
          </motion.h1>

          <motion.p
            className="cp-hero-date"
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.20, ease: EASE }}
          >
            Last updated: June 2026
          </motion.p>

        </div>
      </section>

      {/* ══ CONTENT ══ */}
      <section className="cp-content-section" aria-label="Cookie Policy content">
        <div className="cp-inner">
          <div className="cp-layout">

            <nav className="cp-toc" aria-label="Table of contents">
              {SECTIONS.map(s => (
                <div key={s.title} className="cp-toc-item">{s.title}</div>
              ))}
            </nav>

            <div className="cp-body">
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