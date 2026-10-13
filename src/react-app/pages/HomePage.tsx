import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useScrollReveal } from '../components/useScrollReveal';

// Curated Unsplash images — cinematic, editorial
const HERO_IMG = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800&q=85&auto=format&fit=crop';

const WORK_ITEMS = [
  {
    id: 'atlas',
    title: 'Atlas Identity',
    category: 'Brand Direction',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 'meridian',
    title: 'Meridian Editorial',
    category: 'Art Direction',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'veil',
    title: 'Veil Campaign',
    category: 'Photography',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'forma',
    title: 'Forma Architecture',
    category: 'Visual Identity',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 'noir',
    title: 'Noir Collection',
    category: 'Fashion Editorial',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80&auto=format&fit=crop',
    size: 'medium',
  },
];

const SERVICES = [
  { num: '01', title: 'Brand Direction', desc: 'I build identity systems and visual languages for brands that want to mean something — not just look good.' },
  { num: '02', title: 'Art Direction', desc: 'I concept and direct campaigns, editorials, and image-making that hold attention without demanding it.' },
  { num: '03', title: 'Digital Experience', desc: 'I design websites and interfaces that feel as considered as the work they represent.' },
  { num: '04', title: 'Creative Consulting', desc: 'I work closely with founders and cultural institutions who need a clear creative perspective, not just execution.' },
];

export default function HomePage() {
  useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero image
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      const img = hero.querySelector('.hero-img') as HTMLElement;
      if (img) img.style.transform = `translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main style={{ background: 'hsl(0 0% 4%)', color: 'hsl(30 10% 94%)' }}>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 2.5rem 4rem',
        }}
      >
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            className="hero-img"
            src={HERO_IMG}
            alt=""
            style={{
              width: '100%',
              height: '115%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              willChange: 'transform',
            }}
          />
          {/* Cinematic overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, hsl(0 0% 4%) 0%, hsl(0 0% 4% / 0.55) 45%, hsl(0 0% 4% / 0.2) 100%)',
          }} />
        </div>

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'hsl(38 45% 60%)',
            marginBottom: '1.5rem',
          }}>
            Art Direction &amp; Visual Identity
          </p>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'hsl(30 10% 94%)',
            marginBottom: '2rem',
          }}>
            I'm Alex<br />
            <em style={{ fontStyle: 'italic', color: 'hsl(38 45% 60%)' }}>Morgan.</em>
          </h1>

          {/* Sub-text + CTA row */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              color: 'hsl(30 5% 52%)',
              maxWidth: '380px',
              lineHeight: 1.7,
            }}>
              I make images, identities, and experiences that feel inevitable — for brands and people who care about how things look and what they mean.
            </p>
            <Link
              to="/work"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.8125rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'hsl(30 10% 94%)',
                textDecoration: 'none',
                borderBottom: '1px solid hsl(38 45% 60%)',
                paddingBottom: '4px',
                transition: 'color 300ms ease, border-color 300ms ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(38 45% 60%)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'hsl(30 10% 94%)';
              }}
            >
              View Selected Work →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
        }}>
          <div style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, transparent, hsl(30 5% 52%))',
          }} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.625rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'hsl(30 5% 35%)',
            writingMode: 'vertical-rl',
          }}>
            Scroll
          </p>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 2.5rem' }}>
        {/* Section header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
          borderBottom: '1px solid hsl(0 0% 14%)',
          paddingBottom: '1.5rem',
        }}>
          <div className="reveal">
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'hsl(38 45% 60%)',
              marginBottom: '0.5rem',
            }}>
              Selected Work
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              color: 'hsl(30 10% 94%)',
            }}>
              Recent Projects
            </h2>
          </div>
          <Link
            to="/work"
            className="reveal delay-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'hsl(30 5% 52%)',
              textDecoration: 'none',
              transition: 'color 250ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'hsl(30 10% 94%)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'hsl(30 5% 52%)')}
          >
            All Projects →
          </Link>
        </div>

        {/* Editorial grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1.5rem',
        }}>
          {/* Large feature — spans 7 cols */}
          <WorkTile item={WORK_ITEMS[0]} style={{ gridColumn: '1 / 8', gridRow: '1 / 2' }} tall />

          {/* Two small tiles stacked — spans 5 cols */}
          <WorkTile item={WORK_ITEMS[1]} style={{ gridColumn: '8 / 13', gridRow: '1 / 2' }} />

          {/* Medium tile */}
          <WorkTile item={WORK_ITEMS[3]} style={{ gridColumn: '1 / 6', gridRow: '2 / 3' }} />

          {/* Medium tile offset */}
          <WorkTile item={WORK_ITEMS[4]} style={{ gridColumn: '6 / 10', gridRow: '2 / 3' }} />

          {/* Small accent tile */}
          <WorkTile item={WORK_ITEMS[2]} style={{ gridColumn: '10 / 13', gridRow: '2 / 3' }} />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2.5rem',
        borderTop: '1px solid hsl(0 0% 14%)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(3rem, 6vw, 6rem)',
        alignItems: 'center',
      }}>
        {/* Text side */}
        <div>
          <p className="reveal" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'hsl(38 45% 60%)',
            marginBottom: '2rem',
          }}>
            Philosophy
          </p>
          <h2 className="reveal delay-100" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.75rem, 5.5vw, 5rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'hsl(30 10% 94%)',
            marginBottom: '2rem',
          }}>
            Design is not decoration.<br />
            It is <em style={{ fontStyle: 'italic', color: 'hsl(38 45% 60%)' }}>decision.</em>
          </h2>
          <p className="reveal delay-200" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: 'hsl(30 5% 52%)',
            lineHeight: 1.75,
            maxWidth: '440px',
            marginBottom: '2.5rem',
          }}>
            Every mark, every margin, every moment of silence in a composition is intentional. I work with people who understand that restraint is a form of power — and that the most enduring work is built on clarity of thought.
          </p>
          <Link
            to="/about"
            className="reveal delay-300"
            style={{
              display: 'inline-block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8125rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'hsl(30 10% 94%)',
              textDecoration: 'none',
              borderBottom: '1px solid hsl(0 0% 22%)',
              paddingBottom: '4px',
              transition: 'border-color 300ms ease, color 300ms ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'hsl(38 45% 60%)';
              (e.currentTarget as HTMLElement).style.color = 'hsl(38 45% 60%)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'hsl(0 0% 22%)';
              (e.currentTarget as HTMLElement).style.color = 'hsl(30 10% 94%)';
            }}
          >
            More about me →
          </Link>
        </div>

        {/* Image side */}
        <div className="reveal-fade delay-200 img-zoom" style={{
          aspectRatio: '4/5',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=90&auto=format&fit=crop"
            alt="Creative philosophy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', filter: 'contrast(1.08) brightness(0.9)' }}
          />
          {/* Subtle overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'hsl(0 0% 4% / 0.15)',
          }} />
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:has(.philosophy-grid) { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── SERVICES ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2.5rem',
        borderTop: '1px solid hsl(0 0% 14%)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.25rem',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }}>
          <p className="reveal" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'hsl(38 45% 60%)',
          }}>
            Capabilities
          </p>
          <h2 className="reveal delay-100" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'hsl(30 10% 94%)',
          }}>
            What I do
          </h2>
        </div>

        <div>
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`reveal delay-${(i + 1) * 100}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 1fr',
                gap: '2rem',
                padding: '2.5rem 0',
                borderTop: '1px solid hsl(0 0% 14%)',
                alignItems: 'start',
                transition: 'background 300ms ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'hsl(0 0% 7%)';
                (e.currentTarget as HTMLElement).style.padding = '2.5rem 1.5rem';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.padding = '2.5rem 0';
              }}
            >
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                color: 'hsl(30 5% 35%)',
                paddingTop: '4px',
              }}>
                {s.num}
              </span>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: 'hsl(30 10% 94%)',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9375rem',
                color: 'hsl(30 5% 52%)',
                lineHeight: 1.65,
              }}>
                {s.desc}
              </p>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid hsl(0 0% 14%)' }} />
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) 2.5rem',
        borderTop: '1px solid hsl(0 0% 14%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem',
      }}>
        <p className="reveal" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'hsl(38 45% 60%)',
        }}>
          New Projects
        </p>
        <h2 className="reveal delay-100" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 500,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          color: 'hsl(30 10% 94%)',
          maxWidth: '900px',
        }}>
          Ready to make<br />something remarkable?
        </h2>
        <Link
          to="/contact"
          className="reveal delay-200"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '1rem 2.5rem',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.8125rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'hsl(30 10% 94%)',
            background: 'transparent',
            border: '1px solid hsl(30 10% 94%)',
            textDecoration: 'none',
            transition: 'border-color 300ms ease, color 300ms ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'hsl(38 45% 60%)';
            (e.currentTarget as HTMLElement).style.borderColor = 'hsl(38 45% 60%)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'hsl(30 10% 94%)';
            (e.currentTarget as HTMLElement).style.borderColor = 'hsl(30 10% 94%)';
          }}
        >
          Start a Conversation
        </Link>
      </section>

    </main>
  );
}

// ── Work Tile Component ──
function WorkTile({
  item,
  style,
  tall,
}: {
  item: typeof WORK_ITEMS[0];
  style?: React.CSSProperties;
  tall?: boolean;
}) {
  return (
    <Link
      to={`/work/${item.id}`}
      className="reveal img-zoom"
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: tall ? '3/4' : '4/3',
        background: 'hsl(0 0% 7%)',
        textDecoration: 'none',
        ...style,
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, hsl(0 0% 4% / 0.85) 0%, transparent 50%)',
        opacity: 0,
        transition: 'opacity 400ms ease',
      }}
        className="tile-overlay"
      />
      {/* Text */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.5rem',
        transform: 'translateY(8px)',
        opacity: 0,
        transition: 'opacity 400ms ease, transform 400ms ease',
      }}
        className="tile-text"
      >
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'hsl(38 45% 60%)',
          marginBottom: '0.375rem',
        }}>
          {item.category} — {item.year}
        </p>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1rem, 2vw, 1.375rem)',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: 'hsl(30 10% 94%)',
        }}>
          {item.title}
        </h3>
      </div>

      <style>{`
        a:hover .tile-overlay { opacity: 1 !important; }
        a:hover .tile-text { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 900px) {
          .work-grid a { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </Link>
  );
}
