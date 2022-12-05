import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Movie from '../Movie/Movie'
import MovieListPaging from '../MovieListPaging/MovieListPaging'

import {
  Container,
  MovieListContainer,
  Heading,
  Spinner
} from './MovieListStyle'
import FilterByLanguage from '../MovieFilter/FilterByLanguage'

const MovieList = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const baseUrl = 'https://api.themoviedb.org/3/movie/'

  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [language, setLanguage] = useState()
  const [popularMovieList, setPopularMovieList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({
    message: '',
    success: false
  })

  const getAllPopularMovies = () => {
    setLoading(true)
    setError({
      message: '',
      success: false
    })

    axios
      .get(
        `${baseUrl}popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}`
      )
      .then((res) => {
        setPopularMovieList(res.data.results)
        setError({
          message: 'Movie list has been loaded successfully',
          success: true
        })
      })
      .catch((err) => {
        setError({
          message: err.err,
          success: false
        })
      })
    setLoading(false)
  }

  useEffect(() => {
    getAllPopularMovies()
  }, [currentPageNumber, language])

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  return (
    <Container>
      <FilterByLanguage setLanguage={setLanguage}></FilterByLanguage>
      <Heading>
        Pupular
        <span>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </span>
      </Heading>
      <MovieListContainer>
        {popularMovieList.map((item) => (
          <Movie key={item.id} item={item}></Movie>
        ))}
      </MovieListContainer>
      <MovieListPaging
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber}
      />
    </Container>
  )
}

export default MovieList
