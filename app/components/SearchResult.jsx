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
      <div className="flex flex-wrap gap-3">
            {filteredMovies.map((movie) => {
                return <Card key={movie.id} movie={movie}></Card>
            })}
        </div>
    </div>
  )
}

export default SearchResult
