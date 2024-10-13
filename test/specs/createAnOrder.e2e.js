const page = require("../page");
const helper = require("../helper");

describe("Create an order", () => {
  it("should fill addresses and submit phone number", async () => {
    await browser.url("/");

    // Fill the 'from' and 'to' address
    await page.fillAddresses("123 Main St", "456 Broadway St");

    // Get a phone number and submit it
    const phoneNumber = helper.getPhoneNumber("+1"); // USA example
    await page.submitPhoneNumber(phoneNumber);
  });

  it("should select the Supportive vehicle plan", async () => {
    await browser.url("/");

    // Select the Supportive vehicle plan
    await page.selectVehicleType("Supportive");
  });

  it("should add a credit card", async () => {
    await browser.url("/");

    // Add credit card details
    await page.addCreditCard("4111111111111111", "123"); // Example card number and CVV
  });

  it("should write a message for the driver", async () => {
    await browser.url("/");

    // Write a message for the driver
    await page.writeDriverMessage("Please ring the doorbell on arrival.");
  });

  it("should order a Blanket and handkerchiefs", async () => {
    await browser.url("/");

    // Order a blanket and handkerchiefs
    await page.orderBlanketAndHandkerchiefs();
  });

  it("should order 2 ice creams", async () => {
    await browser.url("/");

    // Order 2 ice creams
    await page.orderIceCreams(2);
  });

  it("should display the car search modal", async () => {
    await browser.url("/");

    // Verify the car search modal is displayed
    await page.verifyCarSearchModal();
  });
});
