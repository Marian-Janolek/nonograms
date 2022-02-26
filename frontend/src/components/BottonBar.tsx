import React, { useState } from 'react';
import styled from 'styled-components';
import { bottonBarIcons } from '../utils/constants';

const BottonBar: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  return (
    <Wrapper>
      <div className="navigation">
        <ul>
          {bottonBarIcons.map((icon) => (
            <li
              className="list"
              key={icon.id}
              onClick={() => setClicked(!clicked)}
            >
              <div>
                <span className="icon">{icon.icon}</span>
                <span className="text">{icon.text}</span>
              </div>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .navigation {
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    ul {
      display: flex;
      width: 90%;
      .indicator {
        position: absolute;
        top: -50%;
        width: 70px;
        height: 70px;
        background-color: var(--main-color);
        border-radius: 50%;
        border: 5px solid black;
        transition: var(--transition);
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          left: -22px;
          width: 20px;
          height: 20px;
          background: transparent;
          border-top-right-radius: 20px;
          box-shadow: 0px -10px 0 0 var(--main-color);
        }
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: -22px;
          width: 20px;
          height: 20px;
          background: transparent;
          border-top-left-radius: 20px;
          box-shadow: 0px -10px 0 0 var(--main-color);
        }
      }
      li {
        position: relative;
        list-style: none;
        width: 70px;
        z-index: 1;
        &:hover div .icon {
          transform: translateY(-32px);
        }
        &:hover div .text {
          opacity: 1;
          transform: translateY(10px);
        }
        div {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          text-align: center;
          .icon {
            position: relative;
            display: block;
            line-height: 75px;
            font-size: 2rem;
            text-align: center;
            transition: var(--transition);
            color: blue;
          }
          .text {
            position: absolute;
            color: red;
            font-size: 1rem;
            letter-spacing: var(--spacing);
            transition: var(--transition);
            opacity: 0;
            transform: translateY(20px);
          }
        }
      }
    }
  }
`;

export default BottonBar;
