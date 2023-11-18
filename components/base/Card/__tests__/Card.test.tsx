import { render, screen } from '@testing-library/react'
import Card from '../Card'
import { MoviesResult } from '@/types'

const mockMovie: MoviesResult = {
  id: 1001,
  adult: false,
  backdrop_path: 'fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
  genre_ids: [4, 7],
  original_language: 'en',
  original_title: 'Ice Cold Murder',
  title: 'Ice Cold Murder',
  overview: 'This is a documentary film',
  popularity: 7.655,
  poster_path: 'ice-cold-murder-image',
  release_date: '',
  video: false,
  vote_average: 6.55,
  vote_count: 0
}

describe('Card', () => {
  
  it('should render the backdrop path as background image', () => {
    const src = `https://image.tmdb.org/t/p/original${mockMovie.backdrop_path}`
    
    render(<Card movie={mockMovie}/>) // ARRANGE

    //ACT
    const card = screen.getByTestId('card')

    expect(card).toHaveStyle(`background-image: url(${src});`)// ASSERT
  })

  it('should render the movie title', () => {
      render(<Card movie={mockMovie}/>) // ARRANGE

      //ACT
      const title = screen.getByRole('heading', {
          name: `${mockMovie.title}`
      })

      expect(title).toBeInTheDocument()// ASSERT
  })

  // render year and language
  // render genres

  it('should render the vote average movie', () => {
      render(<Card movie={mockMovie}/>) // ARRANGE

      //ACT
      const voteAverage = screen.getByTestId('vote-average')

      expect(voteAverage).not.toHaveAccessibleName(mockMovie.vote_average.toFixed(1))// ASSERT
  })
})