const cpfRegex = /^([\d_]{3})([\d_]{3})([\d_]{3})([\d_]{2})$/g;
const cpfMask = '$1.$2.$3-$4';

export const validateCPF = (cpf) => {
  if (typeof cpf !== 'string') return false;
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  cpf = cpf.split('').map((el) => +el);
  const rest = (count) =>
    ((cpf
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;
  return rest(10) === cpf[9] && rest(11) === cpf[10];
};

export const formatCpf = (cpf) => cpf.replace(cpfRegex, cpfMask);

export const maskCpf = (value = '') =>
  formatCpf(
    value
      .replace(/\D/g, '')
      .replace(/(\d{11})[\w\W]/, '$1')
      .padStart(11, '_'),
  );
