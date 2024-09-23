import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-wrap: wrap;
`;

const FilterInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  margin: 5px;
`;

const FilterSelect = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  margin: 5px;
`;

const AdvancedFilters = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <FiltersContainer>
      <FilterInput
        type="text"
        name="author"
        value={filters.author}
        onChange={handleInputChange}
        placeholder="Autor"
      />
      <FilterInput
        type="date"
        name="publishedDate"
        value={filters.publishedDate}
        onChange={handleInputChange}
        placeholder="Data de Publicação"
      />
      <FilterSelect
        name="rating"
        value={filters.rating}
        onChange={handleInputChange}
      >
        <option value="">Classificação</option>
        <option value="5">5 estrelas</option>
        <option value="4">4 estrelas</option>
        <option value="3">3 estrelas</option>
        <option value="2">2 estrelas</option>
        <option value="1">1 estrela</option>
      </FilterSelect>
    </FiltersContainer>
  );
};

export default AdvancedFilters;