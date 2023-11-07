import { Status as SStatus } from './Status.styles';

export const Status = ({ children, $customCss, $status }) => {
  return (
    <SStatus $customCss={$customCss} $status={$status}>
      {children}
    </SStatus>
  );
};
