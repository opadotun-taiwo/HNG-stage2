import React from 'react'
import Image from 'next/image'
import { getMovieDetails } from '@/utils/requests'
import Logo1 from '@/assets/Logo1.png'
import Home from '@/assets/Home.png'
import TVShow from '@/assets/TVShow.png'
import MovieProjector from '@/assets/MovieProjector.png'
import Calendar from '@/assets/Calendar.png'
import Logout from '@/assets/Logout.png'
import Group55 from '@/assets/Group55.png'
import Group52 from '@/assets/Group52.png'
import Group61 from '@/assets/Group61.png'

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
    <div className=''>
      <div className='flex items-center justify-center gap-4' key={movieDetail.id}>
        <div className='border-2 broder-gray-300 rounded-tr-[80px] rounded-br-[80px] w-[30%] h-[120vh] hidden md:flex flex-col items-center'>
          <div className='m-10'>
            <Image src={Logo1} alt="Logo" />
          </div>
          <div>
            <p className='flex gap-4 p-4'><span><Image src={Home} alt=''/></span>Home</p>
            <p className='flex gap-4 py-4 px-[80px] bg-[#BE123C33] border-r-4 border-red-500'><span><Image src={MovieProjector} alt=''/></span>Movie</p>
            <p className='flex gap-4 p-4'><span><Image src={TVShow} alt=''/></span>TV</p>
            <p className='flex gap-4 p-4'><span><Image src={Calendar} alt=''/></span>Upcoming</p>
          </div>
          <div className='border-2 border-[#BE123CB2] p-4 m-4 flex flex-col justify-center rounded-xl'>
            <p>Play movie quizes and earn free tickets</p>
            <p>50k people are playing now</p>
            <button className='rounded-full bg-[#BE123C33] text-[#BE123C] p-2'>Start playing</button>
          </div>
          <div>
            <p className='flex gap-4 p-4'><span><Image src={Logout} alt=''/></span>Logout</p>
          </div>
        </div>
        <div>
          <div>
            <img src={IMAGE_BASE_URL + movieDetail.backdrop_path} alt={movieDetail.title} />
          </div>
          <div className='flex'>
            <div className='w-[60%] pr-4'>
              <div className='flex gap-4 py-2'>
                <h3 data-testid="movie-title">{movieDetail.title}</h3>
                <h3 data-testid="movie-release-date">{changeDate()}</h3>
                <h3 data-testid="movie-runtime">{movieDetail.runtime + ` Minutes`} </h3>
              </div>
              <div className='py-4'>
                  <p data-testid="movie-overview">{movieDetail.overview}</p>
              </div>
              <div>
                  <p>Director</p>
                  <p>Writer</p>
                  <p>Stars</p>
              </div>
              <div className='pt-[150px]'>
                 <Image src={Group61}/>
              </div>
            </div>

            <div className='w-[40%]'>
              <div className='mb-8'>
                <Image src={Group55}/>
              </div>

              <div>
                <Image src={Group52}/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default movieDetails
