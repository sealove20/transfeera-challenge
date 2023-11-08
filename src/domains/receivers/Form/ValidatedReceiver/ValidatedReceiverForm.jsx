import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, OutlinedButton } from '../../../../components/Button/Button';
import { ErrorTip, deleteReceiverButton } from '../../styles/receivers.styles';
import {
  ButtonGroup,
  Form,
  FormActions,
  FormGroup,
  FormLabel,
  TrashIcon,
  formGroupTopSpacing,
  inputSizes,
} from './ValidatedReceiverForm.styles';
import trashIcon from '../../../../assets/trash-icon.svg';
import useEditReceiver from '../../Hooks/useEditReceiver';
import { useToast } from '../../../../components/ToastNotification/ToastNotification';
import { receiverValidatedSchema } from '../receiver.schema';
import { Input } from '../../../../components';

export const ValidatedReceiverForm = ({
  onCloseClick,
  onOpenDeleteModal,
  receiver,
  fetchReceivers,
  onCloseValidatedModal,
}) => {
  const { editReceiver } = useEditReceiver();
  const { add: addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(receiverValidatedSchema),
  });

  const onDelete = (event) => {
    event.preventDefault();
    onOpenDeleteModal();
  };

  const onSubmit = (email) => {
    const newReceiver = { ...receiver, email: email.email };
    editReceiver(newReceiver).then(() => {
      addToast('Favorecido alterado com sucesso', 'success');
      fetchReceivers();
      onCloseValidatedModal();
    });
  };

  const checkEmptyReceiver = (receiver) => receiver.length !== 0;

  useEffect(() => {
    if (checkEmptyReceiver(receiver)) {
      setValue('email', receiver?.email);
    }
  }, [receiver]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup $customCss={formGroupTopSpacing}>
        <FormLabel htmlFor="">
          Qual o e-mail para o envio do comprovante?
        </FormLabel>
        <Input
          $customCss={inputSizes}
          placeholderText="Digite o email"
          {...register('email')}
        />
        <ErrorTip>{errors.email?.message}</ErrorTip>
      </FormGroup>
      <FormActions>
        <OutlinedButton onClick={onCloseClick}>Voltar</OutlinedButton>
        <ButtonGroup>
          <Button
            $customCss={deleteReceiverButton}
            onClick={(event) => onDelete(event)}
          >
            <TrashIcon src={trashIcon} />
          </Button>
          <Button type="submit">Salvar</Button>
        </ButtonGroup>
      </FormActions>
    </Form>
  );
};
