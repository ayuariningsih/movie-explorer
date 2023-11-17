'use client';

import { MovieList } from "@/types";
import { createContext, useContext } from "react";

const MovieContext = createContext<MovieList>(
  { 
    languages: [], 
    genres: [],
    allMovies: []
  })

export default MovieContext

