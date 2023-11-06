import {
  CloseIcon,
  NavigationContainer,
  NavigationItem,
  Navigation as SNavigation,
} from './Navigation.styles';

import whiteCloseIcon from '../../assets/white-close-icon.svg';

export const Navigation = ({ isHome, onCloseClick }) => {
  return (
    <SNavigation>
      <NavigationContainer $isHome={isHome}>
        {isHome ? (
          <NavigationItem>Seus favorecidos</NavigationItem>
        ) : (
          <CloseIcon src={whiteCloseIcon} onClick={onCloseClick} />
        )}
      </NavigationContainer>
    </SNavigation>
  );
};
