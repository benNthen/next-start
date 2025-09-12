import NewsList from '@/components/news-list'
import Link from 'next/link'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news'

export default function FilteredNewsPage({ params }) {
  const filter = params.filter

  //notations to access first stored value
  //longer alt. code is tertinary operator is filter ? filter [0] : undefined
  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news
  let links = getAvailableNewsYears()

  // Conditional - shows news if a year is selected among the choices
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }

  //  Conditional - displays the specific news for a specific year and month
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  // Conditional - otherwise display this message if nothing is picked

  let newsContent = <p>Select a year to view news.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`

              return (
                <li key={link}>
                  <Link href={`/archive/${link}`}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
