import {
  Button as SButton,
  CircleButton as SCircleButton,
  OutlinedButton as SOutlinedButton,
} from './Button.styles';

export const Button = ({ children, $customCss, ...props }) => {
  return (
    <SButton $customCss={$customCss} {...props}>
      {children}
    </SButton>
  );
};

export const CircleButton = ({ children, $size, $customCss, ...props }) => {
  return (
    <SCircleButton $size={$size} $customCss={$customCss} {...props}>
      {children}
    </SCircleButton>
  );
};

export const OutlinedButton = ({ children, ...props }) => {
  return <SOutlinedButton {...props}>{children}</SOutlinedButton>;
};
