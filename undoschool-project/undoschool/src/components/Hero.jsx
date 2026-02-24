// Hero.jsx

const TRENDING = ['React', 'Python', 'UI/UX', 'Data Science', 'Photography', 'Machine Learning']

const STATS = [
  { value: '500+',  label: 'Expert Courses',   icon: '📚' },
  { value: '50k+',  label: 'Happy Students',   icon: '🎓' },
  { value: '200+',  label: 'Top Instructors',  icon: '👨‍🏫' },
  { value: '4.8★',  label: 'Average Rating',   icon: '⭐' },
]

export default function Hero({ searchQuery, setSearchQuery }) {
  return (
    <section className="hero-gradient">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '68px 24px 52px', position: 'relative', zIndex: 1 }}>

        {/* ── Headline ── */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>

          {/* Live badge */}
          <div className="animate-fade-up delay-0" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '6px 18px' }}>
              <span
                className="animate-pulse-dot"
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0 }}
              />
              <span style={{ color: 'rgba(255,255,255,0.88)', fontSize: '13px', fontWeight: 600 }}>
                10,000+ students learning right now
              </span>
            </div>
          </div>

          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              color: '#fff',
              lineHeight: 1.12,
              marginBottom: '18px',
              letterSpacing: '-0.5px',
            }}
          >
            Unlock Your{' '}
            <span style={{ color: '#fbbf24', position: 'relative' }}>
              Potential
              <svg
                viewBox="0 0 260 20"
                style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '12px', overflow: 'visible' }}
                fill="none"
              >
                <path
                  d="M2 14 Q65 2 130 10 Q195 18 258 6"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
            <br />
            with Expert Courses
          </h1>

          <p
            className="animate-fade-up delay-200"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', lineHeight: 1.65, marginBottom: '36px' }}
          >
            Explore 500+ courses taught by world-class instructors.
            <br />
            Learn at your pace — earn certificates that open doors.
          </p>

          {/* ── Search Bar ── */}
          <div className="animate-fade-up delay-300" style={{ marginBottom: '20px' }}>
            <div
              className="search-bar-wrap"
              style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
                display: 'flex',
                alignItems: 'center',
                maxWidth: '640px',
                margin: '0 auto',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '0 12px 0 18px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search courses, skills, or instructors..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: '17px 0',
                  fontSize: '14px',
                  color: '#1f2937',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#9ca3af', padding: '0 8px', fontSize: '20px', lineHeight: 1,
                    flexShrink: 0,
                  }}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
              <button
                className="btn-primary"
                style={{ margin: '8px', padding: '10px 24px', borderRadius: '14px', fontSize: '14px', flexShrink: 0 }}
              >
                Search
              </button>
            </div>
          </div>

          {/* ── Trending ── */}
          <div
            className="animate-fade-up delay-400"
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', alignItems: 'center' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px' }}>
              🔥 TRENDING
            </span>
            {TRENDING.map(t => (
              <button key={t} className="trending-pill" onClick={() => setSearchQuery(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ── Stats Grid ── */}
        <div
          className="animate-fade-up delay-500"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '14px',
            marginTop: '52px',
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="stat-card">
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  fontSize: '22px',
                  color: '#fff',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.52)', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
