import { forwardRef } from 'react';
import { Select as SSelect } from './Select.styles';

export const Select = forwardRef(({ $customCss, children, ...props }, ref) => {
  return (
    <SSelect $customCss={$customCss} {...props} ref={ref}>
      {children}
    </SSelect>
  );
});
