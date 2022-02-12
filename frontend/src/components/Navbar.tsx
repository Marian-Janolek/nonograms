import React from 'react';
import { AiOutlineUser, AiOutlineTrophy } from 'react-icons/ai';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <button>
        <AiOutlineTrophy />
      </button>
      <button>
        <AiOutlineUser />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;

    svg {
      font-size: 2.5rem;
      opacity: 0.75;
    }
  }
`;

export default Navbar;
