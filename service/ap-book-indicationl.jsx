import axios from 'axios';

const apiBaseUrl = 'https://www.googleapis.com/books/v1';

const apiService = {
  // Função para buscar livros com base em uma consulta de pesquisa e categoria
  getBooks: async (searchQuery, category, startIndex = 0, maxResults = 10) => {
    try {
      const categoryQuery = category ? `+subject:${category}` : '';
      const response = await axios.get(`${apiBaseUrl}/volumes?q=${searchQuery}${categoryQuery}&startIndex=${startIndex}&maxResults=${maxResults}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      throw new Error('Não foi possível buscar os livros. Tente novamente mais tarde.');
    }
  },

  // Função para buscar categorias (neste caso, categorias são fixas)
  getCategories: () => {
    return [
      { value: 'self-help', label: 'Autoajuda' },
      { value: 'psychology', label: 'Psicologia' },
      { value: 'philosophy', label: 'Filosofia' },
      { value: 'spirituality', label: 'Espiritualidade' },
      { value: 'mindfulness', label: 'Mindfulness' }
    ];
  }
};

export default apiService;