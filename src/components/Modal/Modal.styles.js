import styled, { css } from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  height: auto;
  padding: 47px 38px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.borderRadius.regular};
  z-index: 15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Backdrop = styled.div`
  content: '';
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.black};
  opacity: 0.3;
  z-index: 5;
`;

export const CloseIcon = styled.img`
  height: 15px;
  width: 14px;
  position: absolute;
  right: 23px;
  top: 25px;
  cursor: pointer;
`;

export const Header = styled.div``;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
`;

export const HeaderSubTitle = styled.h2`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.extraLarge};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  margin-top: 35px;
`;

export const Form = styled.div`
  margin-top: 53px;
  overflow-y: auto;
`;

export const FormLabel = styled.label`
  color: ${(props) => props.theme.colors.gray500};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  white-space: nowrap;
`;

export const GroupContainer = styled.div`
  display: flex;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    margin-top: 10px;
  }

  ${(props) => props.$customCss}
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const TrashIcon = styled.img`
  height: 18px;
  width: 14px;
`;

export const deleteReceiverButton = css`
  width: 62px;
  background: ${(props) => props.theme.colors.red600};
`;

export const modalStatus = css`
  margin-top: 35px;
`;

export const formGroupLeftSpacing = css`
  margin-left: 33px;
`;

export const formGroupTopSpacing = css`
  margin-top: 37px;
`;

export const formGroupSpaceBetween = css`
  margin-top: 22px;
`;
