import { MoviesResult, Params } from '@/types'
import { Card, EmptyData } from '.'
export interface SearchListProps {
 movies: MoviesResult[],
 searchParams: Params
}

const SearchList = ({ movies, searchParams }: SearchListProps) => {
  const params = searchParams.query

  return (
    <>
    { movies.length > 0
    ? (<div className="p-3 mt-8 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        { movies.map((movie: MoviesResult) => (
          <Card movie={movie} key={movie.id} />
        )) }
      </div>) 
    : (
       <EmptyData params={params} />
      )}
    </>
  )
}

export default SearchList