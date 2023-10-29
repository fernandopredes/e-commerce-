import styled from 'styled-components';

export const BackgroundGray = styled.div`
background-color: #333;
`

export const FooterContainer = styled.footer`
  margin-top: 100px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }
`;

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  a:visited {
  color: white;

  @media (max-width: 480px) {
    align-items: center;
  }
}
`;

export const Logo = styled.img`
max-width: 8rem;
`;

export const Slogan = styled.p``;

export const Info = styled.p``;

export const SocialLinks = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 1.2rem;
  }
`;
