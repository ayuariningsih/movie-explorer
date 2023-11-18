import { render, screen } from '@testing-library/react'
import CustomButton from '../CustomButton'

const mockHandleClick = jest.fn()

describe('CustomButton', () => {
  
  it('should render the title of button', () => {
    render(<CustomButton title="Next" handleClick={mockHandleClick} />) // ARRANGE

    //ACT
    const title = screen.getByRole('button', {
      name: 'Next'
    })

    expect(title).toBeInTheDocument()// ASSERT
  })
})