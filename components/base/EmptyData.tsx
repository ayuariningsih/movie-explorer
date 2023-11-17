import Image from 'next/image'

const EmptyData = ({ params = '' }) => {
  return (
    <>
    { params && (
      <div className="py-[125px]">
        <Image
          className="mx-auto"
          priority
          src='/no-data.svg'
          width={300}
          height={300}
          alt="empty data"
        />
        <h1 className="text-3xl font-extrabold text-center">Couldn't find "{params}"</h1>
        <h2 className="text-xl font-normal text-center">Try searching something else or try with a different spelling</h2>
      </div>
    )}
    </>
  )
}

export default EmptyData