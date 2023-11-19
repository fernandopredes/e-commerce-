import styled from 'styled-components';


export const StyledDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 40px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 60px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 20px;
  }
`;

export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3{
    color: black;
  }
`;

export const StyledProductName = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledProductPrice = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  color: #555;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledQuantityInput = styled.input`
  margin-bottom: 20px;
  width: 50px;
  text-align: center;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledAddButton = styled.button`
  padding: 10px;
  background-color: #ff8400;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5900;
  }
`;
