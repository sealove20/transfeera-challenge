import { FooterImage, Footer as SFooter } from './Footer.styles';
import transfeeraLogo from '../../assets/footer-logo.svg';

export const Footer = () => {
  return (
    <SFooter>
      <FooterImage src={transfeeraLogo} />
    </SFooter>
  );
};
