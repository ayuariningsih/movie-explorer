import { CustomButton } from '..'
import { PaginationProps } from '@/types'

const Pagination = ({ pageNumber, totalPages, handleClickPrevious, handleClickNext }: PaginationProps) => {
  return (
    <div className="flex gap-2 justify-between mt-5">
            { pageNumber > 1 
            ? (
              <CustomButton
                title="Previous"
                btnType="button"
                containerStyles="bg-light-blue text-light text-sm font-bold rounded-full hover:bg-light-blue/50"
                handleClick={() => handleClickPrevious()} />
              )
            : (
              <div className="min-w-100px"></div>
            )}

            <h6 className="text-bold">{pageNumber} / {totalPages}</h6>

            { totalPages > pageNumber 
            ? (
                <CustomButton
                title="Next"
                btnType="button"
                containerStyles="bg-light-blue text-light text-sm font-bold rounded-full hover:bg-light-blue/50"
                handleClick={() => handleClickNext()} />
              )
            : (
              <div className="min-w-100px"></div>
            )}
           
          </div>
  )
}

export default Pagination