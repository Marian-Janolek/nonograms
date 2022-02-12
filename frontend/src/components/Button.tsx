import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface TextI {
  text: string;
  path: string;
}

const Button: React.FC<TextI> = ({ text, path }) => {
  return (
    <Link to={path}>
      <Wrapper>
        <span>{text}</span>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  text-transform: uppercase;
  width: 15rem;
  height: 4rem;
  box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: var(--bigger-font-size);
    letter-spacing: var(--spacing);
    font-weight: var(--font-bold);
    opacity: 0.75;
  }
`;

export default Button;
