import React from 'react';
import styled from 'styled-components';
import { BottonBar } from '../components';

const LevelPage: React.FC = () => {
  return (
    <Wrapper>
      <div className="bottonBar">
        <BottonBar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .bottonBar {
    position: fixed;
    bottom: 0;
  }
`;

export default LevelPage;
