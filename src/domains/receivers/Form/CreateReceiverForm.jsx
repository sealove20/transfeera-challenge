import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Form,
  FormGroup,
  FormLabel,
  GroupContainer,
  HeaderSubTitle,
  formGroupTopSpacing,
  formGroupLeftSpacing,
  formGroupSpaceBetween,
  FormActions,
  ButtonGroup,
  CreateReceiverFormContainer,
  ErrorTip,
  Select,
  SelectOption,
  formSelectSpacing,
} from './CreateReceiverForm.styles';

import { Button, Input } from '../../../components';
import { OutlinedButton } from '../../../components/Button/Button';
import { MaskedInput } from '../../../components/Input/Input';

import useCreateReceiver from '../Hooks/useCreateReceiver';
import { useEffect } from 'react';
import {
  cpfMask,
  cpfMaskExample,
  mapMaskExampleType,
  mapMaskType,
} from '../../../constants/masks';
import { schema } from './receiver.schema';
import { useToast } from '../../../components/ToastNotification/ToastNotification';

export const CreateReceiverForm = ({ navigateToHome }) => {
  const { createReceiver } = useCreateReceiver();
  const { add: addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      pixKeyType: 'cpf',
    },
  });

  const onSubmit = (receiver) => {
    createReceiver(receiver);
    addToast('Favorecido criado com sucesso', 'success');
    navigateToHome();
  };

  useEffect(() => {
    setValue('pixKey', '');
  }, [watch('pixKeyType')]);

  return (
    <CreateReceiverFormContainer>
      <HeaderSubTitle>Quais os dados do favorecido?</HeaderSubTitle>

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
          <Input placeholderText="Digite o email" {...register('email')} />
          <ErrorTip>{errors.email?.message}</ErrorTip>
        </FormGroup>
        <HeaderSubTitle>Quais os dados bancários do favorecido?</HeaderSubTitle>
        <FormGroup $customCss={formGroupTopSpacing}>
          <FormLabel htmlFor="">Tipo de chave</FormLabel>
          <Select {...register('pixKeyType')} $customCss={formSelectSpacing}>
            <SelectOption value="cpf">CPF</SelectOption>
            <SelectOption value="cnpj">CNPJ</SelectOption>
            <SelectOption value="celular">Celular</SelectOption>
            <SelectOption value="aleatoria">Chave aleatória</SelectOption>
            <SelectOption value="email">Email</SelectOption>
          </Select>
          <ErrorTip>{errors.pixKeyType?.message}</ErrorTip>
        </FormGroup>
        <FormGroup $customCss={formGroupSpaceBetween}>
          <FormLabel htmlFor="">Chave</FormLabel>
          <MaskedInput
            mask={mapMaskType[watch('pixKeyType')]}
            alwaysShowMask={false}
            maskChar=""
            type={'text'}
            placeholder={`Ex: ${mapMaskExampleType[watch('pixKeyType')]}`}
            register={register}
            registerId="pixKey"
          />
          <ErrorTip>{errors.pixKey?.message}</ErrorTip>
        </FormGroup>
        <FormActions>
          <OutlinedButton onClick={navigateToHome}>Voltar</OutlinedButton>
          <ButtonGroup>
            <Button type="submit">Salvar</Button>
          </ButtonGroup>
        </FormActions>
      </Form>
    </CreateReceiverFormContainer>
  );
};
