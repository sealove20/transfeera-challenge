import styled, { css } from 'styled-components';

export const TableRowBankIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const ReceiverListContainer = styled.div`
  padding: 0 45px;
  margin-top: ${(props) => (props.$isBatchDeleteButtonShown ? '128px' : '0px')};
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

export const deleteReceiverButton = css`
  width: 62px;
  background: ${(props) => props.theme.colors.red600};
`;

export const clickable = css`
  cursor: pointer;
`;

export const draftModal = css`
  max-height: 90%;
  width: 731px;
  overflow: auto;
`;

export const deleteModal = css`
  max-width: 635px;
  min-height: 355px;
  z-index: 8;
`;

export const deleteModalBackdrop = css`
  z-index: 7;
`;

export const modalStatus = css`
  margin-top: 35px;
`;

export const batchDeleteButton = css`
  font-size: ${(props) => props.theme.typography.fontSize.small};
  background-color: ${(props) => props.theme.colors.red500};
  min-width: 175px;
  margin: 39px 45px;
  display: ${(props) => (props.$isShown ? 'none' : 'flex')};
`;

export const inputWidth = css`
  width: 327px;
`;

export const capitalizedStatus = css`
  text-transform: capitalize;
`;
