
import React from 'react'
import { getMovies } from '@/utils/requests';
import Card from '@/app/components/Card';
import SearchResult from '@/app/components/SearchResult';

const searchMovie = async ({searchParams}) => {
const searchText = searchParams.query;
const movies = await getMovies(searchText)

  return (
   <SearchResult searchText={searchText} movies={movies} />
  )
}

export default searchMovie
