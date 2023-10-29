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
`;

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  a:visited {
  color: white;
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
