import styled, { css } from 'styled-components';

export const Form = styled.form`
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
  position: relative;

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

export const TrashIcon = styled.img`
  height: 18px;
  width: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const deleteReceiverButton = css`
  width: 62px;
  background: ${(props) => props.theme.colors.red600};
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

export const formSelectSpacing = css`
  margin-top: 8px;
`;

export const inputSizes = css`
  width: 60%;
`;

export const bankDataInputSize = css`
  width: 45%;
`;

export const bankDataInputSpacing = css`
  margin-left: 5%;
`;

export const fullSpace = css`
  width: 100%;
`;
