import styled, { css } from 'styled-components';

export const FieldText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.gray500};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  min-width: 110px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.huge};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  margin-top: 14px;
`;

export const FieldTextGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
