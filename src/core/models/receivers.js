import { removeSpecialCharactersFromString } from '../../common-functions';

export const ReceiverModel = {
  single: (receiver = {}) => {
    const {
      name,
      email,
      pixKeyType: pix_key_type,
      pixKey: pix_key,
      taxId: tax_id,
      account,
      branch,
      bankName: bank_name,
      accountType: account_type,
      status,
    } = receiver;

    const id = self.crypto.randomUUID();

    return {
      id,
      name,
      email,
      pix_key_type,
      pix_key:
        pix_key_type !== 'aleatorio'
          ? removeSpecialCharactersFromString(pix_key)
          : pix_key,
      tax_id: removeSpecialCharactersFromString(tax_id),
      branch: branch ? branch : null,
      account: account ? account : null,
      account_type: account_type ? account_type : null,
      bank_name: bank_name ? bank_name : null,
      bank_code: null,
      status,
    };
  },
};
