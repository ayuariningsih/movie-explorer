import { render, screen } from '@testing-library/react'
import Loading from '../Loading'

describe('Loading', () => {

  it('should render the loading component', () => {
      render(<Loading />) // ARRANGE

      //ACT
      const loading = screen.getAllByTestId('loading')[0]

      expect(loading).toBeInTheDocument()// ASSERT
  })
})