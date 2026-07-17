export const trimPhonePrefix = (phone: string, dialCode: string) => {
  if (!phone) return "";
  let cleanPhone = phone.replace(/[^0-9+]/g, '');
  
  if (cleanPhone.startsWith('+')) {
    if (cleanPhone.startsWith(`+${dialCode}`)) {
      cleanPhone = cleanPhone.substring(dialCode.length + 1);
    }
  } else if (cleanPhone.startsWith('00')) {
    if (cleanPhone.startsWith(`00${dialCode}`)) {
      cleanPhone = cleanPhone.substring(dialCode.length + 2);
    }
  }
  
  return cleanPhone.replace(/^0+/, ''); // Remove leading zeros from local number
};

export const formatPhoneForCRM = (phone: string, dialCode: string) => {
  const localNum = trimPhonePrefix(phone, dialCode);
  return `00${dialCode}${localNum}`;
};

export const formatPhoneForBlob = (phone: string, dialCode: string) => {
  const localNum = trimPhonePrefix(phone, dialCode);
  return `+${dialCode}${localNum}`;
};
