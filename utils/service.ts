import { Params } from '@/types'
import axios from 'axios'

const API_KEY = process.env.API_KEY
const URL = process.env.API_URL

export const updateSearchParams = (params: Params) => {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params).map(([key, value]) => searchParams.set(key, value))

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}

export async function fetchMovies(page:number = 1, type: string) {
  try {
    const { data } = await axios.get(`${URL}movie/${type}?language=en-US&page=${page}&api_key=${API_KEY}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchlanguages() {
  try {
    const { data } = await axios.get(`${URL}configuration/languages?api_key=${API_KEY}`)

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchGenres() {
  try {
    const { data: { genres } } = await axios.get(`${URL}genre/movie/list?language=en&api_key=${API_KEY}`)

    return genres
  } catch (error) {
    console.log(error)
  }
}