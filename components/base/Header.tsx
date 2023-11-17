import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
  return (
    <Link
      href={{
        pathname: '/',
        query: { query: '', movie_type: 'popular' },
      }} 
      replace
      className="py-8"
    >
      <div className="flex flex-wrap gap-2">
        <h1 className="text-2xl font-extrabold self-end">Movie Explorer</h1>
        <Image
          className=""
          priority
          src='/movie-icon.png'
          width={60}
          height={0}
          alt="movie explorer icon"
        />
      </div>
    </Link>
  )
}

export default Header