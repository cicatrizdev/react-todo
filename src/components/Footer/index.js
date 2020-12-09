import React from 'react'
import GithubIcon from '../../assets/github.svg';

import styled from 'styled-components';

export const Container = styled.div`
  background: #9432A4;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0px;
  width: 100%;

  & > p {
    color: white;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 24px;
  }

  & > a {
    margin-top: 20px;
  }

  @media (max-width: 800px) {
    & > p {
      font-size: 18px;
    }
  }
`;


const Footer = () => {
  return (
    <Container>
      <p>Desenvolvido por Fulano de Tal</p>
      <a 
        href="https://github.com/pedrocmello"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          src={GithubIcon}
          alt="github icon"
        />
      </a>
    </Container>
  )
}

export default Footer
