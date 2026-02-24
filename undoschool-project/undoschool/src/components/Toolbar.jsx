// Toolbar.jsx
import { SORT_OPTIONS, LEVELS, PRICES, RATINGS } from '../data/courses'

function MobileFilterPanel({ level, setLevel, price, setPrice, ratingFilter, setRatingFilter }) {
  const sections = [
    { title: 'Level',  options: LEVELS,  active: level,        onChange: setLevel },
    { title: 'Price',  options: PRICES,  active: price,        onChange: setPrice },
    { title: 'Rating', options: RATINGS, active: ratingFilter,  onChange: setRatingFilter },
  ]
  return (
    <div
      className="animate-slide-down"
      style={{
        background: '#fff',
        borderRadius: '20px',
        border: '1.5px solid #e5e7eb',
        padding: '20px',
        marginBottom: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '20px',
      }}
    >
      {sections.map(({ title, options, active, onChange }) => (
        <div key={title}>
          <p style={{ fontSize: '12px', fontWeight: 800, color: '#111827', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
      ))}
    </div>
  )
}

export default function Toolbar({
  sorted, searchQuery, setSearchQuery,
  sortBy, setSortBy,
  view, setView,
  level, setLevel,
  price, setPrice,
  ratingFilter, setRatingFilter,
  mobileFilterOpen, setMobileFilterOpen,
}) {
  return (
    <>
      {/* Toolbar Row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>

        {/* Left: title + search context */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#111827', marginBottom: '4px', fontFamily: "'Syne', sans-serif" }}>
            Browse Courses
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#9ca3af', marginLeft: '8px', fontFamily: "'DM Sans', sans-serif" }}>
              ({sorted.length} result{sorted.length !== 1 ? 's' : ''})
            </span>
          </h2>
          {searchQuery && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#6b7280' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              Showing results for{' '}
              <span style={{ color: '#7c3aed', fontWeight: 700 }}>"{searchQuery}"</span>
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  fontSize: '11px', color: '#ef4444', background: '#fff1f2',
                  border: 'none', cursor: 'pointer', borderRadius: '6px',
                  padding: '1px 7px', fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                }}
              >
                ✕ Clear
              </button>
            </div>
          )}
        </div>

        {/* Right: controls */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Mobile filter toggle */}
          <button
            className="sidebar-desktop"
            style={{
              display: 'none',
              alignItems: 'center', gap: '6px',
              fontSize: '13px', fontWeight: 700,
              color: '#374151', background: '#fff',
              border: '1.5px solid #e5e7eb', padding: '8px 13px',
              borderRadius: '12px', cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 6h16M7 12h10M10 18h4"/>
            </svg>
            Filters
            {mobileFilterOpen && <span style={{ color: '#7c3aed' }}>▲</span>}
          </button>

          {/* Sort */}
          <select
            className="sort-select"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
          </select>

          {/* View toggle */}
          <div className="view-toggle">
            <button
              className={`view-btn ${view === 'grid' ? 'active' : ''}`}
              onClick={() => setView('grid')}
              title="Grid view"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/>
              </svg>
            </button>
            <button
              className={`view-btn ${view === 'list' ? 'active' : ''}`}
              onClick={() => setView('list')}
              title="List view"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="9"  y1="6"  x2="21" y2="6"  />
                <line x1="9"  y1="12" x2="21" y2="12" />
                <line x1="9"  y1="18" x2="21" y2="18" />
                <circle cx="4" cy="6"  r="1.5" fill="currentColor" stroke="none"/>
                <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                <circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Panel */}
      {mobileFilterOpen && (
        <MobileFilterPanel
          level={level} setLevel={setLevel}
          price={price} setPrice={setPrice}
          ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}
        />
      )}

      <style>{`
        @media (max-width: 1023px) {
          .sidebar-desktop[style*="display: none"] {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
