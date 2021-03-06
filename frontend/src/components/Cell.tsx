import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Cell: React.FC = () => {
  const [clicked, setClicked] = useState('0');

  return (
    <Wrapper>
      <div className={`${clicked === '1' ? 'black-bg' : 'white-bg'}`}>
        {clicked === 'X' && (
          <span>
            <FaTimes />
          </span>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  .black-bg {
    background-color: black;
    height: 100%;
    width: 100%;
  }
  .white-bg {
    background-color: white;
    height: 100%;
    width: 100%;
  }
  span svg {
    font-size: 5rem;
  }
`;

export default Cell;
