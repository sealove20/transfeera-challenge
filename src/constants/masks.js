export const cnpjMask = '99.999.999/9999-999';
const phoneMask = '(99) 9 9999-9999';
export const cpfMask = '999.999.999-99';
const randomKeyMask = '********-****-****-****-************';
const emailMask = '';

const randomKeyMaskExample = '2e2020ed-ce87-4f80-9c45-89d7525c7e96';
export const cnpjMaskExample = '00.000.000/0000-00';
export const cpfMaskExample = '000.000.000-00';
const phoneMaskExample = '(00) 0 0000-0000';
const emailMaskExample = 'email@email.com';

export const mapMaskType = {
  celular: phoneMask,
  cnpj: cnpjMask,
  cpf: cpfMask,
  aleatoria: randomKeyMask,
  email: emailMask,
};

export const mapMaskExampleType = {
  celular: phoneMaskExample,
  cnpj: cnpjMaskExample,
  cpf: cpfMaskExample,
  aleatoria: randomKeyMaskExample,
  email: emailMaskExample,
};
