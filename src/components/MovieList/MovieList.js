import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Movie from '../Movie/Movie'
import MovieListPaging from '../MovieListPaging/MovieListPaging'
// import Details from '../Details/Details'
import Arrow from '../..//assets/double-arrow-right-icon.svg'
import { Container, MovieListContainer } from './MovieListStyle'
import FilterByLanguage from '../MovieFilter/FilterByLanguage'

const MovieList = (props) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const baseUrl = 'https://api.themoviedb.org/3/movie/'
  const navigate = useNavigate()

  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [language, setLanguage] = useState()
  const [popularMovieList, setPopularMovieList] = useState([])
  const [error, setError] = useState({
    message: '',
    success: false
  })

  // const manageCurrentPageNumber = (pageNumber) => {
  //   setCurrentPageNumber(pageNumber)
  // }

  const getAllPopularMovies = () => {
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
  }

  useEffect(() => {
    getAllPopularMovies()
  }, [currentPageNumber, language])

  // return (
  //   <div>
  //     <div
  //       style={{
  //         width: '100%',
  //         display: 'flex',
  //         flexFlow: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         boxSizing: 'border-box'
  //       }}
  //     >
  //       <div
  //         style={{
  //           width: '100%',
  //           maxHeight: '2rem',
  //           display: 'flex',
  //           justifyContent: 'flex-start',
  //           alignItems: 'center',
  //           color: '#FFFDE3',
  //           paddingLeft: '2.5rem'
  //         }}
  //       >
  //         <h2
  //           style={{
  //             fontSize: '1.25rem',
  //             lineHeight: '1.75rem',
  //             paddingRight: '20px',
  //             paddingBottom: '5px'
  //           }}
  //         >
  //           Popular
  //         </h2>
  //         <img src={Arrow} alt='arrow' />
  //       </div>
  //       <ul
  // style={{
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   padding: '0px',
  //   justifyContent: 'center',
  //   margin: '0px'
  // }}
  //       >
  //         {popularMovieList.length === 0 ? (
  //           <p>Not Found</p>
  //         ) : (
  //           popularMovieList.map((movie) => {
  //             return (
  //               <li
  //                 onClick={handleClick}
  //                 key={movie.id}
  //                 style={{
  //                   width: '200px',
  //                   listStyle: 'none',
  //                   margin: '20px ',
  //                   cursor: 'pointer'
  //                 }}
  //               >
  //                 {/* <Link to='/:movie.id'> */}
  //                 <div>
  //                   <img
  //                     src={`https://www.themoviedb.org/t/p/w200${movie.poster_path}`}
  //                     alt='poster'
  //                   />
  //                 </div>
  //                 <div
  //                   style={{
  //                     width: '200px',
  //                     paddingTop: '10px',
  //                     font: '600 14px Roboto',
  //                     color: '#FFFDE3'
  //                   }}
  //                 >
  //                   {movie.title}
  //                 </div>
  //                 {/* <div style={{ flexGrow: '1' }}>{movie.release_date}</div> */}
  //                 {/* </Link> */}
  //               </li>
  //             )
  //           })
  //         )}
  //       </ul>
  //     </div>
  //   </div>
  // )

  return (
    <Container>
      <FilterByLanguage setLanguage={setLanguage}></FilterByLanguage>
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
