import React from 'react'
import Link from 'next/link'
import movieDetails from '../movies/[id]/page'

const Card = ({ movie }) => {
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face/'
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden" data-testid="movie-card">
      <Link href={"/movies/" + movie.id} key={movie.id}>
        <div className='w-[250px] h-[500px]'>
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            alt={movie.title}
            data-testid="movie-poster"
            className="w-full h-auto"
          />
          <div className="px-4 py-4 m-4">
            <h5 className="text-sm font-semibold" data-testid="movie-title">{movie.title}</h5>
            <h5 className="text-sm" data-testid="movie-release-date">{movie.release_date}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
