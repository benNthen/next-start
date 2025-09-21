/* News Page - shows a list of news item links that lead to a News Detail page*/

import NewsList from '@/components/news-list'
import { getAllNews } from '@/lib/news'

export default async function NewsPage() {
  const news = getAllNews()

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  )
}
