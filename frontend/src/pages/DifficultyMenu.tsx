import React from 'react';
import { Button, LevelCard, Navbar } from '../components';
import styled from 'styled-components';
import { AiFillLock } from 'react-icons/ai';

interface DifficultyMenuI {
  heading: string;
}

const DifficultyMenu: React.FC<DifficultyMenuI> = ({ heading }) => {
  return (
    <Wrapper className="wrapper">
      <Navbar />
      <div className="heading">{heading}</div>
      <div className="cards">
        <LevelCard level={1} />
        <LevelCard level={2} icon={<AiFillLock />} />
        <LevelCard level={3} icon={<AiFillLock />} />
        <LevelCard level={4} icon={<AiFillLock />} />
        <LevelCard level={5} icon={<AiFillLock />} />
        <LevelCard level={6} icon={<AiFillLock />} />
        <LevelCard level={7} icon={<AiFillLock />} />
        <LevelCard level={8} icon={<AiFillLock />} />
        <LevelCard level={9} icon={<AiFillLock />} />
        <LevelCard level={10} icon={<AiFillLock />} />
        <LevelCard level={11} icon={<AiFillLock />} />
        <LevelCard level={12} icon={<AiFillLock />} />
        <LevelCard level={13} icon={<AiFillLock />} />
        <LevelCard level={14} icon={<AiFillLock />} />
        <LevelCard level={15} icon={<AiFillLock />} />
        <LevelCard level={16} icon={<AiFillLock />} />
        <LevelCard level={17} icon={<AiFillLock />} />
        <LevelCard level={18} icon={<AiFillLock />} />
        <LevelCard level={19} icon={<AiFillLock />} />
        <LevelCard level={20} icon={<AiFillLock />} />
      </div>
      <div className="back-btn">
        <Button text="back" path="/selectGame" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .heading {
    margin-top: 1.5rem;
    font-size: 5rem;
    font-weight: var(--font-bold);
    background: #b1b1b1;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255, 255, 255, 0.5) 1px 2px 1px;
  }

  .cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-left: 0.8rem;
  }
  .back-btn {
    margin-top: 2rem;
  }
`;

export default DifficultyMenu;
