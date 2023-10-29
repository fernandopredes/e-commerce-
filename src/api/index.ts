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
