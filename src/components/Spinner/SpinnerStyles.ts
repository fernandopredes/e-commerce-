import styled, { keyframes } from 'styled-components';

export const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

export const GhostSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
  flex-direction: column;
  span{
    margin-top: .5rem;
  }
`;

export const Ghost = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50% 50% 0 0;
  position: relative;
  animation: ${float} 2s ease-in-out infinite;

  &:before, &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
  }

  &:before {
    left: -20px;
  }

  &:after {
    right: -20px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 28px;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 5px;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }
`;
