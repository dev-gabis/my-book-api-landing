import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

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

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ff0000;
  font-size: 1.5em;
  margin-left: auto;
  outline: none;

  &:hover {
    color: #cc0000;
  }
`;

const BookList = ({ books, searched, onBookClick, addFavorite, removeFavorite, favorites }) => {
  const isFavorite = (bookId) => {
    return favorites.some(book => book.id === bookId);
  };

  return (
    <BookListContainer>
      {searched && books.length === 0 ? (
        <p>Nenhum livro encontrado</p>
      ) : (
        books.map((book) => (
          <BookItem key={book.id} onClick={() => onBookClick(book)}>
            <BookTitle>{book.volumeInfo.title}</BookTitle>
            <BookAuthors>{book.volumeInfo.authors?.join(', ')}</BookAuthors>
            <FavoriteButton onClick={(e) => {
              e.stopPropagation();
              isFavorite(book.id) ? removeFavorite(book.id) : addFavorite(book);
            }}>
              {isFavorite(book.id) ? <FaHeart /> : <FaRegHeart />}
            </FavoriteButton>
          </BookItem>
        ))
      )}
    </BookListContainer>
  );
};

export default BookList;