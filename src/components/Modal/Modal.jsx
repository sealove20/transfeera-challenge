import {
  Backdrop,
  CloseIcon,
  Form,
  FormGroup,
  FormLabel,
  GroupContainer,
  Header,
  HeaderSubTitle,
  HeaderTitle,
  Modal as SModal,
  formGroupTopSpacing,
  formGroupLeftSpacing,
  modalStatus,
  formGroupSpaceBetween,
  FormActions,
  TrashIcon,
  ButtonGroup,
  deleteReceiverButton,
} from './Modal.styles';
import closeIcon from '../../assets/close-icon.svg';
import trashIcon from '../../assets/trash-icon.svg';
import { Status } from '../Status/Status';
import { Input } from '../Input/Input';
import { Button, OutlinedButton } from '../Button/Button';

export const Modal = ({ isVisible = false, onCloseClick }) => {
  if (!isVisible) return null;
  return (
    <>
      <Backdrop onClick={onCloseClick} />
      <SModal>
        <CloseIcon src={closeIcon} onClick={onCloseClick} />
        <Header>
          <HeaderTitle>Gui Damian Verdasca</HeaderTitle>
          <Status $customCss={modalStatus}>Rascunho</Status>
          <HeaderSubTitle>Quais os dados favorecido?</HeaderSubTitle>
          <Form>
            <GroupContainer>
              <FormGroup>
                <FormLabel htmlFor="">
                  Qual o nome completo ou razão social do favorecido?
                </FormLabel>
                <Input />
              </FormGroup>
              <FormGroup $customCss={formGroupLeftSpacing}>
                <FormLabel htmlFor="">Qual o CPF ou CNPJ?</FormLabel>
                <Input />
              </FormGroup>
            </GroupContainer>
            <FormGroup $customCss={formGroupTopSpacing}>
              <FormLabel htmlFor="">
                Qual o e-mail para o envio do comprovante?
              </FormLabel>
              <Input />
            </FormGroup>
            <HeaderSubTitle>
              Quais os dados bancários do favorecido?
            </HeaderSubTitle>
            <FormGroup $customCss={formGroupTopSpacing}>
              <FormLabel htmlFor="">Tipo de chave</FormLabel>
              <Input />
            </FormGroup>
            <FormGroup $customCss={formGroupSpaceBetween}>
              <FormLabel htmlFor="">Chave</FormLabel>
              <Input />
            </FormGroup>
            <FormActions>
              <OutlinedButton onClick={onCloseClick}>Voltar</OutlinedButton>
              <ButtonGroup>
                <Button $customCss={deleteReceiverButton}>
                  <TrashIcon src={trashIcon} />
                </Button>
                <Button>Salvar</Button>
              </ButtonGroup>
            </FormActions>
          </Form>
        </Header>
      </SModal>
    </>
  );
};
