const sortByName = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

export const ReceiverParser = {
  single: (receiver) => {
    const {
      id,
      name,
      email,
      tax_id: taxId,
      branch,
      account,
      account_type: accountType,
      bank_name: bankName,
      bank_code: bankCode,
      pix_key: pixKey,
      pix_key_type: pixKeyType,
      status,
      created_at: createdAt,
      updated_at: updatedAt,
    } = receiver ?? {};

    return {
      id,
      name,
      email,
      taxId,
      branch,
      account,
      accountType,
      bankName,
      bankCode,
      pixKey,
      pixKeyType,
      status,
      createdAt,
      updatedAt,
    };
  },
  list: (receivers = []) => {
    return {
      receivers: receivers.map(ReceiverParser.single).sort(sortByName),
    };
  },
};
