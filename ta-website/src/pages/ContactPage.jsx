import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import InquiryForm from '../sections/InquiryForm';

const T = {
  teal:   '#0DB9AC',
  dark:   '#0F1923',
  mid:    '#64748B',
  border: 'rgba(15,25,35,0.08)',
};
const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const EASE   = [0.22, 1, 0.36, 1];

export default function ContactPage() {
  const heroRef  = useRef(null);
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
          font-size: clamp(44px, 6vw, 72px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.93;
          color: ${T.dark};
          margin: 0 0 24px;
        }
        .cp-hero-accent {
          font-weight: 300;
          color: ${T.teal};
          letter-spacing: -0.02em;
        }
        .cp-hero-sub {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.75;
          color: ${T.mid};
          max-width: 420px;
          margin: 0;
        }

        @media (max-width: 560px) {
          .cp-hero-inner { text-align: left; align-items: flex-start; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="cp-hero" aria-label="Contact hero">
        <div className="cp-hero-inner" ref={heroRef}>

          <motion.div
            className="cp-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0, ease: EASE }}
          >
            <span className="cp-eyebrow-dot" />
            Contact
          </motion.div>

          <motion.h1
            className="cp-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.10, ease: EASE }}
          >
            Let's get your school<br />
            <span className="cp-hero-accent">set up today.</span>
          </motion.h1>

          <motion.p
            className="cp-hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.20, ease: EASE }}
          >
            Fill out the form below — our team responds within 24 hours.
          </motion.p>

        </div>
      </section>

      {/* ══ INQUIRY FORM SECTION ══ */}
      <InquiryForm />
    </>
  );
}