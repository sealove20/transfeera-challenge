const cnpjRegex = /^([\d_]{2})([\d_]{3})([\d_]{3})([\d_]{4})([\d_]{2})$/g;
const cnpjMask = '$1.$2.$3/$4-$5';

const getRemaining = (value) => (value % 11 < 2 ? 0 : 11 - (value % 11));

const generateCheckSums = (numbers, validators) => {
  const initialCheckSums = [0, 0];

  return validators.reduce(
    ([checkerA, checkerB], validator, index) => [
      index === 0 ? 0 : checkerA + numbers[index - 1] * validator,
      checkerB + numbers[index] * validator,
    ],
    initialCheckSums,
  );
};

const isRepeatedArray = (items) => items.every((item) => items[0] === item);

const mapToNumeric = (value) => value.replace(/\D/g, '');

const mapToNumbers = (value) => mapToNumeric(value).split('').map(Number);

export const validateCNPJ = (value) => {
  if (!/^(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})$/.test(value)) return false;
  const numbers = mapToNumbers(value);
  if (isRepeatedArray(numbers)) return false;
  const validators = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[12] === getRemaining(checkers[0]) &&
    numbers[13] === getRemaining(checkers[1])
  );
};

export const formatCnpj = (cnpj) => cnpj.replace(cnpjRegex, cnpjMask);

export const maskCnpj = (value = '') =>
  formatCnpj(
    value
      .replace(/\D/g, '')
      .replace(/(\d{14})[\w\W]/, '$1')
      .padStart(14, '_'),
  );
