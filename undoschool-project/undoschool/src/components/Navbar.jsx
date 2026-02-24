// Navbar.jsx
import { useState } from "react";

const NAV_LINKS = [
  { title: "Browse Courses", id: "browse-courses" },
  { title: "My Learning", id: "my-learning" },
  { title: "Teach", id: "teach" },
  { title: "Blog", id: "blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="bg-white border-b border-gray-100"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 20px rgba(124,58,237,0.06)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
          {/* ── Logo ── */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "11px",
                background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(124,58,237,0.3)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 900,
                fontSize: "20px",
                color: "#1a0845",
                letterSpacing: "-0.5px",
                lineHeight: 1,
              }}
            >
              undo<span style={{ color: "#7c3aed" }}>school</span>
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <div className="nav-links-desktop" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {NAV_LINKS.map(link => (
              <a key={link.id} href="#" className="nav-link" onClick={handleNavClick}>
                {link.title}
              </a>
            ))}
          </div>

          {/* ── Auth Buttons ── */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
              className="login-desktop btn-outline"
              style={{ fontSize: "14px", fontWeight: 700, color: "#7c3aed", padding: "9px 14px", borderRadius: "11px", border: "none", background: "none" }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f5f3ff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
            >
              Log In
            </button>
            <button
              className="btn-primary"
              style={{ fontSize: "14px", padding: "9px 20px", borderRadius: "12px" }}
            >
              Sign Up Free ✦
            </button>

            {/* Mobile hamburger */}
            <button
              style={{
                display: "none",
                background: "none", border: "none", cursor: "pointer",
                padding: "6px", borderRadius: "8px", color: "#374151",
              }}
              className="mobile-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {menuOpen
                  ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
                  : <><line x1="3" y1="6"  x2="21" y2="6"  /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="animate-slide-down" style={{ borderTop: "1px solid #f3f4f6", padding: "12px 0", display: "none" }} id="mobile-menu">
            {NAV_LINKS.map(link => (
              <a key={link.id} href="#" className="nav-link" style={{ display: "block", padding: "10px 4px", fontSize: "15px" }}>
                {link.title}
              </a>
            ))}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #f3f4f6" }}>
              <button className="btn-outline" style={{ flex: 1, fontSize: "14px", padding: "10px", borderRadius: "11px", border: "1.5px solid #e5e7eb", color: "#374151" }}>Log In</button>
              <button className="btn-primary" style={{ flex: 1, fontSize: "14px", padding: "10px", borderRadius: "11px" }}>Sign Up</button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 639px) {
          .mobile-hamburger { display: flex !important; }
          #mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
