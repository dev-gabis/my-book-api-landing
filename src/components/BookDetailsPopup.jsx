import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  background: #ffeb3b;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;

  &:hover {
    background: #fdd835;
  }
`;

const BookDetailsPopup = ({ book, onClose }) => {
  if (!book || !book.volumeInfo) {
    return null;
  }

  const { title, authors, description, publishedDate, publisher } = book.volumeInfo;

  return (
    <PopupOverlay>
      <PopupContent>
        <CloseButton onClick={onClose}>
          <FaTimes style={{ marginRight: '5px' }} />
          Fechar
        </CloseButton>
        <h2>{title}</h2>
        {authors && <p><strong>Autores:</strong> {authors.join(', ')}</p>}
        {description && <p><strong>Descrição:</strong> {description}</p>}
        {publishedDate && <p><strong>Publicado em:</strong> {publishedDate}</p>}
        {publisher && <p><strong>Editora:</strong> {publisher}</p>}
      </PopupContent>
    </PopupOverlay>
  );
};

export default BookDetailsPopup;