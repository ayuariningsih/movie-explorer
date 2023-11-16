"use client"

import { List, Loading, SearchBar } from "@/components";
import { MovieList, MoviesResult, FetchTypes } from "@/types";
import { fetchGenres, fetchMovies, fetchlanguages } from "@/utils";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext<MovieList>(
  { 
    upcomingMovies: [], 
    topRatedMovies: [], 
    popularMovies: [],
    nowPlayingMovies: [],
    languages: [], 
    genres: [],
  })

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

  const [loading, setLoading] = useState(true)
  const [languages, setLanguages] = useState([])
  const [genres, setGenres] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState<MoviesResult[]>(initialMovies)
  const [popularMovies, setPopularMovies] = useState<MoviesResult[]>(initialMovies)
  const [topRatedMovies, setTopRatedMovies] = useState<MoviesResult[]>(initialMovies)
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MoviesResult[]>(initialMovies)

  function onSearch (searchParams: any) {
    // handle search
  }

  async function getAllLanguages() {
    const languages = await fetchlanguages()
    setLanguages(languages)
  }

  async function getAllGenres() {
    const genres = await fetchGenres()
    setGenres(genres)
  }

  async function getUpcomingMovies () {
    const { results, total_results, page, total_pages } = await fetchMovies(1, FetchTypes.upcoming)
    await setUpcomingMovies(results)
  }

  async function getPopularMovies () {
    const { results, total_results, page, total_pages } = await fetchMovies(1, FetchTypes.popular)
    await setPopularMovies(results)
  }

  async function getTopRatedMovies () {
    const { results, total_results, page, total_pages } = await fetchMovies(1, FetchTypes.top_rated)
    await setTopRatedMovies(results)
  }

  async function getNowPlayingMovies () {
    const { results, total_results, page, total_pages } = await fetchMovies(1, FetchTypes.now_playing)
    await setNowPlayingMovies(results)
  }

  async function init() {
    setLoading(true)
    await getUpcomingMovies()
    await getPopularMovies()
    await getTopRatedMovies()
    await getNowPlayingMovies()
    await getAllLanguages()
    await getAllGenres()
    setLoading(false)
  }

  useEffect(() => {
    init()
  }, [])
  

  return (
    <main className="overflow-hidden max-w-[1440px] px-8 py-5 mx-auto">
      <h1 className="text-2xl font-extrabold py-5">Movie Explorer</h1>
      <SearchBar placeholder="Search" handleSearch={(val) => onSearch(val)} />
      <MovieContext.Provider value={{ upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies, languages, genres }}>
        { !loading 
          ? ( <List /> )
          : ( <Loading /> )
        }
      </MovieContext.Provider>
    </main>
  )
}
