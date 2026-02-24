// CTABanner.jsx

const PERKS = [
  { icon: '💰', text: 'Keep 80% revenue' },
  { icon: '🗓️', text: 'Flexible schedule' },
  { icon: '🌍', text: 'Global audience' },
  { icon: '📈', text: 'Analytics dashboard' },
]

export default function CTABanner() {
  return (
    <section className="cta-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <span
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '999px',
            padding: '6px 18px',
            fontSize: '12px',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '22px',
            letterSpacing: '0.3px',
          }}
        >
          💸 Earn while you teach
        </span>

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: '#fff',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          Become an Instructor on UndoSchool
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '16px', marginBottom: '36px', lineHeight: 1.65 }}>
          Join 200+ expert instructors already earning on UndoSchool.
          Share your knowledge with 50,000+ eager learners worldwide.
        </p>

        {/* Perks row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '36px' }}>
          {PERKS.map(p => (
            <div
              key={p.text}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '999px', padding: '7px 14px',
                fontSize: '13px', color: 'rgba(255,255,255,0.88)', fontWeight: 600,
              }}
            >
              <span>{p.icon}</span>
              {p.text}
            </div>
          ))}
        </div>

        <button
          style={{
            background: '#fff',
            color: '#7c3aed',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: '15px',
            border: 'none',
            borderRadius: '18px',
            padding: '16px 40px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(0,0,0,0.22)',
            transition: 'all 0.22s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.22)'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={e => e.currentTarget.style.transform = 'translateY(-3px)'}
        >
          Start Teaching Today →
        </button>
      </div>
    </section>
  )
}
