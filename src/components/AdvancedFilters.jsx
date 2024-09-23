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
    </FiltersContainer>
  );
};

export default AdvancedFilters;