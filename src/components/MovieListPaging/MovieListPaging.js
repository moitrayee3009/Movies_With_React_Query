import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Previous, Next, Paging, PageNumber } from './MovieListPagingStyle'

const MovieListPaging = ({
  setCurrentPageNumber,
  currentPageNumber,
  pageList,
  setPageList
}) => {
  //const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  // const [selectedPageNumber, setSelectedPageNumber] = useState(currentPageNumber)

  const movePageLeftRight = (action) => {
    if (action === 'prev' && currentPageNumber > 1) {
      managePageList(currentPageNumber - 1)
    } else if (action === 'next') {
      managePageList(currentPageNumber + 1)
    }
  }

  // useEffect(() => {
  //   setPageList(
  //     pageList.map((item) => {
  //       return item + Math.floor(currentPageNumber / 2)
  //     })
  //   )
  // }, [])

  const managePageList = (pageNum) => {
    // debugger
    setCurrentPageNumber(pageNum)
    //setSelectedPageNumber(pageNum)

    let maxNumber = Math.max(...pageList)
    let minNumber = Math.min(...pageList)

    if (pageNum === maxNumber) {
      setPageList(
        pageList.map((item) => {
          return item + 5
        })
      )
    } else if (pageNum === minNumber && pageNum >= 6) {
      setPageList(
        pageList.map((item) => {
          return item - 5
        })
      )
    }
  }

  return (
    <Paging>
      <Previous onClick={() => movePageLeftRight('prev')}>
        Previous
        <FontAwesomeIcon icon={faArrowLeft} />
      </Previous>
      {pageList.map((pageNum) => {
        return (
          <PageNumber
            key={pageNum}
            className={`${pageNum === currentPageNumber ? 'active' : ''}`}
            onClick={() => managePageList(pageNum)}
          >
            {pageNum}
          </PageNumber>
        )
      })}
      <Next onClick={() => movePageLeftRight('next')}>
        <FontAwesomeIcon icon={faArrowRight} />
        Next
      </Next>
    </Paging>
  )
}

export default MovieListPaging
