// CourseGrid.jsx
import { useState } from 'react'
import CourseCard from './CourseCard'

function EmptyState({ onReset }) {
  return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔍</div>
      <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#374151', marginBottom: '8px', fontFamily: "'Syne', sans-serif" }}>
        No courses found
      </h3>
      <p style={{ color: '#9ca3af', fontSize: '15px', marginBottom: '28px' }}>
        Try adjusting your search terms or clearing some filters.
      </p>
      <button
        className="btn-primary"
        style={{ fontSize: '14px', padding: '12px 28px', borderRadius: '14px' }}
        onClick={onReset}
      >
        Reset All Filters
      </button>
    </div>
  )
}

export default function CourseGrid({ visible, sorted, view, onReset, hasMore, onLoadMore }) {
  const [wishlisted, setWishlisted] = useState(new Set())

  const toggleWishlist = (id) => {
    setWishlisted(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  if (sorted.length === 0) {
    return <EmptyState onReset={onReset} />
  }

  return (
    <>
      {/* Grid or List */}
      <div
        style={
          view === 'grid'
            ? {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }
        }
      >
        {visible.map((course, i) => (
          <div
            key={course.id}
            className="animate-fade-up"
            style={{ animationDelay: `${Math.min(i * 55, 400)}ms` }}
          >
            <CourseCard
              course={course}
              view={view}
              wishlisted={wishlisted.has(course.id)}
              onWishlist={toggleWishlist}
            />
          </div>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button className="load-more-btn" onClick={onLoadMore}>
            Load More Courses
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <p style={{ marginTop: '10px', fontSize: '12px', color: '#9ca3af' }}>
            Showing {visible.length} of {sorted.length} courses
          </p>
        </div>
      )}

      {/* All shown */}
      {!hasMore && sorted.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '13px', background: '#f9fafb', padding: '10px 20px', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            You've seen all {sorted.length} courses
          </div>
        </div>
      )}
    </>
  )
}
