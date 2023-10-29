import { FooterContainer, Column, Logo, Slogan, Info, SocialLinks, BackgroundGray } from './FooterStyles';
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <BackgroundGray>
      <FooterContainer>
        <Column>
          <Logo src={logo} alt="logo" />
          <Slogan>O Melhor para Caçadores de Fantasmas</Slogan>
          <Info>123 Elm Street, Haddonfield, IL</Info>
        </Column>

        <Column>
          <Link to="/category/1">Equipamento Eletrônico</Link>
          <Link to="/category/2">Equipamento de Áudio</Link>
          <Link to="/category/3">Ferramentas Analíticas</Link>
          <Link to="/category/4">Acessórios</Link>
        </Column>

        <Column>
          <SocialLinks href="https://facebook.com" target="_blank">
            <FaFacebook />
            Facebook
          </SocialLinks>
          <SocialLinks href="https://twitter.com" target="_blank">
            <FaTwitter />
            Twitter
          </SocialLinks>
          <SocialLinks href="https://instagram.com" target="_blank">
            <FaInstagram />
            Instagram
          </SocialLinks>
      </Column>
      </FooterContainer>
    </BackgroundGray>
  );
}

export default Footer;
