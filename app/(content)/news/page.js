/* News Page - shows a list of news item links that lead to a News Detail page*/

import NewsList from '@/components/news-list'

export default async function NewsPage() {
  const response = await fetch('http://localhost:3000/news') // API address

  if (!response.ok) {
    throw new Error('Failed to fetch news.')
  }

  const text = await response.text()
  console.log('Raw response:', text)

  const news = JSON.parse(text)

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  )
}
