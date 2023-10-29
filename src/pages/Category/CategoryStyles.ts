import styled from 'styled-components';

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Vai sempre criar 4 colunas de tamanho igual
  gap: 20px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;
