const I = actor();

const supportPhone = '.SupportPhone-link';

const seeSupportPhone = phoneNumber => {
  I.see(phoneNumber, supportPhone);
};

module.exports = { seeSupportPhone };
