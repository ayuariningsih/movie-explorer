import { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { Tab } from '@headlessui/react'
import { Card } from '@/components'
import { MoviesResult } from '@/types'
import { MovieContext } from '@/app/page'
import { updateSearchParams } from '@/utils'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const List = () => {
  const router = useRouter()
  const { allMovies } = useContext(MovieContext)
  const [selectedIndex, setSelectedTabIndex] = useState(0)

  let categories = {
    Popular: allMovies,
    "Top Rated" : allMovies,
    Upcoming: allMovies,
  }

  async function handleTab () {
    let type = ''

    if (selectedIndex === 0) type = 'popular'
    else if (selectedIndex === 1)  type = 'top_rated'
    else if (selectedIndex === 2) type = 'upcoming'

    const query = { movie_type: type }
    const newPathname = updateSearchParams(query)
    router.push(newPathname)
  }

  useEffect(() => {
    handleTab()

    return () => {
      allMovies
    }
  }, [selectedIndex]) 
  
  
  return (
    <div className="w-full px-2 py-8 sm:px-0">
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedTabIndex(index)}>
        <Tab.List className="md:flex hidden space-x-1 rounded-full p-1 max-w-md">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-full py-2 text-md font-bold leading-5 text-light',
                  'ring-white/60 ring-offset-2 ring-offset-light-blue focus:outline-none focus:ring-2',
                  selected
                    ? 'text-white shadow bg-light-blue'
                    : 'text-light hover:bg-light-blue/50 hover:text-light-blue'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((movies, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'p-3 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4',
              )}
            >
                { movies.map((movie: MoviesResult) => (
                  <Card movie={movie} key={movie.id} />
                )) }
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default List