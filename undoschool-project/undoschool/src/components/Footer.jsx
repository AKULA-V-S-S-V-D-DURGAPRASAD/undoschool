// Footer.jsx

const COLUMNS = [
  {
    title: 'Learn',
    links: ['Browse Courses', 'My Learning', 'Certifications', 'Free Courses', 'Live Classes'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers 🔥', 'Blog', 'Press', 'Partnerships'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
]

const SOCIALS = [
  { label: 'Twitter / X',  icon: '𝕏'  },
  { label: 'LinkedIn',     icon: 'in' },
  { label: 'Instagram',    icon: '◻' },
  { label: 'YouTube',      icon: '▶' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0c0c1d', color: '#6b7280', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr repeat(3, auto)', gap: '48px', marginBottom: '48px', flexWrap: 'wrap' }}>

          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '19px', color: '#fff', letterSpacing: '-0.3px' }}>
                undo<span style={{ color: '#a78bfa' }}>school</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.75, marginBottom: '20px', maxWidth: '220px' }}>
              Learn from the best. Grow faster.<br/>Build the future you deserve.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href="#"
                  title={s.label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '9px',
                    background: '#1a1a30',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 800, color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2d1f6e'; e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1a1a30'; e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map(col => (
            <div key={col.title}>
              <h4 style={{ color: '#fff', fontWeight: 800, fontSize: '12px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '12px', color: '#4b5563' }}>
            © 2024 UndoSchool Inc. All rights reserved. Made with ❤️ in India 🇮🇳
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map(l => (
              <a key={l} href="#" className="footer-link" style={{ fontSize: '12px' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 479px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
