import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import FavoritesList from './components/FavoritesList';
import AdvancedFilters from './components/AdvancedFilters';
import Footer from './components/Footer';
import BookDetailsPopup from './components/BookDetailsPopup';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [books, setBooks] = useState([]);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({ author: '', publishedDate: '', rating: '' });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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
      const authorQuery = filters.author ? `+inauthor:${filters.author}` : '';
      const dateQuery = filters.publishedDate ? `+inpublisher:${filters.publishedDate}` : '';
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${categoryQuery}${authorQuery}${dateQuery}&startIndex=${startIndex}&maxResults=10`);
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

  const handleClear = () => {
    setSearchQuery('');
    setCategory('');
    setBooks([]);
    setSearched(false);
    setPage(0);
    setTotalItems(0);
    setSelectedBook(null);
  };

  const addFavorite = (book) => {
    setFavorites([...favorites, book]);
  };

  const removeFavorite = (bookId) => {
    setFavorites(favorites.filter(book => book.id !== bookId));
  };

  return (
    <AppContainer>
      <Header suggestions={!searchQuery ? suggestions : null} />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        category={category}
        setCategory={setCategory}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <AdvancedFilters filters={filters} setFilters={setFilters} />
      <BookList books={books} searched={searched} onBookClick={handleBookClick} addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} />
      {searched && (
        <Pagination
          page={page}
          totalItems={totalItems}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      )}
      {selectedBook && <BookDetailsPopup book={selectedBook} onClose={handleClosePopup} />}
      <FavoritesList favorites={favorites} onBookClick={handleBookClick} removeFavorite={removeFavorite} />
      <Footer />
    </AppContainer>
  );
}

export default App;