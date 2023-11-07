import styled from 'styled-components';

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 188px;
  height: 30px;
  background-color: ${(props) =>
    props.$status === 'validado'
      ? props.theme.colors.blue700
      : props.theme.colors.gray200};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  ${(props) => props.$customCss}
`;
