import { Status as SStatus } from './Status.styles';

export const Status = ({ children, $customCss }) => {
  return <SStatus $customCss={$customCss}>{children}</SStatus>;
};
