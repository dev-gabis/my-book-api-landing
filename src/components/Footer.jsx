import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.color};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 My Book App. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;