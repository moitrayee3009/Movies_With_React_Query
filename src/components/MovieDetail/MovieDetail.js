import React, { useEffect, useState } from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const MovieDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const baseUrl = 'https://api.themoviedb.org/3/movie/'
  const params = useParams()

  const [movieData, setMovieData] = useState([])
  const [error, setError] = useState({
    message: '',
    success: false
  })

  useEffect(() => {
    getMovieData()
  }, [])

  const getMovieData = async () => {
    setError({
      message: '',
      success: false
    })
    axios
      .get(`${baseUrl}${params.movieId}?api_key=${API_KEY}&&language=en-US`)
      .then((response) => {
        setMovieData(response.data)
        setError({
          message: 'Movie data has been loaded successfully',
          success: true
        })
      })
      .catch((err) => {
        setError({
          message: err.err,
          success: false
        })
      })
  }

  return (
    <DetailsContainer>
      <PosterContainer>
        <img
          src={`https://www.themoviedb.org/t/p/w300${
            movieData ? movieData.poster_path : ''
          }`}
          alt='poster '
        />
      </PosterContainer>
      <TextContainer>
        <MovieTitle>{movieData ? movieData.title : ''}</MovieTitle>
        <Genre>
          {movieData.genres &&
            movieData.genres.map((genre, i) => (
              <span key={i}> {genre.name} </span>
            ))}
        </Genre>
        <RContainer>
          <Rating>
            <FontAwesomeIcon icon={faStar} />
            {movieData ? movieData.vote_average : ''}
            <span>(&nbsp;{movieData ? movieData.vote_count : ''}&nbsp;)</span>
          </Rating>
          <RDate>
            <span>Release Date: </span>
            {movieData ? movieData.release_date : ''}
          </RDate>
        </RContainer>
        <RTime>
          <span>Duration:</span> {movieData ? movieData.runtime : ''} min
        </RTime>

        <Description>{movieData ? movieData.overview : ''}</Description>
      </TextContainer>
    </DetailsContainer>
  )
}

export default MovieDetail
