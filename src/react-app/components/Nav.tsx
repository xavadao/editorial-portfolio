import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Main nav bar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 2.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 500ms cubic-bezier(0.25,0.1,0.25,1), border-color 500ms',
          background: scrolled ? 'hsl(0 0% 4% / 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(0 0% 14%)' : '1px solid transparent',
        }}
      >
        {/* Logo / Wordmark */}
        <Link
          to="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'hsl(30 10% 94%)',
            textDecoration: 'none',
          }}
        >
          Alex Morgan
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: location.pathname === l.to
                  ? 'hsl(38 45% 60%)'
                  : 'hsl(30 5% 52%)',
                textDecoration: 'none',
                transition: 'color 250ms ease',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== l.to)
                  (e.target as HTMLElement).style.color = 'hsl(30 10% 94%)';
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== l.to)
                  (e.target as HTMLElement).style.color = 'hsl(30 5% 52%)';
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="nav-mobile-btn"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{
            display: 'block', width: '24px', height: '1px',
            background: 'hsl(30 10% 94%)',
            transition: 'transform 300ms ease, opacity 300ms ease',
            transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1px',
            background: 'hsl(30 10% 94%)',
            transition: 'opacity 300ms ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '24px', height: '1px',
            background: 'hsl(30 10% 94%)',
            transition: 'transform 300ms ease, opacity 300ms ease',
            transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'hsl(0 0% 4% / 0.97)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 2.5rem',
          gap: '2rem',
          transition: 'opacity 400ms ease, visibility 400ms ease',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        className="nav-overlay"
      >
        {links.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: location.pathname === l.to ? 'hsl(38 45% 60%)' : 'hsl(30 10% 94%)',
              textDecoration: 'none',
              transition: `opacity 400ms ease ${i * 60}ms, transform 400ms ease ${i * 60}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
            }}
          >
            {l.label}
          </Link>
        ))}
        <div style={{
          marginTop: '2rem',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8125rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'hsl(30 5% 35%)',
        }}>
          © 2024 Alex Morgan
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
