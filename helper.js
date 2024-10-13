const faker = require("faker");

module.exports = {
  getPhoneNumber: (countryCode) => {
    const phoneNumber = faker.phone.phoneNumberFormat();
    return `${countryCode}${phoneNumber.replace(/\D/g, "").slice(0, 10)}`;
  },

  getElementByText: (text) => {
    return $(`div*=${text}`);
  },

  // New helper method to generate a random credit card number
  getCreditCardNumber: () => {
    return faker.finance.creditCardNumber();
  },

  // New helper method to generate a random address
  getRandomAddress: () => {
    return {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      postalCode: faker.address.zipCode(),
    };
  },

  // New helper method to write a message for the driver
  getRandomMessage: () => {
    const messages = [
      "Please drive carefully.",
      "I have a pet in the vehicle.",
      "I will need help with my luggage.",
      "I am in a hurry, please take the fastest route.",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
};
