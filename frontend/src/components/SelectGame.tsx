import React from 'react';
import styled from 'styled-components';
import { Button } from '.';
import { BsArrowLeft } from 'react-icons/bs';

const SelectGame: React.FC = () => {
  return (
    <Wrapper>
      <Button text="5 x 5" path="/selectGame/easy" />
      <Button text="10 x 10" path="/selectGame/medium" />
      <Button text="15 x 15" path="/selectGame/hard" />
      <Button text="back" path="/" icon={<BsArrowLeft />} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
  padding-top: 10rem;
`;

export default SelectGame;
