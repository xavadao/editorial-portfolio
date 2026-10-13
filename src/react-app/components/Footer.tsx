import { Link } from 'react-router';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid hsl(0 0% 14%)',
        padding: '3rem 2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'end',
        gap: '2rem',
        background: 'hsl(0 0% 4%)',
      }}
    >
      {/* Left: wordmark */}
      <div>
        <Link
          to="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'hsl(30 10% 94%)',
            textDecoration: 'none',
          }}
        >
          Alex Morgan
        </Link>
        <p style={{
          marginTop: '0.5rem',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.04em',
          color: 'hsl(30 5% 35%)',
          lineHeight: 1.6,
        }}>
          Art direction &amp; visual identity
        </p>
      </div>

      {/* Center: nav links */}
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.625rem',
        alignItems: 'center',
      }}>
        {[
          { to: '/', label: 'Home' },
          { to: '/work', label: 'Work' },
          { to: '/about', label: 'About' },
          { to: '/contact', label: 'Contact' },
        ].map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="underline-reveal"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'hsl(30 5% 35%)',
              textDecoration: 'none',
              transition: 'color 250ms ease',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'hsl(30 10% 94%)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'hsl(30 5% 35%)')}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Right: copyright + social */}
      <div style={{ textAlign: 'right' }}>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'flex-end',
          marginBottom: '1rem',
        }}>
          {['Instagram', 'Behance', 'LinkedIn'].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'hsl(30 5% 35%)',
                textDecoration: 'none',
                transition: 'color 250ms ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'hsl(38 45% 60%)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'hsl(30 5% 35%)')}
            >
              {s}
            </a>
          ))}
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.04em',
          color: 'hsl(0 0% 22%)',
        }}>
          © {year} Alex Morgan. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          footer nav { align-items: center !important; }
          footer > div:last-child { text-align: center !important; }
          footer > div:last-child > div { justify-content: center !important; }
        }
      `}</style>
    </footer>
  );
}
