"use client"

import { DefaultList, Header, Loading, Pagination, SearchBar, SearchList } from "@/components";
import { MoviesResult } from "@/types";
import { fetchGenres, fetchMovies, fetchlanguages, searchMovies } from "@/utils";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import MovieContext  from '@/context/MovieContext'

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
      <Header />
      <SearchBar placeholder="Search" handleSearch={(val) => onSearch(val)} />
      
      { loading 
      ? (<Loading />)
      : (
        <MovieContext.Provider value={{ allMovies, languages, genres }}>
          { !params.query
            ? ( <DefaultList /> )
            : ( <SearchList movies={searchResults} searchParams={params} /> )
          }

          <Pagination
            pageNumber={pageNumber}
            totalPages={totalPages}
            handleClickNext={() => setPageNumber(pageNumber + 1)}
            handleClickPrevious={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}
          />
        </MovieContext.Provider>
      )}
    </main>
  )
}
