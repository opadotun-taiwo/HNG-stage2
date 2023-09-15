import React from 'react'
import { getMovieDetails } from '@/utils/requests'
import Logo from '@/assets/Logo.png'

const movieDetails = async ({ params }) => {
  const movieDetail = await getMovieDetails(params.id)
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face/'


  //change date to UTC
  const changeDate = () => {
      const inputDateString = movieDetail.release_date
      const inputDate = new Date(inputDateString)

      const utcDate = new Date(
      inputDate.getUTCFullYear(),
      inputDate.getUTCMonth(),
      inputDate.getUTCDate()
      );

    const formatDate =  utcDate.toISOString()

    return formatDate
  }


  


  return (
    <div className='m-4'>
      <div className='flex items-center gap-4' key={movieDetail.id}>
        <div className='border rounded-lg w-[30%] h-[100vh]'>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div>
            <p>Home</p>
            <p>Movie</p>
            <p>TV</p>
            <p>Upcoming</p>
          </div>
          <div>
            nknk
          </div>
          <div>
            Logout
          </div>
        </div>
        <div>
           <img src={IMAGE_BASE_URL + movieDetail.backdrop_path} alt={movieDetail.title} />
          <h3 data-testid="movie-title">{movieDetail.title}</h3>
          <h3 data-testid="movie-release-date">{changeDate()}</h3>
          <h3 data-testid="movie-runtime">{movieDetail.runtime + ` Minutes`} </h3>
          <p data-testid="movie-overview">{movieDetail.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default movieDetails
