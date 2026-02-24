// FilterSidebar.jsx
import { LEVELS, PRICES, RATINGS } from '../data/courses'

function FilterGroup({ title, options, active, onChange }) {
  return (
    <div style={{ marginBottom: '22px' }}>
      <p style={{ fontSize: '12px', fontWeight: 800, color: '#111827', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
        {title}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {options.map(opt => (
          <button
            key={opt}
            className={`radio-btn ${active === opt ? 'active' : ''}`}
            onClick={() => onChange(opt)}
          >
            <span className="radio-dot" />
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function FilterSidebar({ level, setLevel, price, setPrice, ratingFilter, setRatingFilter, resetFilters, hasActiveFilters, resultCount }) {
  return (
    <aside className="sidebar-desktop" style={{ width: '220px', flexShrink: 0 }}>
      <div
        style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 2px 14px rgba(0,0,0,0.04)',
          border: '1.5px solid rgba(229,231,235,0.6)',
          position: 'sticky',
          top: '142px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '15px', color: '#111827' }}>
            🔧 Filters
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              style={{
                fontSize: '12px', color: '#7c3aed', fontWeight: 700,
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                padding: '2px 6px', borderRadius: '6px',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f3ff'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              Reset All
            </button>
          )}
        </div>

        <FilterGroup title="Level"  options={LEVELS}   active={level}         onChange={setLevel} />
        <FilterGroup title="Price"  options={PRICES}   active={price}         onChange={setPrice} />
        <FilterGroup title="Rating" options={RATINGS}  active={ratingFilter}  onChange={setRatingFilter} />

        {/* Active filter badge */}
        {hasActiveFilters && (
          <div
            className="animate-scale-in"
            style={{
              background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
              border: '1px solid #ddd6fe',
              borderRadius: '12px',
              padding: '10px 12px',
              fontSize: '12px',
              color: '#6d28d9',
              fontWeight: 700,
              marginTop: '4px',
            }}
          >
            ✓ {resultCount} course{resultCount !== 1 ? 's' : ''} match your filters
          </div>
        )}
      </div>
    </aside>
  )
}
