import styled from 'styled-components'

const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #2c3e50; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: auto 0px;
`

const Heading = styled.div`
  width: 100%;
  padding: 1rem 3.2rem;
  display: flex;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: 600;
  box-sizing: border-box;
  align-items: center;
  span {
    padding-left: 1rem;
  }
`

const MovieListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 50px;
  justify-content: center;
  margin: 0px;

  @media only screen and (max-width: 1024px) {
    padding: 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
  @media screen and (max-width: 375px) {
    padding: 0px;
  }
`

export { Spinner, Container, MovieListContainer, Heading }
