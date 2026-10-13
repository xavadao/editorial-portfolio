import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useScrollReveal } from '../components/useScrollReveal';

const PORTRAIT = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85&auto=format&fit=crop&crop=faces';

const VALUES = [
  { label: 'Restraint', desc: 'I believe in the power of what is left out. Silence is a design choice — and often the most powerful one.' },
  { label: 'Precision', desc: 'Every detail is deliberate. I work until the work is right, not until the deadline.' },
  { label: 'Longevity', desc: 'I build for the long arc — identities and experiences that age with grace, not trends.' },
];

const CLIENTS = ['Maison Noir', 'Forma Studio', 'Atlas Group', 'Meridian Press', 'Veil Collective', 'Onyx Capital'];

export default function AboutPage() {
  useScrollReveal();
  const imgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on portrait
  useEffect(() => {
    const container = imgRef.current;
    if (!container) return;
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const img = container.querySelector('img') as HTMLElement;
      if (img) img.style.transform = `translateY(${(progress - 0.5) * 40}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main style={{ background: 'hsl(0 0% 4%)', color: 'hsl(30 10% 94%)', paddingTop: '72px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem clamp(3rem, 5vw, 5rem)',
        borderBottom: '1px solid hsl(0 0% 14%)',
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'hsl(38 45% 60%)',
          marginBottom: '1.5rem',
        }}>
          About
        </p>
        <h1 className="reveal" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 500,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          maxWidth: '800px',
        }}>
          I make work that<br />
          <em style={{ fontStyle: 'italic', color: 'hsl(38 45% 60%)' }}>means something.</em>
        </h1>
      </section>

      {/* ── SPLIT LAYOUT: Portrait + Bio ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh',
      }}>
        {/* Portrait */}
        <div
          ref={imgRef}
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'hsl(0 0% 7%)',
            minHeight: '500px',
          }}
        >
          <img
            src={PORTRAIT}
            alt="Alex Morgan"
            style={{
              width: '100%',
              height: '110%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              willChange: 'transform',
            }}
          />
          {/* Subtle vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'hsl(0 0% 4% / 0.2)',
          }} />
          {/* Caption */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'hsl(30 10% 94% / 0.5)',
            }}>
              Alex Morgan — Creative Director
            </p>
          </div>
        </div>

        {/* Bio */}
        <div style={{
          padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderLeft: '1px solid hsl(0 0% 14%)',
        }}>
          <p className="reveal" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'hsl(38 45% 60%)',
            marginBottom: '2rem',
          }}>
            About me
          </p>

          <div className="reveal delay-100" style={{ position: 'relative', marginBottom: '2.5rem' }}>
            <span style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-0.25rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '6rem',
              lineHeight: 1,
              color: 'hsl(38 45% 60% / 0.25)',
              fontWeight: 700,
              pointerEvents: 'none',
              userSelect: 'none',
            }}>"</span>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              lineHeight: 1.15,
              fontStyle: 'italic',
              color: 'hsl(30 10% 94%)',
              paddingTop: '1.5rem',
            }}>
              I believe the world needs fewer things, made with more intention.
            </p>
          </div>

          <p className="reveal delay-200" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9375rem',
            color: 'hsl(30 5% 52%)',
            lineHeight: 1.75,
            marginBottom: '1.5rem',
          }}>
            I'm a creative director and image-maker based in New York. Since 2018, I've worked with a small number of clients each year — brands, cultural institutions, and founders who care deeply about how they are perceived and what they stand for.
          </p>

          <p className="reveal delay-300" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9375rem',
            color: 'hsl(30 5% 52%)',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            My practice spans brand identity, art direction, editorial design, and digital experience. I work globally, but I keep my collaborations close — because the best work comes from genuine understanding, not just execution.
          </p>

          <Link
            to="/contact"
            className="reveal delay-400"
            style={{
              display: 'inline-block',
              alignSelf: 'flex-start',
              padding: '0.875rem 2rem',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8125rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'hsl(30 10% 94%)',
              background: 'transparent',
              border: '1px solid hsl(30 10% 94%)',
              textDecoration: 'none',
              transition: 'color 300ms ease, border-color 300ms ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'hsl(38 45% 60%)';
              el.style.borderColor = 'hsl(38 45% 60%)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'hsl(30 10% 94%)';
              el.style.borderColor = 'hsl(30 10% 94%)';
            }}
          >
            Work with me
          </Link>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2.5rem',
        borderTop: '1px solid hsl(0 0% 14%)',
      }}>
        <p className="reveal" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'hsl(38 45% 60%)',
          marginBottom: 'clamp(3rem, 5vw, 4rem)',
        }}>
          Principles
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem',
        }}>
          {VALUES.map((v, i) => (
            <div key={v.label} className={`reveal delay-${(i + 1) * 100}`}>
              <div style={{
                width: '32px',
                height: '1px',
                background: 'hsl(38 45% 60%)',
                marginBottom: '1.5rem',
              }} />
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.125rem, 2vw, 1.75rem)',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'hsl(30 10% 94%)',
                marginBottom: '1rem',
                lineHeight: 1.0,
              }}>
                {v.label}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9375rem',
                color: 'hsl(30 5% 52%)',
                lineHeight: 1.7,
              }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CLIENTS ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        borderTop: '1px solid hsl(0 0% 14%)',
      }}>
        <p className="reveal" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'hsl(30 5% 35%)',
          marginBottom: '3rem',
        }}>
          Selected Clients
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
        }}>
          {CLIENTS.map((c, i) => (
            <div
              key={c}
              className={`reveal delay-${(i % 3 + 1) * 100}`}
              style={{
                padding: '2rem 0',
                borderTop: '1px solid hsl(0 0% 14%)',
                borderRight: i % 3 !== 2 ? '1px solid hsl(0 0% 14%)' : 'none',
                paddingLeft: i % 3 !== 0 ? '2rem' : '0',
              }}
            >
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                color: 'hsl(30 5% 52%)',
                transition: 'color 300ms ease',
              }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'hsl(30 10% 94%)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'hsl(30 5% 52%)')}
              >
                {c}
              </p>
            </div>
          ))}
          <div style={{ gridColumn: '1 / -1', borderTop: '1px solid hsl(0 0% 14%)' }} />
        </div>
      </section>

      {/* ── RESPONSIVE ── */}
      <style>{`
        @media (max-width: 768px) {
          section:nth-child(2) { grid-template-columns: 1fr !important; }
          section:nth-child(3) > div:last-child { grid-template-columns: 1fr !important; }
          section:nth-child(4) > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  );
}
