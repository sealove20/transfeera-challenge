export const removeSpecialCharactersFromString = (parsedString = '') =>
  parsedString.replace(/[^\w\s]/gi, '').replace(/\s/g, '');

export const addDashAtTheEnd = (modifiedString = '') =>
  modifiedString.replace(/(.)(.)$/, '$1-$2');
