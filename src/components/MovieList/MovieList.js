import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Movie from '../Movie/Movie'
import MovieListPaging from '../MovieListPaging/MovieListPaging'
import { useQuery } from 'react-query'

import { Container, MovieListContainer, Heading } from './MovieListStyle'
import { Spinner } from '../Spinner'
import Translate from '../Translation/Translate'

const MovieList = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const baseUrl = 'https://api.themoviedb.org/3/movie/'

  const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [language, setLanguage] = useState('en-US')

  const getAllMovies = () => {
    return axios.get(
      `${baseUrl}popular?api_key=${API_KEY}&language=${language}&page=${currentPageNumber}`
    )
  }

  const { isLoading, data, isError, error } = useQuery(
    ['movie-data', currentPageNumber, language],
    getAllMovies,
    {
      refetchInterval: false,
      refetchIntervalInBackground: false
    }
  )
  // debugger

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
    <Container>
      <Translate setLanguage={setLanguage} language={language}></Translate>
      <Heading>
        Pupular Movies
        <span>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </span>
      </Heading>
      <MovieListContainer>
        {data.data.results.map((item) => {
          return (
            <Movie
              key={item.id}
              item={item}
              selectedLanguage={language}
            ></Movie>
          )
        })}
      </MovieListContainer>
      <MovieListPaging
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber}
        pageList={pageList}
        setPageList={setPageList}
      />
    </Container>
  )
}

export default MovieList
