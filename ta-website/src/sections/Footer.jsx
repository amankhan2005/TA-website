import { MapPin } from 'lucide-react';

const COLS = {
  Product: [
    { label:'Features',     href:'#features' },
    { label:'How It Works', href:'#how'      },
    { label:'Platform',     href:'#platform' },
    { label:'Download App', href:'#download' },
  ],
  Company: [
    { label:'About Us',      href:'#about'   },
    { label:'Contact',       href:'#contact' },
    { label:'Request Demo',  href:'#contact' },
    { label:'FAQ',           href:'#faq'     },
  ],
  Legal: [
    { label:'Privacy Policy',    href:'#' },
    { label:'Terms & Conditions',href:'#' },
    { label:'Cookie Policy',     href:'#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">
              <div className="footer__logo-mark"><MapPin size={15} color="white" strokeWidth={2.5}/></div>
              <span className="footer__logo-text">liberiaschoolhub.com</span>
            </div>
            <p className="footer__desc">Smart, secure teacher attendance for modern schools. GPS, WiFi, QR, and selfie verified.</p>
            <p className="footer__tagline">"Every Check-In, Every Day Counts"</p>
            <div className="footer__socials">
              {[['𝕏','#'],['in','#'],['@','mailto:info@liberiaschoolhub.com']].map(([l,h]) => (
                <a key={h} href={h} className="footer__social" aria-label={l}>{l}</a>
              ))}
            </div>
          </div>
          {Object.entries(COLS).map(([group, links]) => (
            <div key={group}>
              <p className="footer__col-title">{group}</p>
              <div className="footer__links">
                {links.map(l => <a key={l.label} href={l.href} className="footer__link">{l.label}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} liberiaschoolhub.com · All rights reserved</p>
          <a href="mailto:info@liberiaschoolhub.com" className="footer__email">info@liberiaschoolhub.com</a>
        </div>
      </div>
    </footer>
  );
}
