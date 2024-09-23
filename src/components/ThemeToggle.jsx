import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ffeb3b;
  color: black;
  cursor: pointer;
  outline: none;
  margin: 20px;

  &:hover {
    background-color: #fdd835;
  }
`;

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      Alternar Modo
    </ToggleButton>
  );
};

export default ThemeToggle;