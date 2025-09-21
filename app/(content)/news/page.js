/* News Page - shows a list of news item links that lead to a News Detail page*/
'use client'

import { useEffect, useState } from 'react'

import NewsList from '@/components/news-list'

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [news, setNews] = useState()

  // Handles the request to fetch the data
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true)
      const response = await fetch('http://localhost:3000/news') // API address

      // Error handling if no data received
      if (!response.ok) {
        setError('Failed to fetch news.')
        setIsLoading(false)
        return
      }

      // Displayed on the console terminal to test if data is present or not
      const text = await response.text()
      console.log('Raw response:', text)

      // Error handling if data received is JSON or not
      try {
        const news = JSON.parse(text)
        setNews(news) //store news data into setNews state
      } catch (err) {
        setError('Response was not valid JSON')
      }
      setIsLoading(false) // then turn off setIsLoading
    }

    fetchNews()
  }, [])

  // Displayed while data is not yet received or no status to display
  if (isLoading) {
    return <p>Loading...</p>
  }

  // Displays error message if error is true
  if (error) {
    return <p>{error}</p>
  }

  let newsContent

  // Displays data inside the NewsList component if it has been received
  if (news && Array.isArray(news)) {
    newsContent = <NewsList news={news} />
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  )
}
