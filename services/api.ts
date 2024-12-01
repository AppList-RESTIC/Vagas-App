import axios from 'axios';

// 'http://seuip:3000' pode funcionar dependendo do dispositivo e suas configuracoes 
const BASE_URL = 'http://localhost:3000'; // Substitua pela URL correta da sua API

const api = axios.create({
  baseURL: BASE_URL,
});

// Função para buscar as vagas
export const getVagas = async () => {
  try {
    const response = await api.get('/vagas'); // Caminho para o endpoint da API
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
