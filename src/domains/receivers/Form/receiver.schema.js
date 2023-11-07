import * as yup from 'yup';

import {
  validateCPF,
  validateCNPJ,
  validatePhone,
  validateRandomKey,
} from '../../../common-functions';

export const receiverCreateSchema = yup
  .object()
  .shape({
    name: yup.string().required('O campo nome é obrigatório'),
    email: yup
      .string()
      .email('Email inválido')
      .required('O campo email é obrigatório'),
    taxId: yup
      .string()
      .required('O CPF é obrigatório')
      .test('test-cpf', 'O CPF deve ser válido', validateCPF),
    pixKeyType: yup.string().required('O campo tipo de chave é obrigatório'),
    pixKey: yup
      .string()
      .when('pixKeyType', {
        is: 'cpf',
        then: () =>
          yup
            .string()
            .required('O CPF é obrigatório')
            .test('test-cpf', 'O CPF deve ser válido', validateCPF),
      })
      .when('pixKeyType', {
        is: 'cnpj',
        then: () =>
          yup
            .string()
            .test('test-cnpj', 'O CNPJ deve ser válido', validateCNPJ),
      })
      .when('pixKeyType', {
        is: 'celular',
        then: () =>
          yup
            .string()
            .test('test-phone', 'O celular deve ser válido', validatePhone),
      })
      .when('pixKeyType', {
        is: 'aleatoria',
        then: () =>
          yup
            .string()
            .test(
              'test-random-key',
              'O chave aleatória deve ser válida',
              validateRandomKey,
            ),
      })
      .when('pixKeyType', {
        is: 'email',
        then: () => yup.string().email('Email inválido'),
      }),
  })
  .required();

export const receiverEditSchema = receiverCreateSchema
  .shape({
    bankName: yup.string().required('O campo nome do banco é obrigatório'),
    branch: yup.string().required('O campo número da agência é obrigatório'),
    accountType: yup.string().required('O campo tipo de conta é obrigatório'),
    account: yup.string().required('O campo número da conta é obrigatório'),
  })
  .required();
