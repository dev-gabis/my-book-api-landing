import React from 'react';
import styled from 'styled-components';

const BookListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const BookItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const BookTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const BookAuthors = styled.p`
  margin: 5px 0 0;
  color: #666;
`;

const BookList = ({ books, searched, onBookClick }) => {
  return (
    <BookListContainer>
      {searched && books.length === 0 ? (
        <p>Nenhum livro encontrado</p>
      ) : (
        books.map((book) => (
          <BookItem key={book.id} onClick={() => onBookClick(book)}>
            <BookTitle>{book.volumeInfo.title}</BookTitle>
            <BookAuthors>{book.volumeInfo.authors?.join(', ')}</BookAuthors>
          </BookItem>
        ))
      )}
    </BookListContainer>
  );
};

export default BookList;