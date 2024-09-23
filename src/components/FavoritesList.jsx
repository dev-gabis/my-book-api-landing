import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const FavoriteItem = styled.div`
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

const FavoriteTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const FavoriteAuthors = styled.p`
  margin: 5px 0 0;
  color: #666;
`;

const FavoritesList = ({ favorites, onBookClick }) => {
    return (
        <FavoritesContainer>
            <h2>Favoritos</h2>
            {favorites.length === 0 ? (
                <p>Nenhum livro favorito</p>
            ) : (
                favorites.map((book) => (
                    <FavoriteItem key={book.id} onClick={() => onBookClick(book)}>
                        <FavoriteTitle>{book.volumeInfo.title}</FavoriteTitle>
                        <FavoriteAuthors>{book.volumeInfo.authors?.join(', ')}</FavoriteAuthors>
                        <FaHeart color="#ff0000" />
                    </FavoriteItem>
                ))
            )}
        </FavoritesContainer>
    );
};

export default FavoritesList;