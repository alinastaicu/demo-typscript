const I = actor();

const supportPhone = '.SupportPhone-link';

export const seeSupportPhone = (phoneNumber: string) => {
  I.see(phoneNumber, supportPhone);
};
