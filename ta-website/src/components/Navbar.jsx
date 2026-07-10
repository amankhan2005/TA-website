import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV = [
  { label: 'Schools',  href: '/schools' },
  { label: 'Teachers',  href: '/teachers' },
  { label: 'Students',  href: '/students' },
  { label: 'Pricing',   href: '/pricing' },
];

const SCHOOL_LOGIN_URL = 'http://liberiaschoolhub.com/schooladmin';

const T = {
  teal:     '#0DB9AC',
  tealDark: '#0aa89c',
  dark:     '#0F1923',
  mid:      '#64748B',
  INTER:    "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close drawer on desktop resize
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        role="banner"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          fontFamily: T.INTER,
          transition: 'background .25s ease, border-color .25s ease, box-shadow .25s ease',
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled
            ? '0.5px solid rgba(0,0,0,.09)'
            : '0.5px solid transparent',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,.05)' : 'none',
        }}
      >
        {/* 
          Inner container:
          - flex row, always
          - logo on left, hamburger on right (mobile)
          - logo + centered nav + ctas (desktop)
          - responsive horizontal padding via clamp
        */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            height: '64px',
            // Responsive padding: 16px mobile → 24px tablet → 32px desktop
            padding: '0 clamp(16px, 4vw, 32px)',
            gap: '8px',
            // Prevent any child from overflowing and hiding the hamburger
            overflow: 'visible',
            minWidth: 0,
          }}
        >

          {/* ── Logo + Brand name ── */}
          <Link
            to="/"
            aria-label="liberiaschoolhub.com home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              textDecoration: 'none',
              flexShrink: 0,        // never shrink the logo
              minWidth: 0,
            }}
          >
            <img
              src={logo}
              alt="liberiaschoolhub.com logo"
              style={{
                height: '60px',
                width: 'auto',
                display: 'block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '15.5px',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: T.dark,
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}
            >
              liberia School Hub
            </span>
          </Link>

          {/* ── Desktop nav — centered (hidden on mobile) ── */}
          <nav
            aria-label="Main navigation"
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              // Hidden on mobile via inline media — we use a CSS class trick below
            }}
            className="nb-desktop-nav"
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {NAV.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      to={href}
                      style={{
                        display: 'inline-block',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '13.5px',
                        fontWeight: active ? 600 : 500,
                        color: active ? T.teal : T.mid,
                        textDecoration: 'none',
                        background: active ? 'rgba(13,185,172,.08)' : 'transparent',
                        transition: 'color .15s, background .15s',
                        letterSpacing: '-0.01em',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => {
                        if (!active) {
                          e.currentTarget.style.color = T.dark;
                          e.currentTarget.style.background = 'rgba(0,0,0,.04)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!active) {
                          e.currentTarget.style.color = T.mid;
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ── Desktop CTAs (hidden on mobile) ── */}
          <div
            className="nb-desktop-ctas"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexShrink: 0,
            }}
          >
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '7px 16px',
                borderRadius: '9px',
                fontSize: '13.5px',
                fontWeight: 500,
                color: T.dark,
                textDecoration: 'none',
                border: '0.5px solid rgba(0,0,0,.13)',
                background: 'transparent',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
                transition: 'background .15s, border-color .15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,0,0,.04)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,.13)';
              }}
            >
              Contact Us
            </Link>

            <a
              href={SCHOOL_LOGIN_URL}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '7px 16px',
                borderRadius: '9px',
                fontSize: '13.5px',
                fontWeight: 500,
                color: T.dark,
                textDecoration: 'none',
                border: '0.5px solid rgba(0,0,0,.13)',
                background: 'transparent',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
                transition: 'background .15s, border-color .15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,0,0,.04)';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,.13)';
              }}
            >
              School Login
            </a>

            <Link
              to="/download-app"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '7px 16px',
                borderRadius: '9px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#fff',
                textDecoration: 'none',
                background: T.teal,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
                transition: 'background .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.tealDark; }}
              onMouseLeave={e => { e.currentTarget.style.background = T.teal; }}
            >
              Download App
            </Link>
          </div>

          {/* ── Mobile hamburger (hidden on desktop) ── */}
          <button
            className="nb-hamburger"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              // Push to far right
              marginLeft: 'auto',
              // Always flex — visibility controlled by CSS class below
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // Generous touch target
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: '0.5px solid rgba(0,0,0,.12)',
              background: open ? 'rgba(0,0,0,.04)' : 'transparent',
              cursor: 'pointer',
              color: T.dark,
              flexShrink: 0,
              transition: 'background .15s',
              // Ensure it's never clipped
              zIndex: 1,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ opacity: 0, rotate: open ? -45 : 45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: open ? 45 : -45, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {open
                  ? <X size={18} strokeWidth={2} />
                  : <Menu size={18} strokeWidth={2} />
                }
              </motion.span>
            </AnimatePresence>
          </button>

        </div>

        {/* ── Responsive CSS — injected inline so no external stylesheet needed ── */}
        <style>{`
          /* Desktop (≥768px): show nav + CTAs, hide hamburger */
          @media (min-width: 768px) {
            .nb-desktop-nav  { display: flex !important; }
            .nb-desktop-ctas { display: flex !important; }
            .nb-hamburger    { display: none  !important; }
          }

          /* Mobile (<768px): hide nav + CTAs, show hamburger */
          @media (max-width: 767px) {
            .nb-desktop-nav  { display: none  !important; }
            .nb-desktop-ctas { display: none  !important; }
            .nb-hamburger    { display: flex  !important; }
          }
        `}</style>

      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 98,
                background: 'rgba(0,0,0,.18)',
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-label="Mobile navigation menu"
              style={{
                position: 'fixed',
                // Sits directly below the 64px header
                top: '64px',
                left: 0,
                right: 0,
                zIndex: 99,
                background: 'rgba(255,255,255,0.98)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '0.5px solid rgba(0,0,0,.08)',
                // Responsive padding matches header
                padding: 'clamp(16px, 4vw, 24px)',
                paddingTop: '12px',
                paddingBottom: '28px',
                fontFamily: T.INTER,
                // Prevent drawer content from overflowing viewport
                maxHeight: 'calc(100vh - 64px)',
                overflowY: 'auto',
                // Smooth momentum scroll on iOS
                WebkitOverflowScrolling: 'touch',
              }}
            >

              {/* Nav links */}
              <nav aria-label="Mobile navigation">
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  {NAV.map(({ label, href }, i) => {
                    const active = pathname === href;
                    return (
                      <motion.li
                        key={href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.18 }}
                      >
                        <Link
                          to={href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 14px',
                            borderRadius: '11px',
                            fontSize: '15px',
                            fontWeight: active ? 600 : 500,
                            color: active ? T.teal : T.dark,
                            textDecoration: 'none',
                            background: active ? 'rgba(13,185,172,.08)' : 'transparent',
                            transition: 'background .15s',
                            // Generous touch target height (min 44px)
                            minHeight: '44px',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Divider */}
              <div
                style={{
                  height: '0.5px',
                  background: 'rgba(0,0,0,.08)',
                  margin: '16px 0',
                }}
              />

              {/* CTA buttons */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '13px 16px',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: T.dark,
                    textDecoration: 'none',
                    border: '0.5px solid rgba(0,0,0,.13)',
                    background: 'transparent',
                    letterSpacing: '-0.01em',
                    minHeight: '48px',
                  }}
                >
                  Contact Us
                </Link>
                <a
                  href={SCHOOL_LOGIN_URL}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '13px 16px',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: T.dark,
                    textDecoration: 'none',
                    border: '0.5px solid rgba(0,0,0,.13)',
                    background: 'transparent',
                    letterSpacing: '-0.01em',
                    minHeight: '48px',
                  }}
                >
                  School Login
                </a>
                <Link
                  to="/download-app"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '13px 16px',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#fff',
                    textDecoration: 'none',
                    background: T.teal,
                    letterSpacing: '-0.01em',
                    minHeight: '48px',
                  }}
                >
                  Download App
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}