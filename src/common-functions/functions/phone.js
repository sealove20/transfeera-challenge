export const validatePhone = (phone = '') => {
  const phoneLength = String(phone)
    .replace(/[\s()-]/g, '')
    .replace(/^0*/, '').length;
  return phoneLength >= 8 && phoneLength <= 11;
};
