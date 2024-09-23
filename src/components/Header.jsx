import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Suggestions = styled.div`
  margin-top: 10px;
  font-size: 0.9em;
  color: ${(props) => props.theme.color};
`;

export default function Header({ suggestions }) {
  return (
    <HeaderWrapper>
      <h1>Book Recommendation</h1>
      {suggestions && (
        <Suggestions>
          <p>Temas sugeridos: {suggestions.join(', ')}</p>
        </Suggestions>
      )}
    </HeaderWrapper>
  );
}