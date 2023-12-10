/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://ghost-store.onrender.com0';

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

export const fetchCategories = () => {
  return fetch(`${BASE_URL}/categories/`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na rede ao buscar as categorias.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Erro ao buscar as categorias:', error);
      return [];
    });
};

export const fetchItemsByCategory = (categoryId: any) => {
  return fetch(`${BASE_URL}/categories/${categoryId}/items`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na rede ao buscar os itens da categoria.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Erro ao buscar os itens da categoria:', error);
      return [];
    });
};

export const fetchSearchResults = (query:any) => {
  return fetch(`${BASE_URL}/items/search?query=${encodeURIComponent(query)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na rede ao buscar resultados.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Erro ao buscar resultados:', error);
      return [];
    });
};
