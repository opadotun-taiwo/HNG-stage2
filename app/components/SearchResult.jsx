"use client"
import React, { useState, useEffect } from 'react'
import Card from './Card';

const SearchResult = ({movies, searchText}) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);
    console.log(searchText)

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);


  return (
    <div className="m-4">
      <h1 className="flex justify-center items-center text-center font-semibold p-4 text-xl">
        Top Search Results for &quot;{searchText}&quot;
      </h1>
      <div className="flex flex-wrap gap-3">
            {filteredMovies.map((movie) => {
                return <Card key={movie.id} movie={movie}></Card>
            })}
        </div>
    </div>
  )
}

export default SearchResult
