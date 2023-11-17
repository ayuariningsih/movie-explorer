"use client"

import Link from 'next/link';
import { CustomButton, DefaultList, Loading, SearchBar, SearchList } from "@/components";
import { MovieList, MoviesResult, FetchTypes } from "@/types";
import { fetchGenres, fetchMovies, fetchlanguages, searchMovies } from "@/utils";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
import MovieContext  from '@/context/MovieContext'

// export const MovieContext = createContext<MovieList>(
//   { 
//     languages: [], 
//     genres: [],
//     allMovies: []
//   })

export default function Home() {
  const initialMovies = [
    {
      adult: false,
      backdrop_path: '',
      genre_ids: [],
      id: 0,
      original_language: 'en',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '2023-01-01',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
    }
  ]

  const searchParams = useSearchParams()
  const movieType = searchParams.get('movie_type') || ''

  const [loading, setLoading] = useState(true)
  const [languages, setLanguages] = useState([])
  const [genres, setGenres] = useState([])
  const [allMovies, setAllMovies] = useState<MoviesResult[]>(initialMovies)

  // handle search
  const [params, setParams] = useState({ query: '', movie_type: 'popular'})
  const [searchResults, setSearchResults] = useState<MoviesResult[]>(initialMovies)

  //handle show more
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  //on search
  async function onSearch (searchParams: any) {
    setLoading(true)
    setPageNumber(1)

    const { query } = searchParams
    setParams(searchParams)

    const { results, page, total_pages } = await searchMovies(pageNumber, query)
    await setSearchResults(results)
    await setPageNumber(page)
    await setTotalPages(total_pages)
    
    setLoading(false)
  }

  async function getAllLanguages() {
    const languages = await fetchlanguages()
    setLanguages(languages)
  }

  async function getAllGenres() {
    const genres = await fetchGenres()
    setGenres(genres)
  }

  async function getMovies (type: string = 'popular') {
    const { results, page, total_pages } = await fetchMovies(pageNumber, type)
    await setAllMovies(results)
    await setPageNumber(page)
    await setTotalPages(total_pages)
  }

  async function init() {
    await getMovies()
    await getAllGenres()
    await getAllLanguages()
  }

  useEffect(() => {
    if (!params.query) init()
    else onSearch(params)
  }, [params.query])

  useEffect(() => {
    getMovies(movieType)
  }, [movieType, pageNumber])
  

  return (
    <main className="overflow-hidden max-w-[1440px] px-8 py-5 mx-auto">
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
      <SearchBar placeholder="Search" handleSearch={(val) => onSearch(val)} />
      
      { loading 
      ? (<Loading />)
      : (
        <MovieContext.Provider value={{ allMovies, languages, genres }}>
          { !params.query
            ? ( <DefaultList /> )
            : ( <SearchList movies={searchResults} searchParams={params} /> )
          }

          <div className="flex gap-2 justify-between mt-5">
            { pageNumber > 1 
            ? (
              <CustomButton
                title="Previous"
                btnType="button"
                containerStyles="bg-light-blue text-light text-sm font-bold rounded-full hover:bg-light-blue/50"
                handleClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)} />
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
                handleClick={() => setPageNumber(pageNumber + 1)} />
              )
            : (
              <div className="min-w-100px"></div>
            )}
           
          </div>
        </MovieContext.Provider>
      )}
    </main>
  )
}
