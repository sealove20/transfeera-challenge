import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Form,
  GroupContainer,
  ButtonGroup,
  FormActions,
  FormGroup,
  FormLabel,
  TrashIcon,
  formGroupLeftSpacing,
  formGroupSpaceBetween,
  formGroupTopSpacing,
  formSelectSpacing,
  inputSizes,
  bankDataInputSpacing,
  bankDataInputSize,
  fullSpace,
} from './EditReceiverForm.styles';

import trashIcon from '../../../../assets/trash-icon.svg';
import { Button, Input } from '../../../../components';
import { OutlinedButton } from '../../../../components/Button/Button';
import {
  ErrorTip,
  SubTitle,
  deleteReceiverButton,
} from '../../styles/receivers.styles';
import { receiverEditSchema } from '../receiver.schema';
import {
  cpfMask,
  cpfMaskExample,
  mapMaskExampleType,
  mapMaskType,
} from '../../../../constants/masks';
import { MaskedInput } from '../../../../components/Input/Input';
import { Select } from '../../../../components/Select/Select';
import { SelectOption } from '../../../../components/Select/SelectOption/SelectOption.styles';
import useEditReceiver from '../../Hooks/useEditReceiver';
import { useToast } from '../../../../components/ToastNotification/ToastNotification';

export const EditReceiverForm = ({
  onCloseClick,
  onOpenDeleteModal,
  receiver,
  fetchReceivers,
  pagination,
  onCloseDraftModal,
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
    getValues,
  } = useForm({
    resolver: yupResolver(receiverEditSchema),
    defaultValues: {
      pixKeyType: 'cpf',
    },
  });

  const onDelete = (event) => {
    event.preventDefault();
    onOpenDeleteModal();
  };

  const checkEmptyReceiver = (receiver) => receiver.length !== 0;

  const onSubmit = (receiver) => {
    setValue('status', 'validado');
    editReceiver(receiver).then(() => {
      addToast('Favorecido alterado com sucesso', 'success');
      fetchReceivers(pagination);
      onCloseDraftModal();
    });
  };

  useEffect(() => {
    if (checkEmptyReceiver(receiver)) {
      setValue('id', receiver?.id);
      setValue('name', receiver?.name);
      setValue('taxId', receiver?.taxId);
      setValue('email', receiver?.email);
      setValue('pixKeyType', receiver?.pixKeyType);
      setValue('pixKey', receiver?.pixKey);
      setValue('bankName', receiver?.bankName);
      setValue('branch', receiver?.branch);
      setValue('accountType', receiver?.accountType);
      setValue('account', receiver?.account);
    }
  }, [receiver]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GroupContainer>
        <FormGroup>
          <FormLabel htmlFor="">
            Qual o nome completo ou razão social do favorecido?
          </FormLabel>
          <Input
            placeholderText="Digite o nome ou razão social"
            {...register('name')}
          />
          <ErrorTip>{errors.name?.message}</ErrorTip>
        </FormGroup>
        <FormGroup $customCss={formGroupLeftSpacing}>
          <FormLabel htmlFor="">Qual o CPF ou CNPJ?</FormLabel>
          <Controller
            name="taxId"
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
            render={() => (
              <>
                <MaskedInput
                  mask={cpfMask}
                  alwaysShowMask={false}
                  maskChar=""
                  type={'text'}
                  placeholder={`Ex: ${cpfMaskExample}`}
                  register={register}
                  registerId="taxId"
                />
              </>
            )}
          />
          <ErrorTip>{errors.taxId?.message}</ErrorTip>
        </FormGroup>
      </GroupContainer>
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
      <SubTitle>Quais os dados bancários do favorecido?</SubTitle>
      <FormGroup $customCss={formGroupTopSpacing}>
        <FormLabel htmlFor="">Tipo de chave</FormLabel>
        <Controller
          name="pixKeyType"
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field: { value } }) => (
            <Select
              value={value}
              {...register('pixKeyType')}
              $customCss={[formSelectSpacing, inputSizes]}
            >
              <SelectOption value="cpf">CPF</SelectOption>
              <SelectOption value="cnpj">CNPJ</SelectOption>
              <SelectOption value="celular">Celular</SelectOption>
              <SelectOption value="aleatoria">Chave aleatória</SelectOption>
              <SelectOption value="email">Email</SelectOption>
            </Select>
          )}
        />
        <ErrorTip>{errors.pixKeyType?.message}</ErrorTip>
      </FormGroup>
      <FormGroup $customCss={formGroupSpaceBetween}>
        <FormLabel htmlFor="">Chave</FormLabel>
        {getValues('pixKeyType') === 'email' ? (
          <Input placeholderText="email@email.com" {...register('pixKey')} />
        ) : (
          <MaskedInput
            mask={mapMaskType[watch('pixKeyType')]}
            alwaysShowMask={false}
            maskChar=""
            type={'text'}
            placeholder={`Ex: ${mapMaskExampleType[watch('pixKeyType')]}`}
            register={register}
            registerId="pixKey"
          />
        )}
        <ErrorTip>{errors.pixKey?.message}</ErrorTip>
      </FormGroup>
      <GroupContainer>
        <FormGroup $customCss={[formGroupTopSpacing, bankDataInputSize]}>
          <FormLabel htmlFor="">Qual o nome do banco?</FormLabel>
          <Input
            placeholderText="Digite o nome do banco"
            {...register('bankName')}
          />
          <ErrorTip>{errors.bankName?.message}</ErrorTip>
        </FormGroup>
        <FormGroup
          $customCss={[
            formGroupTopSpacing,
            bankDataInputSize,
            bankDataInputSpacing,
          ]}
        >
          <FormLabel htmlFor="">Qual o número da agência?</FormLabel>
          <Input
            placeholderText="Digite o número da agência"
            {...register('branch')}
          />
          <ErrorTip>{errors.branch?.message}</ErrorTip>
        </FormGroup>
      </GroupContainer>
      <GroupContainer>
        <FormGroup $customCss={[formGroupTopSpacing, bankDataInputSize]}>
          <FormLabel htmlFor="">Qual o tipo de conta?</FormLabel>

          <Select
            {...register('accountType')}
            $customCss={[formSelectSpacing, fullSpace]}
          >
            <SelectOption value="corrente">Conta corrente</SelectOption>
            <SelectOption value="poupanca">Conta poupança</SelectOption>
          </Select>

          <ErrorTip>{errors.accountType?.message}</ErrorTip>
        </FormGroup>
        <FormGroup
          $customCss={[
            formGroupTopSpacing,
            bankDataInputSize,
            bankDataInputSpacing,
          ]}
        >
          <FormLabel htmlFor="">Qual o número da conta?</FormLabel>
          <Input
            placeholderText="Digite o número da conta"
            {...register('account')}
          />
          <ErrorTip>{errors.account?.message}</ErrorTip>
        </FormGroup>
      </GroupContainer>
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
