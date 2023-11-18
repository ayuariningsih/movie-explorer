import { render, screen } from '@testing-library/react'
import EmptyData from '../EmptyData'

const params = "Fast and Furious"

describe('EmptyData', () => {
  
  it('should render the "no-data.svg" image', () => {
    const alt = "empty data"
    const src = "no-data.svg"
    
    render(<EmptyData params={params} />) // ARRANGE

    //ACT
    const img = screen.getByAltText(alt)

    expect(img.getAttribute('src')).toContain(src)// ASSERT
  })

  it('should render the "Could`nt find (something)" heading', () => {
      render(<EmptyData params={params} />) // ARRANGE

      //ACT
      const header = screen.getByRole('heading', {
          name: `Couldn't find "${params}"`
      })

      expect(header).toBeInTheDocument()// ASSERT
  })

  it('should render the "Try searching something else or try with a different spelling" heading', () => {
    render(<EmptyData params={params} />) // ARRANGE

    //ACT
    const header = screen.getByRole('heading', {
        name: 'Try searching something else or try with a different spelling'
    })

    expect(header).toBeInTheDocument()// ASSERT
})
})