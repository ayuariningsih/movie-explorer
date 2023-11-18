import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination from '../Pagination'

const mockHandleClickNext = jest.fn()
const mockHandleClickPrevious = jest.fn()

describe('Pagination', () => {

  describe('Render', () => {
    
    it('should render the previous button, if page number > 1', () => {
      const totalPages = 10
      const pageNumber = 2
  
      render(
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages} 
          handleClickNext={mockHandleClickNext}
          handleClickPrevious={mockHandleClickPrevious}
        />
      ) // ARRANGE

      //ACT
      const button = screen.getByRole('button', {
        name: 'Previous'
      })
  
      expect(button).toBeInTheDocument()// ASSERT
    })

    it('should render the page information', () => {
      const totalPages = 10
      const pageNumber = 2
  
      render(
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages} 
          handleClickNext={mockHandleClickNext(pageNumber + 1)}
          handleClickPrevious={mockHandleClickPrevious}
        />
      ) // ARRANGE

      //ACT
      const pageInfo = screen.getByRole('heading', {
        name: `${pageNumber} / ${totalPages}`
      })

      expect(pageInfo).toBeInTheDocument()// ASSERT
    })

    it('should not render the next button, if page number < total pages', () => {
      const totalPages = 10
      const pageNumber = 1
  
      render(
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages} 
          handleClickNext={mockHandleClickNext}
          handleClickPrevious={mockHandleClickPrevious}
        />
      ) // ARRANGE

      //ACT
      const button = screen.getByRole('button', {
        name: 'Next'
      })
  
      expect(button).toBeInTheDocument()// ASSERT
    })
  })

  describe('Behavior', () => {

    it('should move to next page, when next btn is clicked', async () => {
      const totalPages = 10
      let pageNumber = 1
  
      render(
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages} 
          handleClickNext={mockHandleClickNext}
          handleClickPrevious={mockHandleClickPrevious}
        />
      ) // ARRANGE

      //ACT
      const button = screen.getByRole('button', {
        name: 'Next'
      })

      const pageInfo = screen.getByRole('heading', {
        name: `${pageNumber} / ${totalPages}`
      })

      await userEvent.click(button)

      expect(pageInfo).toHaveTextContent(`${pageNumber} / ${totalPages}`)
    })

    it('should move to previous page, when previous btn is clicked', async () => {
      const totalPages = 10
      let pageNumber = 2
  
      render(
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages} 
          handleClickNext={mockHandleClickNext}
          handleClickPrevious={mockHandleClickPrevious}
        />
      ) // ARRANGE

      //ACT
      const button = screen.getByRole('button', {
        name: 'Previous'
      })

      const pageInfo = screen.getByRole('heading', {
        name: `${pageNumber} / ${totalPages}`
      })

      await userEvent.click(button)

      expect(pageInfo).toHaveTextContent(`${pageNumber} / ${totalPages}`)
    })
  })
  
})