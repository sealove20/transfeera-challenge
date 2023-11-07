import styled, { css } from 'styled-components';

export const TableRowBankIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const ReceiverListContainer = styled.div`
  padding: 0 45px;
  margin-top: 100px;
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.extraLarge};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  margin-top: 35px;
`;

export const ErrorTip = styled.span`
  position: absolute;
  top: 60px;
  font-size: ${(props) => props.theme.typography.fontSize.extraSmall};
  color: ${(props) => props.theme.semanticColors.dangerText};
`;

export const clickable = css`
  cursor: pointer;
`;

export const draftModal = css`
  max-height: 90%;
  overflow: auto;
`;

export const deleteModal = css`
  min-width: 635px;
  min-height: 355px;
  z-index: 8;
`;

export const deleteModalBackdrop = css`
  z-index: 7;
`;
