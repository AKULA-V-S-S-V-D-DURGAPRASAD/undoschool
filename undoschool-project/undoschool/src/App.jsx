// App.jsx
import { useState } from 'react'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import CategoryBar   from './components/CategoryBar'
import FilterSidebar from './components/FilterSidebar'
import Toolbar       from './components/Toolbar'
import CourseGrid    from './components/CourseGrid'
import CTABanner     from './components/CTABanner'
import Footer        from './components/Footer'

import { useFilter } from './hooks/useFilter'

export default function App() {
  const [view,             setView]             = useState('grid')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const {
    searchQuery,    setSearchQuery,
    activeCategory, setActiveCategory,
    level,          setLevel,
    price,          setPrice,
    ratingFilter,   setRatingFilter,
    sortBy,         setSortBy,
    sorted, visible, hasMore, hasActiveFilters,
    resetFilters, resetAll, loadMore,
  } = useFilter()

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff' }}>

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Hero / Search ── */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* ── Category Pills ── */}
      <CategoryBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* ── Main Layout: Sidebar + Listing ── */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 24px 72px', display: 'flex', gap: '32px', alignItems: 'flex-start' }}>

        {/* Sidebar (hidden on mobile via CSS class) */}
        <FilterSidebar
          level={level}               setLevel={setLevel}
          price={price}               setPrice={setPrice}
          ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}
          resetFilters={resetFilters}
          hasActiveFilters={hasActiveFilters}
          resultCount={sorted.length}
        />

        {/* Right side: Toolbar + Cards */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Toolbar
            sorted={sorted}
            searchQuery={searchQuery}       setSearchQuery={setSearchQuery}
            sortBy={sortBy}                 setSortBy={setSortBy}
            view={view}                     setView={setView}
            level={level}                   setLevel={setLevel}
            price={price}                   setPrice={setPrice}
            ratingFilter={ratingFilter}     setRatingFilter={setRatingFilter}
            mobileFilterOpen={mobileFilterOpen}
            setMobileFilterOpen={setMobileFilterOpen}
          />

          <CourseGrid
            visible={visible}
            sorted={sorted}
            view={view}
            onReset={resetAll}
            hasMore={hasMore}
            onLoadMore={loadMore}
          />
        </div>
      </main>

      {/* ── Instructor CTA ── */}
      <CTABanner />

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
