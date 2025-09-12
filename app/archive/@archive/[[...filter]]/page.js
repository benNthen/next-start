import NewsList from '@/components/news-list'
import Link from 'next/link'
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news'

export default function FilteredNewsPage({ params }) {
  const filter = params.filter
  console.log(filter) // you can see in terminal the current [year] we're in

  const links = getAvailableNewsYears()

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
