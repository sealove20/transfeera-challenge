export const removeSpecialCharactersFromString = (parsedString = '') =>
  parsedString.replace(/[^\w\s]/gi, '').replace(/\s/g, '');
