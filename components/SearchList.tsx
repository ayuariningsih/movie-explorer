import { MoviesResult } from '@/types'
import { Card } from '.'

export interface SearchListProps {
 movies: MoviesResult[]
}

const SearchList = ({ movies }: SearchListProps) => {
  return (
    <div className="rounded-xl bg-white p-3 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ring-white/60 ring-offset- focus:outline-none focus:ring-2">
      { movies.map((movie: MoviesResult) => (
        <Card movie={movie} key={movie.id} />
      )) }
    </div>
  )
}

export default SearchList