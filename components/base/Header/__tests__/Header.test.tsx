import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {

  it('should render the "Movie Explorer" heading', () => {
      render(<Header />) // ARRANGE

      //ACT
      const header = screen.getByRole('heading', {
          name: 'Movie Explorer'
      })

      expect(header).toBeInTheDocument()// ASSERT
  })

  it('should render the "movie-icon.png" image', () => {
    const alt = "movie explorer icon"
    const src = "movie-icon.png"
    
    render(<Header />) // ARRANGE

    //ACT
    const img = screen.getByAltText(alt)

    expect(img.getAttribute('src')).toContain(src)// ASSERT
  })
})