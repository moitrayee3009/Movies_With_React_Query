import styled from 'styled-components'

const NavBar = styled.header`
  width: 100%;
  /* height: 5rem; */
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0 3rem 3rem;
  box-sizing: border-box;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: -5px;
    color: #2c3e50 !important;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    /* letter-spacing: -3px; */
    padding: 0 1rem;
    color: #2c3e50 !important;
  }
`

export { NavBar }
