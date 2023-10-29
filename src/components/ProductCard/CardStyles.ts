import styled from 'styled-components';

export const StyledButton = styled.button`
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

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 15px;
  padding: 15px;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #f5f5f5;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;


export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductName = styled.h3`
  margin-top: 15px;
  font-size: 1.2em;
  color: black;
`;

export const ProductDescription = styled.p`
  color: #7f7f7f;
  color: black;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: black;
`;
