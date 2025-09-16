/* Image Page - shows the current page image clicked*/
'use client'

import { DUMMY_NEWS } from '@/dummy-news'
import { notFound, useRouter } from 'next/navigation'

export default function InterceptedImagePage({ params }) {
  const router = useRouter() // get useRouter hook - note: only works inside client components so 'use client' atop

  const newsItemSlug = params.slug
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug)

  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  )
}
