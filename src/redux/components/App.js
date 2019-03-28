import React from 'react';
import Board from './Board';
import Result from './Result';
import styled from 'styled-components';
import './App.css';
import {Link} from "react-router-dom";

const App = ({className}) => {
  return (
    <div className={className}>
      <Result />
      <Board />
      <div>
          <Link to="/">
              <p>Back Home</p>
          </Link>
          <Link to="/reacttic">
              <p>Tic tac toe (React)</p>
          </Link>
      </div>
    </div>
  );
}

export default styled(App)`
  font-family: Courier New, Courier, monospace;
  margin: 0 auto;
  width: 200px;
`;
