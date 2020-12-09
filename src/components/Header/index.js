import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
  background: #9432A4;
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.14),
    0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 8px rgba(0, 0, 0, 0.2);

  & > h1 {
    color: white;
    font-family: 'Press Start 2P';
    font-size: 62px;
  }

  @media (max-width: 800px) {
    & > h1 {
      font-size: 32px;
    }
  }
`;

const Header = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
};

export default Header;
