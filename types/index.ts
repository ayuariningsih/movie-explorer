
import { MouseEventHandler } from "react"

export interface SearchBarProps {
  placeholder?: string
  handleSearch: (input:Params) => void
}

export interface Params {
  name: string
  limit: number
  after: string
}

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: any
}

export interface CardProps {
  movie: MoviesResult
}
export interface MoviesResult {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieList {
  languages: Language[]
  genres: Genre[]
  upcomingMovies: MoviesResult[]
  topRatedMovies: MoviesResult[]
  popularMovies: MoviesResult[]
  nowPlayingMovies: MoviesResult[]
}

export interface Language {
  iso_639_1: string
  english_name: string
  name: string
}

export interface Genre {
  id: number
  name: string
}

export enum FetchTypes {
  upcoming = "upcoming",
  top_rated = "top_rated",
  popular = "popular",
  now_playing = "now_playing"
}

