import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  DetailsContainer,
  PosterContainer,
  TextContainer,
  Description,
  RContainer,
  RDate,
  MovieTitle,
  Rating,
  Genre,
  RTime
} from './MovieDetailsStyle'
import { Spinner } from '../Spinner'
import Translate from '../Translation/Translate'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query'

const MovieDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const baseUrl = 'https://api.themoviedb.org/3/movie/'
  const params = useParams()

  const [language, setLanguage] = useState('en-US')

  const getMovieDetails = () => {
    return axios.get(
      `${baseUrl}${params.movieId}?api_key=${API_KEY}&language=${language}`
    )
  }

  const { isLoading, data, isError, error } = useQuery(
    ['movie-details', params.movieId, language],
    getMovieDetails,
    {
      refetchInterval: 10000
    }
  )

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  if (isError) {
    return <h3>{error.message}</h3>
  }

  return (
    <>
      <Translate setLanguage={setLanguage} language={language}></Translate>
      <DetailsContainer>
        <PosterContainer>
          <img
            src={`https://www.themoviedb.org/t/p/w300${
              data.data ? data.data.poster_path : ''
            }`}
            alt='poster '
          />
        </PosterContainer>
        <TextContainer>
          <MovieTitle>{data.data ? data.data.title : ''}</MovieTitle>
          <Genre>
            {data.data.genres &&
              data.data.genres.map((genre, i) => (
                <span key={i}> {genre.name} </span>
              ))}
          </Genre>
          <RContainer>
            <Rating>
              <FontAwesomeIcon icon={faStar} />
              {data.data ? data.data.vote_average : ''}
              <span>(&nbsp;{data.data ? data.data.vote_count : ''}&nbsp;)</span>
            </Rating>
            <RDate>
              <span>Release Date: </span>
              {data.data ? data.data.release_date : ''}
            </RDate>
          </RContainer>
          <RTime>
            <span>Duration:</span> {data.data ? data.data.runtime : ''} min
          </RTime>

          <Description>{data.data ? data.data.overview : ''}</Description>
        </TextContainer>
      </DetailsContainer>
    </>
  )
}

export default MovieDetail
