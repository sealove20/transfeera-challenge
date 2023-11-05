import { HeaderContent, HeaderImage, Header as SHeader } from './Header.styles';
import transfeeraLogo from '../../assets/transfeera-logo.svg';

export const Header = () => {
  return (
    <SHeader>
      <HeaderContent>
        <HeaderImage
          src={transfeeraLogo}
          alt="A logo of a company called Transfeera. 
          There is a bridge with two pilars and cables and in front is written 'transfeera'"
        />
      </HeaderContent>
    </SHeader>
  );
};
