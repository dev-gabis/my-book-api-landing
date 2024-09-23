import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000';

const apiService = {

  getAccomodations: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/accomodation/getAll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPlaces: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/place/getAll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTransportations: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/transportation/getAll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMeals: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/meal/getAll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getEvents: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/event/getAll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getGuides: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/guide/getAll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPackages: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/package/getAll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createItinerary: async (itinerary) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/itinerary/create`, itinerary);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getItinerary: async (id) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/itinerary/getById/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

};

export default apiService;
