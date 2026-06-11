import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

/* ── Design tokens — shared across all sections ── */
const T = {
  teal:      '#0DB9AC',
  tealLight: '#e0faf8',
  dark:      '#0F1923',
  mid:       '#64748B',
  muted:     '#94A3B8',
  border:    'rgba(15,25,35,0.08)',
};
const MELODY = "'Melody', 'Inter', sans-serif";
const INTER  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const COLS = {
  Product: [
    { label: 'Features',     to: '/features'     },
    { label: 'How It Works', to: '/how-it-works'  },
    { label: 'Platform',     to: '/platform'      },
    { label: 'Download App', to: '/download-app'  },
  ],
  Company: [
    { label: 'About Us',     to: '/about-us'      },
    { label: 'Contact',      to: '/contact'        },
     { label: 'FAQ',          to: '/faq'            },
  ],
  Legal: [
    { label: 'Privacy Policy',      to: '/privacy-policy'      },
    { label: 'Terms & Conditions',  to: '/terms-and-conditions' },
    { label: 'Cookie Policy',       to: '/cookie-policy'        },
  ],
};

const SOCIALS = [
  { label: '𝕏',  href: '#',                                    aria: 'Twitter / X'  },
  { label: 'in', href: '#',                                    aria: 'LinkedIn'      },
  { label: '@',  href: 'mailto:support@teacherattendance.com', aria: 'Email support' },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          font-family: ${INTER};
          background: #fff;
          border-top: 0.5px solid ${T.border};
          overflow: hidden;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(56px, 7vw, 88px) clamp(20px, 4vw, 48px) 0;
        }

        /* ── Main grid ── */
        .footer__grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(3, 1fr);
          gap: 56px;
          padding-bottom: 48px;
          border-bottom: 0.5px solid ${T.border};
        }

        /* ── Brand column ── */
        .footer__logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 16px;
        }
        .footer__logo-img {
          width: 38px; height: 38px;
          object-fit: contain;
          flex-shrink: 0;
        }
        .footer__logo-text {
          font-family: ${MELODY};
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: ${T.dark};
          line-height: 1;
        }

        .footer__desc {
          font-size: 13.5px;
          line-height: 1.78;
          color: ${T.mid};
          max-width: 260px;
          margin: 0 0 14px;
        }
        .footer__tagline {
          font-size: 12px;
          font-weight: 600;
          color: ${T.teal};
          letter-spacing: 0.01em;
          margin-bottom: 20px;
        }

        /* Socials */
        .footer__socials { display: flex; gap: 8px; }
        .footer__social {
          width: 36px; height: 36px;
          border-radius: 9px;
          background: #F8FAFB;
          border: 0.5px solid ${T.border};
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: ${T.dark};
          font-size: 13px;
          font-weight: 700;
          transition: background 0.18s, border-color 0.18s, color 0.18s, transform 0.14s;
        }
        .footer__social:hover {
          background: ${T.tealLight};
          border-color: rgba(13,185,172,0.25);
          color: ${T.teal};
          transform: translateY(-2px);
        }

        /* ── Nav columns ── */
        .footer__col-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: ${T.dark};
          margin: 0 0 16px;
        }
        .footer__links {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .footer__link {
          font-size: 13.5px;
          color: ${T.mid};
          text-decoration: none;
          transition: color 0.15s;
          width: fit-content;
        }
        .footer__link:hover { color: ${T.teal}; }

        /* ── Bottom bar ── */
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0 28px;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer__copy {
          font-size: 12.5px;
          color: ${T.muted};
          margin: 0;
        }
        .footer__bottom-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer__email {
          font-size: 12.5px;
          font-weight: 500;
          color: ${T.mid};
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer__email:hover { color: ${T.teal}; }

        /* ── Designed by credit ── */
        .footer__credit {
          font-size: 12.5px;
          color: ${T.muted};
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .footer__credit a {
          color: ${T.mid};
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer__credit a:hover { color: ${T.teal}; }
        .footer__credit-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: ${T.border};
          flex-shrink: 0;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .footer__grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .footer__grid { grid-template-columns: 1fr; gap: 36px; text-align: center; }
          .footer__logo { justify-content: center; }
          .footer__desc { max-width: 100%; margin-left: auto; margin-right: auto; }
          .footer__socials { justify-content: center; }
          .footer__links { align-items: center; }
          .footer__link { width: auto; }
          .footer__bottom { flex-direction: column; text-align: center; align-items: center; padding-bottom: 32px; }
          .footer__bottom-right { flex-direction: column; gap: 8px; align-items: center; }
          .footer__credit { justify-content: center; }
          .footer__credit-dot { display: none; }
        }
      `}</style>

      <footer className="footer" role="contentinfo">
        <div className="footer-inner">

          {/* ── Main grid ── */}
          <div className="footer__grid">

            {/* Brand */}
            <div>
              <Link to="/" className="footer__logo">
                <img src={logo} alt="TeacherAttendance" className="footer__logo-img" />
                <span className="footer__logo-text">TeacherAttendance</span>
              </Link>
              <p className="footer__desc">
                Smart, secure teacher attendance for modern schools. GPS, WiFi, QR, and selfie verified.
              </p>
              <p className="footer__tagline">"Every Check-In, Every Day Counts"</p>
              <div className="footer__socials">
                {SOCIALS.map(s => (
                  <a key={s.aria} href={s.href} className="footer__social" aria-label={s.aria}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(COLS).map(([group, links]) => (
              <div key={group}>
                <p className="footer__col-title">{group}</p>
                <div className="footer__links">
                  {links.map(link => (
                    <Link key={link.label} to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom bar ── */}
          <div className="footer__bottom">
            <p className="footer__copy">
              © {new Date().getFullYear()} TeacherAttendance.com · All rights reserved
            </p>

            <div className="footer__bottom-right">
              <a href="mailto:support@teacherattendance.com" className="footer__email">
                support@teacherattendance.com
              </a>
              <span className="footer__credit-dot" />
              <span className="footer__credit">
                Designed & developed by
                <a href="https://www.webieapp.com/" target="_blank" rel="noopener noreferrer">
                  Webieapp Solutions LLC
                </a>
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}