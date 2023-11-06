import { removeSpecialCharactersFromString } from '../../common-functions';

export const ReceiverModel = {
  single: (receiver = {}) => {
    console.log('receiverMODEL', receiver);
    const {
      name,
      email,
      pixKeyType: pix_key_type,
      pixKey: pix_key,
      taxId: tax_id,
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
      branch: null,
      account: null,
      account_type: null,
      bank_name: null,
      bank_code: null,
    };
  },
};
