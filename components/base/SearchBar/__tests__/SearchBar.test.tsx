import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../SearchBar'

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => [],
  useSearchParams: () => new URLSearchParams({ query: '' }),
}))

const mockHandleSearch = jest.fn()
const placeholder = 'Search'

describe('SearchBar', () => {

  describe('Render', () => {

    it('should render the input', () => {
      render(<SearchBar placeholder={placeholder} handleSearch={mockHandleSearch}/>) // ARRANGE

      const input = screen.getByPlaceholderText(placeholder) //ACT

      expect(input).toBeInTheDocument()// ASSERT
    })

    it('should render the search icon', () => {
      render(<SearchBar placeholder={placeholder} handleSearch={mockHandleSearch}/>) // ARRANGE

      const icon = screen.getByTestId('search-icon') //ACT

      expect(icon).toBeInTheDocument() // ASSERT
    })

    it('should render the clear icon', async () => {
      render(<SearchBar placeholder={placeholder} handleSearch={mockHandleSearch}/>) // ARRANGE

      //ACT
      const searchValue = "fast and furious"
      const input = screen.getByPlaceholderText(placeholder)
      await userEvent.type(input, searchValue)
      const icon = screen.getByTestId('search-icon') 

      expect(icon).toBeInTheDocument() // ASSERT
    })
  })

  describe('Behaviour', () => {

    it('should be able to add text to the input', async () => {
      render(<SearchBar placeholder={placeholder} handleSearch={mockHandleSearch}/>) // ARRANGE

      const searchValue = "fast and furious"
      const input = screen.getByPlaceholderText(placeholder) //ACT
      await userEvent.type(input, searchValue)

      expect(input).toHaveValue(searchValue)// ASSERT
    })

    it('should be able to clear text to the input', async () => {
      render(<SearchBar placeholder={placeholder} handleSearch={mockHandleSearch}/>) // ARRANGE

      //ACT
      let searchValue = "fast and furious"
      const clear = (val: string) => val = ''
      const input = screen.getByPlaceholderText(placeholder)
      await userEvent.type(input, searchValue)
      const icon = screen.getByTestId('search-icon')
      await userEvent.click(icon)
      await clear(searchValue)

      expect(input).toHaveValue(searchValue)// ASSERT
    })
  })
})