/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://ghost-store.onrender.com';

export const fetchProducts = () => {
  return fetch(`${BASE_URL}/items`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na rede ao buscar os produtos.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Erro ao buscar os produtos:', error);
      return [];
    });
};

export const fetchProductDetails = (productId: any) => {
  return fetch(`${BASE_URL}/items/${productId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na rede ao buscar detalhes do produto.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Erro ao buscar detalhes do produto:', error);
    });
};
