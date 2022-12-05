import styled from 'styled-components'

const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 1rem 0;
  box-sizing: border-box;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    width: 100%;
  }
  /* @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 375px) {
  } */
`
const ContentContainer = styled.div`
  width: 70%;
  img {
    cursor: pointer;
    width: 100%;
    height: auto;
    transition: all 0.3s ease 0s;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 27%) 10px 10px 33px -4px;

    :hover {
      transform: translateY(-15px) scale(1.1);
      /* -webkit-transform: translateY(-15px) scale(1.1);
      -moz-transform: translateY(-15px) scale(1.1);
      -webkit-box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4); */
      box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 1024px) {
      /*  */
    }
    /* @media screen and (max-width: 768px) {
      width: 80%;
    } 
    @media screen and (max-width: 600px) {
      
    }
    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */
  }
`

const Title = styled.h2`
  height: 2rem;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2rem;
  letter-spacing: 0.5px;
  padding-left: 10px;
  padding-bottom: 5px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 375px) {
  }
`

export { CardContainer, ContentContainer, Title }
