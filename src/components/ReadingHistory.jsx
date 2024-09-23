import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  padding: 20px;
`;

const BookItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ReadingHistory = ({ readingHistory, onBookClick }) => {
  return (
    <HistoryContainer>
      <h2>Histórico de Leitura</h2>
      {readingHistory.map((book) => (
        <BookItem key={book.id} onClick={() => onBookClick(book)}>
          {book.volumeInfo.title}
        </BookItem>
      ))}
    </HistoryContainer>
  );
};

export default ReadingHistory;