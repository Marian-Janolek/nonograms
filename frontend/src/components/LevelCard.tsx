import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import styled from 'styled-components';

interface LevelCardI {
  level: number;
  icon: any;
}

const LevelCard: React.FC<LevelCardI> = ({ level, icon }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span>{level}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
  border-radius: 1rem;
  position: relative;

  span {
    font-size: 3rem;
  }
  .icon {
    position: absolute;
    font-size: 5rem;
    opacity: 0.25;
    bottom: -40%;
  }
`;

export default LevelCard;
