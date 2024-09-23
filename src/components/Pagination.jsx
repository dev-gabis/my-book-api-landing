import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ffeb3b;
  color: black;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #fdd835;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Pagination = ({ page, totalItems, handlePreviousPage, handleNextPage }) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePreviousPage} disabled={page === 0}>
        <FaArrowLeft style={{ marginRight: '5px' }} />
        Anterior
      </PaginationButton>
      <PaginationButton onClick={handleNextPage} disabled={(page + 1) * 10 >= totalItems}>
        Próxima
        <FaArrowRight style={{ marginLeft: '5px' }} />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;