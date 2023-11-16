import { Genre, Language } from "@/types"

export const getLanguage = (iso: string = 'en', languages: Language[]) => {
  const filteredData = languages.find((item) => item.iso_639_1 === iso)

  return filteredData?.name || filteredData?.english_name
}

export interface GenreList {
  genres: Genre[]
}
export const findGenresByIds = (ids: number[], allGenres: Genre[]) => {
  const genres: string[] = []

  allGenres.map((genre: Genre) => {
    ids.map((id, index) => {
      if (genre.id === id && index < 3) return genres.push(genre.name)
      else return genres
    })
  })

  return genres
}

export const getYear = (date: string = '2023-01-01') => new Date(date).getFullYear()
