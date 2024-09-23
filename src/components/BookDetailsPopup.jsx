import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const PopupContent = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  max-height: 90%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.color};
`;

const RatingSelect = styled.select`
  margin-top: 10px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const RemoveFavoriteButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  cursor: pointer;
`;

const BookDetailsPopup = ({ book, onClose, removeFavorite, isFavorite }) => {
  const [rating, setRating] = useState(book.rating || '');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    // Aqui você pode adicionar lógica para salvar a classificação, se necessário
  };

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.description}</p>
        <p><strong>Autores:</strong> {book.volumeInfo.authors?.join(', ')}</p>
        <p><strong>Data de Publicação:</strong> {book.volumeInfo.publishedDate}</p>
        <RatingSelect value={rating} onChange={handleRatingChange}>
          <option value="">Classificação</option>
          <option value="5">5 estrelas</option>
          <option value="4">4 estrelas</option>
          <option value="3">3 estrelas</option>
          <option value="2">2 estrelas</option>
          <option value="1">1 estrela</option>
        </RatingSelect>
        {isFavorite && (
          <RemoveFavoriteButton onClick={() => removeFavorite(book.id)}>
            Remover dos Favoritos
          </RemoveFavoriteButton>
        )}
      </PopupContent>
    </PopupContainer>
  );
};

export default BookDetailsPopup;