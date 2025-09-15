/* Image Page - shows the current page image clicked*/

import { DUMMY_NEWS } from '@/dummy-news'
import { notFound } from 'next/navigation'

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug)

  // Handles error to fall back to if newsItem that user navigates to if not found
  if (!newsItem) {
    notFound()
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  )
}
