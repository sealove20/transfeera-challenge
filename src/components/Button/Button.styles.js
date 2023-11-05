import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primaryButton};
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  width: 158px;
  height: 50px;
  cursor: pointer;
  font-weight: 400;
`;

export const CircleButton = styled(Button)`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 50%;
  padding: 0;
  background-color: ${(props) => props.theme.colors.green300};
  ${(props) => props.$customCss}
`;