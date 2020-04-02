const mainConfig = require('./src/features/index');

exports.config = {
  output: './report',
  helpers: {
    Appium: {
      app: mainConfig.config.app,
      platform: mainConfig.config.platform,
      device: mainConfig.config.device,
      desiredCapabilities: {
        autoGrantPermissions: true,
        appPackage: mainConfig.config.desiredCapabilities.appPackage,
        appActivity: mainConfig.config.desiredCapabilities.appActivity,
        udid: mainConfig.config.desiredCapabilities.udid,
        automationName: 'UiAutomator2',
      },
    },
    Mochawesome: {
      uniqueScreenshotNames: true,
    },
  },
  include: {},
  mocha: {
    reporterOptions: {
      reportDir: './report/',
      reportTitle: 'TestAutomation',
      reportFilename: 'Example',
      autoOpen: true,
      ts: '',
    },
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/**/*.feature',
    steps: [...mainConfig.steps],
  },
  plugins: {
    allure: {},
    screenshotOnFail: {
      enabled: true,
    },
  },
  tests: './*_test.js',
  name: 'TestAutomation-Example',
};
