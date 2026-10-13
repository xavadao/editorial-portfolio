import { useState } from 'react';
import { useScrollReveal } from '../components/useScrollReveal';

export default function ContactPage() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: 'none',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? 'hsl(38 45% 60%)' : 'hsl(0 0% 22%)'}`,
    padding: '1rem 0',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '1rem',
    color: 'hsl(30 10% 94%)',
    outline: 'none',
    transition: 'border-color 300ms ease',
    resize: 'none',
  });

  return (
    <main style={{ background: 'hsl(0 0% 4%)', color: 'hsl(30 10% 94%)', paddingTop: '72px' }}>

      {/* ── OPENING STATEMENT ── */}
      <section style={{
        padding: 'clamp(5rem, 12vw, 10rem) 2.5rem clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid hsl(0 0% 14%)',
        maxWidth: '1000px',
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'hsl(38 45% 60%)',
          marginBottom: '2rem',
        }}>
          Contact
        </p>
        <h1 className="reveal" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(3.5rem, 9vw, 8rem)',
          fontWeight: 500,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: 'hsl(30 10% 94%)',
        }}>
          Let's work<br />
          <em style={{ fontStyle: 'italic', color: 'hsl(38 45% 60%)' }}>together.</em>
        </h1>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: 'clamp(4rem, 8vw, 8rem)',
        alignItems: 'start',
      }}>

        {/* Left: info */}
        <div>
          <p className="reveal" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.9375rem',
            color: 'hsl(30 5% 52%)',
            lineHeight: 1.75,
            marginBottom: '3rem',
          }}>
            I take on a limited number of projects each year. If you have something worth making, I'd like to hear about it.
          </p>

          <div style={{ marginBottom: '3rem' }}>
            {[
              { label: 'Email', value: 'hello@alexmorgan.co' },
              { label: 'New Projects', value: 'work@alexmorgan.co' },
              { label: 'Location', value: 'New York, NY' },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{
                  padding: '1.5rem 0',
                  borderBottom: '1px solid hsl(0 0% 14%)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(30 5% 35%)',
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9375rem',
                  color: 'hsl(30 10% 94%)',
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="reveal delay-400">
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'hsl(30 5% 35%)',
              marginBottom: '1rem',
            }}>
              Follow
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {['Instagram', 'Behance', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8125rem',
                    color: 'hsl(30 5% 52%)',
                    textDecoration: 'none',
                    transition: 'color 250ms ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'hsl(38 45% 60%)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'hsl(30 5% 52%)')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="reveal delay-200">
          {sent ? (
            <div style={{
              padding: 'clamp(3rem, 6vw, 5rem) 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <div style={{
                width: '40px',
                height: '1px',
                background: 'hsl(38 45% 60%)',
              }} />
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                color: 'hsl(30 10% 94%)',
              }}>
                Demo completed.
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9375rem',
                color: 'hsl(30 5% 52%)',
                lineHeight: 1.7,
              }}>
                This is a demo form. Your message was not sent or saved.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* Name */}
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(30 5% 35%)',
                  marginBottom: '0.25rem',
                }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('name')}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(30 5% 35%)',
                  marginBottom: '0.25rem',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: (e.target as HTMLInputElement).value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('email')}
                />
              </div>

              {/* Project type */}
              <div style={{ marginBottom: '0.5rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(30 5% 35%)',
                  marginBottom: '0.25rem',
                }}>
                  Project Type
                </label>
                <input
                  type="text"
                  placeholder="Brand identity, campaign, digital..."
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: (e.target as HTMLInputElement).value })}
                  onFocus={() => setFocused('project')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('project')}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '3rem' }}>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(30 5% 35%)',
                  marginBottom: '0.25rem',
                }}>
                  Tell me about your project
                </label>
                <textarea
                  rows={5}
                  placeholder="What are you working on? What do you need?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: (e.target as HTMLTextAreaElement).value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('message')}
                />
              </div>

              <button
                type="submit"
                style={{
                  alignSelf: 'flex-start',
                  padding: '1rem 2.5rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8125rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(30 10% 94%)',
                  background: 'transparent',
                  border: '1px solid hsl(30 10% 94%)',
                  cursor: 'pointer',
                  transition: 'color 300ms ease, border-color 300ms ease, transform 150ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'hsl(38 45% 60%)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'hsl(38 45% 60%)';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(0.98)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'hsl(30 10% 94%)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'hsl(30 10% 94%)';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── CLOSING LINE ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        borderTop: '1px solid hsl(0 0% 14%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontWeight: 400,
          letterSpacing: '-0.01em',
          color: 'hsl(30 5% 35%)',
        }}>
          Studio — New York
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'hsl(0 0% 22%)',
        }}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section:nth-child(2) { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder {
          color: hsl(30 5% 28%);
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>
    </main>
  );
}
