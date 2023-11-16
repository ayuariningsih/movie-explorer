"use client"

import { CardProps } from '@/types'
import { findGenresByIds, getLanguage, getYear } from '@/utils'
import clsx from 'clsx'
import { MovieContext } from '@/app/page'
import { useContext } from 'react'

const Card = ({ movie }: CardProps) => {
  const { languages, genres } = useContext(MovieContext)
  const setLanguage = () => {
    const data = getLanguage(movie.original_language, languages)
    
    return data || "English"
  }

  const getGenres = () => {
    const data = findGenresByIds(movie.genre_ids, genres)
    
    return data || []
  }

  const imageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w300_and_h300_bestv2${movie.backdrop_path}` : "/no-image.png"

  return (
    <div
      style={{backgroundImage:`url(${imageUrl})`}}
      className={clsx('flex flex-col justify-end border-2 border-grey-900 p-5 shadow-md rounded-lg min-h-[370px] bg-no-repeat bg-[length:320px_200px] max-w-[320px]')}>
        <h1 className="font-bold text-xl text-gray-800 truncate">{ movie.title }</h1>
        <p className="text-sm font-light text-gray-700">{ getYear(movie.release_date) } • { setLanguage() }</p>
        <p className="text-sm font-light text-gray-700 flex flex-wrap gap-2 mt-2">
          { getGenres().map((genre, idx) => (
            <span key={idx} className="bg-purple-200 px-2 rounded-full">{ genre } </span>
          )) }
        </p>
        <p className="text-md font-bold text-purple-700 my-2">{ movie.vote_average.toFixed(1) } <span className="font-normal">/10</span></p>
    </div>
  )
}

export default Card