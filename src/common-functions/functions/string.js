export const removeSpecialCharactersFromString = (parsedString = '') =>
  parsedString.replace(/[^\w\s]/gi, '').replace(/\s/g, '');

export const addDashBeforeLast = (modifiedString = '') =>
  modifiedString?.replace(/(.)(.)$/, '$1-$2');
