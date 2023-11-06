import styled, { css } from 'styled-components';

export const CreateReceiverFormContainer = styled.div`
  padding: 75px 10rem;
`;

export const Form = styled.form`
  margin-top: 53px;
  overflow-y: auto;
`;

export const HeaderSubTitle = styled.h2`
  color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.typography.fontSize.extraLarge};
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  margin-top: 35px;
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

export const ErrorTip = styled.span`
  position: absolute;
  top: 60px;
  font-size: ${(props) => props.theme.typography.fontSize.extraSmall};
  color: ${(props) => props.theme.semanticColors.dangerText};
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

export const Select = styled.select`
  border: 2px solid ${(props) => props.theme.colors.gray700};
  width: 350px;
  padding: 5px;
  color: ${(props) => props.theme.colors.gray500};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;

  ${(props) => props.$customCss}
`;

export const SelectOption = styled.option``;

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

export const formSelectSpacing = css`
  margin-top: 8px;
`;
