import React from 'react';
import { LevelCard, Navbar } from '../components';
import styled from 'styled-components';
import { AiFillLock } from 'react-icons/ai';

const Easy: React.FC = () => {
  return (
    <Wrapper className="wrapper">
      <Navbar />
      <div className="heading">5 x 5</div>
      <div className="cards">
        <LevelCard level={1} icon={<AiFillLock />} />
        <LevelCard level={2} icon={<AiFillLock />} />
        <LevelCard level={3} icon={<AiFillLock />} />
        <LevelCard level={4} icon={<AiFillLock />} />
        <LevelCard level={5} icon={<AiFillLock />} />
        <LevelCard level={6} icon={<AiFillLock />} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .heading {
    margin-top: 2rem;
    font-size: 5rem;
  }

  .cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2.5rem;
    margin-left: 0.8rem;
  }
`;

export default Easy;
