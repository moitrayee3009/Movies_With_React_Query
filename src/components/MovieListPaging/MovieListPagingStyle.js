import styled from 'styled-components'

const Paging = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin: 3rem 0 5rem 0;

  .active {
    color: #f96e85;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    padding: 0 3rem;
  }
`
const Previous = styled.div`
  margin-right: 20px;
  svg {
    padding-left: 10px;
    :hover {
      fill: #f96e85;
    }
  }
  :hover {
    color: #f96e85;
  }
`
const Next = styled.div`
  margin-left: 5px;
  svg {
    padding-right: 10px;
    :hover {
      fill: #f96e85;
    }
  }
  :hover {
    color: #f96e85;
  }
`

const PageNumber = styled.div`
  margin-right: 15px;

  :hover {
    color: #f96e85;
  }
`

export { Previous, Next, Paging, PageNumber }
