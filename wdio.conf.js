exports.config = {
  runner: "local",
  specs: ["./test/specs/**/*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  headless: true,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: ["headless", "disable-gpu"],
      },
    },
    {
      maxInstances: 5,
      browserName: "firefox",
      acceptInsecureCerts: true,
      "moz:firefoxOptions": {
        args: ["-headless"],
        binary: "/usr/local/bin/firefox", // Add the path to Firefox binary here
      },
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl:
    "https://cnt-c49c3db3-5be2-4ea6-81c3-12f903409da1.containerhub.tripleten-services.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver", "geckodriver", "intercept"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
