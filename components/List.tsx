import { useContext } from 'react'
import { Tab } from '@headlessui/react'
import { Card } from '@/components'
import { MoviesResult } from '@/types'
import { MovieContext } from '@/app/page'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const List = () => {
  const { upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies } = useContext(MovieContext)

  let categories = {
    Popular: popularMovies,
    "Now Playing": nowPlayingMovies,
    "Top Rated" : topRatedMovies,
    Upcoming: upcomingMovies,
  }

  return (
    <div className="w-full px-2 py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="md:flex hidden space-x-1 rounded-full p-1 max-w-md ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-full py-2.5 text-md font-bold leading-5 text-purple-700',
                  'ring-white/60 ring-offset-2 ring-offset-purple-700 focus:outline-none focus:ring-2',
                  selected
                    ? 'text-white shadow bg-purple-700'
                    : 'text-purple-500 hover:bg-purple-500/10 hover:text-purple-600'
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
                'rounded-xl bg-white p-3 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
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