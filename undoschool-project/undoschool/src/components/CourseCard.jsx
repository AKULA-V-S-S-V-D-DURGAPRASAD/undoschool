// CourseCard.jsx
import { useState } from 'react'
import StarRating from './StarRating'

export default function CourseCard({ course, view, wishlisted, onWishlist }) {
  const [hovered, setHovered] = useState(false)

  const isList = view === 'list'

  return (
    <div
      className="course-card"
      style={{ display: isList ? 'flex' : 'block', flexDirection: isList ? 'row' : undefined }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width:      isList ? '220px' : '100%',
          minWidth:   isList ? '220px' : undefined,
          height:     isList ? '100%' : '192px',
          minHeight:  isList ? '165px' : undefined,
          flexShrink: 0,
        }}
      >
        <img
          src={course.image}
          alt={course.title}
          className="card-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="card-overlay" />

        {/* Tag badge */}
        {course.tag && (
          <span
            style={{
              position: 'absolute', top: '12px', left: '12px',
              fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: '999px',
              background: course.tagColor, color: '#1a0845',
              boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
            }}
          >
            {course.tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          className={`wish-btn ${wishlisted ? 'active' : ''}`}
          onClick={e => { e.stopPropagation(); onWishlist(course.id) }}
          title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>

        {/* Hover play icon */}
        <div
          style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
          }}
        >
          <div
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              transform: hovered ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#7c3aed">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>

        {/* Category + Level */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '999px', background: '#f5f3ff', color: '#6d28d9' }}>
            {course.category}
          </span>
          <span style={{ fontSize: '11px', fontWeight: 600, padding: '2px 10px', borderRadius: '999px', background: '#f3f4f6', color: '#6b7280' }}>
            {course.level}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: isList ? '15px' : '14px',
            fontWeight: 800,
            color: hovered ? '#6d28d9' : '#111827',
            lineHeight: 1.4,
            marginBottom: '6px',
            transition: 'color 0.2s ease',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {course.title}
        </h3>

        {/* Instructor */}
        <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '10px', fontWeight: 500 }}>
          by{' '}
          <span style={{ color: '#7c3aed', fontWeight: 700 }}>{course.instructor}</span>
        </p>

        {/* Rating row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: '#d97706' }}>{course.rating}</span>
          <StarRating rating={course.rating} size={13} />
          <span style={{ fontSize: '11px', color: '#9ca3af' }}>({course.reviews.toLocaleString()})</span>
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '14px', fontSize: '11px', color: '#9ca3af', marginBottom: '10px', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            {course.duration}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            {course.lessons} lessons
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
            </svg>
            {(course.students / 1000).toFixed(0)}k students
          </span>
        </div>

        {/* Skills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '14px' }}>
          {course.skills.slice(0, 3).map(s => (
            <span key={s} className="skill-chip">{s}</span>
          ))}
          {course.skills.length > 3 && (
            <span style={{ fontSize: '11px', color: '#9ca3af', alignSelf: 'center' }}>
              +{course.skills.length - 3} more
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <div>
            <span style={{ fontSize: '18px', fontWeight: 900, color: '#111827' }}>
              {course.price === 0 ? '🎁 Free' : `₹${course.price.toLocaleString()}`}
            </span>
            {course.price > 0 && course.originalPrice && (
              <span style={{ fontSize: '12px', color: '#9ca3af', textDecoration: 'line-through', marginLeft: '6px' }}>
                ₹{course.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button className="enroll-btn">
            Enroll Now →
          </button>
        </div>
      </div>
    </div>
  )
}
