// CategoryBar.jsx
import { CATEGORIES } from '../data/courses'

export default function CategoryBar({ activeCategory, setActiveCategory }) {
  return (
    <div
      style={{
        background: '#fff',
        borderBottom: '1px solid rgba(229,231,235,0.8)',
        position: 'sticky',
        top: '68px',
        zIndex: 90,
        boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div className="hide-scrollbar" style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '10px 0' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.name}
              className={`cat-pill ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <span style={{ fontSize: '15px' }}>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
