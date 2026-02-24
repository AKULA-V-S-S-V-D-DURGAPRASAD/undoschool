import { useState, useMemo, useCallback } from 'react'
import { COURSES } from '../data/courses'

const RATING_MAP = {
  'Any Rating': 0,
  '4.5 & Up':   4.5,
  '4.0 & Up':   4.0,
  '3.5 & Up':   3.5,
}

export function useFilter() {
  const [searchQuery,   setSearchQuery]   = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [level,          setLevel]          = useState('All Levels')
  const [price,          setPrice]          = useState('Any Price')
  const [ratingFilter,   setRatingFilter]   = useState('Any Rating')
  const [sortBy,         setSortBy]         = useState('Most Popular')
  const [visibleCount,   setVisibleCount]   = useState(9)

  const resetFilters = useCallback(() => {
    setLevel('All Levels')
    setPrice('Any Price')
    setRatingFilter('Any Rating')
  }, [])

  const resetAll = useCallback(() => {
    setSearchQuery('')
    setActiveCategory('All')
    resetFilters()
    setVisibleCount(9)
  }, [resetFilters])

  const filtered = useMemo(() => {
    const q    = searchQuery.toLowerCase()
    const minR = RATING_MAP[ratingFilter] ?? 0

    return COURSES.filter(c => {
      const matchSearch =
        !q ||
        c.title.toLowerCase().includes(q)      ||
        c.instructor.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)   ||
        c.skills.some(s => s.toLowerCase().includes(q))

      const matchCat   = activeCategory === 'All' || c.category === activeCategory
      const matchLevel = level === 'All Levels'   || c.level === level || c.level === 'All Levels'
      const matchPrice =
        price === 'Any Price' ||
        (price === 'Free' && c.price === 0)   ||
        (price === 'Paid' && c.price > 0)

      const matchRating = c.rating >= minR

      return matchSearch && matchCat && matchLevel && matchPrice && matchRating
    })
  }, [searchQuery, activeCategory, level, price, ratingFilter])

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'Most Popular':      return b.students - a.students
        case 'Highest Rated':     return b.rating   - a.rating
        case 'Newest':            return b.id       - a.id
        case 'Price: Low to High': return a.price   - b.price
        case 'Price: High to Low': return b.price   - a.price
        default: return 0
      }
    })
  }, [filtered, sortBy])

  const visible = sorted.slice(0, visibleCount)
  const hasMore = visibleCount < sorted.length
  const hasActiveFilters = level !== 'All Levels' || price !== 'Any Price' || ratingFilter !== 'Any Rating'

  const loadMore = useCallback(() => setVisibleCount(v => v + 6), [])

  const handleSearch = useCallback((q) => {
    setSearchQuery(q)
    setVisibleCount(9)
  }, [])

  const handleCategory = useCallback((cat) => {
    setActiveCategory(cat)
    setVisibleCount(9)
  }, [])

  return {
    // state
    searchQuery,   setSearchQuery: handleSearch,
    activeCategory, setActiveCategory: handleCategory,
    level,         setLevel,
    price,         setPrice,
    ratingFilter,  setRatingFilter,
    sortBy,        setSortBy,
    // derived
    sorted, visible, hasMore, hasActiveFilters,
    // actions
    resetFilters, resetAll, loadMore,
  }
}
