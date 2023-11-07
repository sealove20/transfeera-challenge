import { SelectOption as SSelectOption } from './SelectOption.styles';

export const SelectOption = ({ children, value, ...props }) => {
  return (
    <SSelectOption value={value} {...props}>
      {children}
    </SSelectOption>
  );
};
