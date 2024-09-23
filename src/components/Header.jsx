import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Book Recommendation</h1>
        </HeaderWrapper>
    );
}
