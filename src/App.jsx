import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import FavoritesList from './components/FavoritesList';
import AdvancedFilters from './components/AdvancedFilters';
import Footer from './components/Footer';
import BookDetailsPopup from './components/BookDetailsPopup';
import ReadingHistory from './components/ReadingHistory';

const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#333333',
  color: '#ffffff',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
  }
`;

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const ThemeToggleButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  cursor: pointer;
`;

const FavoritesToggleButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  cursor: pointer;
`;

const HistoryToggleButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  cursor: pointer;
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
  const [theme, setTheme] = useState(lightTheme);
  const [showFavorites, setShowFavorites] = useState(false);
  const [readingHistory, setReadingHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    const storedHistory = JSON.parse(localStorage.getItem('readingHistory')) || [];
    setReadingHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('readingHistory', JSON.stringify(readingHistory));
  }, [readingHistory]);

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
    addToReadingHistory(book);
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

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const isFavorite = (bookId) => {
    return favorites.some(book => book.id === bookId);
  };

  const addToReadingHistory = (book) => {
    if (!readingHistory.some(item => item.id === book.id)) {
      setReadingHistory([...readingHistory, book]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <ButtonContainer>
          <ThemeToggleButton onClick={toggleTheme}>
            Alternar Tema
          </ThemeToggleButton>
          <FavoritesToggleButton onClick={toggleFavorites}>
            {showFavorites ? 'Mostrar Todos' : 'Mostrar Favoritos'}
          </FavoritesToggleButton>
          <HistoryToggleButton onClick={toggleHistory}>
            {showHistory ? 'Ocultar Histórico' : 'Mostrar Histórico'}
          </HistoryToggleButton>
        </ButtonContainer>
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
        {showFavorites ? (
          <FavoritesList favorites={favorites} onBookClick={handleBookClick} removeFavorite={removeFavorite} />
        ) : showHistory ? (
          <ReadingHistory readingHistory={readingHistory} onBookClick={handleBookClick} />
        ) : (
          <BookList books={books} searched={searched} onBookClick={handleBookClick} addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} />
        )}
        {searched && !showFavorites && !showHistory && (
          <Pagination
            page={page}
            totalItems={totalItems}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        )}
        {selectedBook && (
          <BookDetailsPopup
            book={selectedBook}
            onClose={handleClosePopup}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite(selectedBook.id)}
          />
        )}
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;