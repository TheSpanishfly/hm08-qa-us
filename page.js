module.exports = {
  fromField: "#fromAddress",
  toField: "#toAddress",
  phoneNumberField: "#phoneNumber",
  confirmButton: "#confirmPhoneNumber",
  vehiclePlanButton: 'button.vehicle-plan[data-type="{planName}"]',
  selectedPlan: "div.selected-plan",
  cardNumberField: "#cardNumberField",
  cardCVVField: "#cardCVVField",
  driverMessageField: "#driverMessageField",
  orderBlanketButton: "#orderBlanket",
  orderIceCreamField: "#orderIceCream",
  carSearchModal: "#carSearchModal",

  fillAddresses: async function (from, to) {
    const fromFieldElement = await $(this.fromField);
    await fromFieldElement.waitForDisplayed({ timeout: 20000 });
    await fromFieldElement.setValue(from);

    const toFieldElement = await $(this.toField);
    await toFieldElement.waitForDisplayed({ timeout: 20000 });
    await toFieldElement.setValue(to);
  },

  submitPhoneNumber: async function (phoneNumber) {
    const phoneField = await $(this.phoneNumberField);
    await phoneField.waitForDisplayed({ timeout: 20000 });
    await phoneField.setValue(phoneNumber);
    await $(this.confirmButton).click();
  },

  selectVehicleType: async function (planName) {
    const planSelector = `button.vehicle-plan[data-type="${planName}"]`;
    const planElement = await $(planSelector);
    await planElement.waitForDisplayed({ timeout: 30000 });
    await planElement.click();
  },

  addCreditCard: async function (cardNumber, cvv) {
    const cardNumberField = await $(this.cardNumberField);
    await cardNumberField.waitForDisplayed({ timeout: 20000 });
    await cardNumberField.setValue(cardNumber);

    const cardCVVField = await $(this.cardCVVField);
    await cardCVVField.waitForDisplayed({ timeout: 20000 });
    await cardCVVField.setValue(cvv);
  },

  writeDriverMessage: async function (message) {
    const messageField = await $(this.driverMessageField);
    await messageField.waitForDisplayed({ timeout: 20000 });
    await messageField.setValue(message);
  },

  orderBlanketAndHandkerchiefs: async function () {
    const blanketButton = await $(this.orderBlanketButton);
    await blanketButton.waitForDisplayed({ timeout: 20000 });
    await blanketButton.click();
  },

  orderIceCreams: async function (quantity) {
    const iceCreamField = await $(this.orderIceCreamField);
    await iceCreamField.waitForDisplayed({ timeout: 20000 });
    await iceCreamField.setValue(quantity);
  },

  verifyCarSearchModal: async function () {
    const carSearchModal = await $(this.carSearchModal);
    await carSearchModal.waitForDisplayed({ timeout: 20000 });
  },
};
