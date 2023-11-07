import styled, { css } from 'styled-components';

export const DeleteModal = styled.div``;

export const DeleteModalSubtitle = styled.h2`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.big};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};

  margin-top: 37px;
`;

export const DeleteModalText = styled.p`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.big};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};

  margin-top: 10px;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const confirmDeletionButton = css`
  background: ${(props) => props.theme.colors.red600};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};

  width: 165px;
`;
