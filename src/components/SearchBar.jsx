import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  outline: none;
  width: 300px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 5px 5px 0;
  background-color: #ffeb3b;
  color: black;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #fdd835;
  }
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ffeb3b;
  color: black;
  cursor: pointer;
  outline: none;
  margin-left: 10px;

  &:hover {
    background-color: #fdd835;
  }
`;

const CategorySelect = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  margin-left: 10px;
`;

const SearchBar = ({ searchQuery, setSearchQuery, category, setCategory, handleSearch, handleClear }) => {
    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar livros"
            />
            <CategorySelect value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Todas as Categorias</option>
                <option value="self-help">Autoajuda</option>
                <option value="psychology">Psicologia</option>
                <option value="philosophy">Filosofia</option>
                <option value="spirituality">Espiritualidade</option>
                <option value="mindfulness">Mindfulness</option>
            </CategorySelect>
            <SearchButton onClick={() => handleSearch(0)}>
                <FaSearch style={{ marginRight: '5px' }} />
                Pesquisar
            </SearchButton>
            <ClearButton onClick={handleClear}>Limpar</ClearButton>
        </SearchContainer>
    );
};

export default SearchBar;