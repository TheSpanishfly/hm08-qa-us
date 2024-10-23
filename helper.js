module.exports = {
  getPhoneNumber: function (countryCode) {
    const number = Math.floor(1000000000 + Math.random() * 9000000000);
    return `${countryCode}${number}`;
  },

  getElementByText: async function (text, tag = "div") {
    return await $(`${tag}=${text}`);
  },

  // Function to simulate pressing TAB
  pressTab: async function () {
    await browser.keys("Tab");
  },
};
