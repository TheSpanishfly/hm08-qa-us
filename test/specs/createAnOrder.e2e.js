const page = require("../../page");
const helper = require("../../helper");

describe("Create an order", () => {
  it("should open phone number modal", async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const phoneNumberButton = await $(page.phoneNumberButton);
    await phoneNumberButton.waitForDisplayed();
    await phoneNumberButton.click();
    const pnoneNumberModal = await $(page.phoneNumberModal);
    await expect(pnoneNumberModal).toBeExisting();
  });

  it("should save the phone", async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
  });

  it("should select the Supportive vehicle plan", async () => {
    await browser.url(`/`);
    await page.selectVehicleType("Supportive");
    const selectedPlan = await $(page.selectedPlan);
    await expect(selectedPlan).toBeExisting();
  });

  it("should add a credit card", async () => {
    await browser.url(`/`);
    await page.openAddCardModal();
    await page.fillCardDetails("4242424242424242", "12/25", "123");
    await page.focusOutFromCardCVV();
    const linkButton = await $(page.linkButton);
    await linkButton.waitForEnabled();
    await linkButton.click();
    const linkedCard = await $(page.linkedCard);
    await expect(linkedCard).toBeExisting();
  });

  it("should write a message for the driver", async () => {
    await browser.url(`/`);
    await page.writeMessageForDriver("Please call me when you arrive.");
    const messageField = await $(page.driverMessageField);
    await expect(messageField).toHaveTextContaining(
      "Please call me when you arrive."
    );
  });
});
