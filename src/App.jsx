import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/GlobalStyle';
import BookDetailsPopup from './components/BookDetailsPopup';

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

  &:hover {
    background-color: #fdd835;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [books, setBooks] = useState([]);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);

  const suggestions = [
    'O Poder do Agora',
    'A Nova Terra',
    'Desperte Seu Gigante Interior',
    'Inteligência Emocional',
    'Os Quatro Compromissos'
  ];

  const handleSearch = async (newPage = 0) => {
    try {
      const startIndex = newPage * 10;
      const categoryQuery = category ? `+subject:${category}` : '';
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${categoryQuery}&startIndex=${startIndex}&maxResults=10`);
      const data = await response.json();
      setBooks(data.items || []);
      setTotalItems(data.totalItems || 0);
      setSearched(true);
      setPage(newPage);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  const handleNextPage = () => {
    handleSearch(page + 1);
  };

  const handlePreviousPage = () => {
    handleSearch(page - 1);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClosePopup = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <GlobalStyle />
      <Header suggestions={!searchQuery ? suggestions : null} />
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
        <SearchButton onClick={() => handleSearch(0)}>Pesquisar</SearchButton>
      </SearchContainer>
      <BookList books={books} searched={searched} onBookClick={handleBookClick} />
      {searched && (
        <PaginationContainer>
          <PaginationButton onClick={handlePreviousPage} disabled={page === 0}>
            Anterior
          </PaginationButton>
          <PaginationButton onClick={handleNextPage} disabled={(page + 1) * 10 >= totalItems}>
            Próxima
          </PaginationButton>
        </PaginationContainer>
      )}
      {selectedBook && <BookDetailsPopup book={selectedBook} onClose={handleClosePopup} />}
      <Footer />
    </>
  );
}

export default App;