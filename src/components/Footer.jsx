import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <p>&copy; 2024 Book API Project</p>
        </FooterWrapper>
    );
}
