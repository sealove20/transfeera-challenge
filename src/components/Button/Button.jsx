import {
  Button as SButton,
  CircleButton as SCircleButton,
} from './Button.styles';

export const Button = ({ children }) => {
  return <SButton>{children}</SButton>;
};

export const CircleButton = ({ children, $size, $customCss }) => {
  return (
    <SCircleButton $size={$size} $customCss={$customCss}>
      {children}
    </SCircleButton>
  );
};
