const utils = require('./../utils/utils');
let steps = utils.fnGetFiles('./src/features', '.steps.js');

let config = {
  ambiente: 'QAS',
  /*app: 'D:/Hohammed/Workshop/Codeceptjs-appium/src/app/Calculator.apk',*/
  app: 'C:/Users/usuario/Documents/Belcorp/automatizacion/hoha/Codeceptjs-appium/src/app/Calculator.apk',
  platform: 'Android',
  device: 'emulator',
  desiredCapabilities: {
    appPackage: 'me.lam.calculatorvault',
    appActivity: 'me.lam.calculatorvault.activity.CalculatorActivity',
    //udid: 'ZY323P89SV'  //
    udid: 'emulator-5554', //'ZY323P89SV'
  },
};

module.exports.steps = [...steps];
module.exports.config = config;
module.exports.appPackage = config.desiredCapabilities.appPackage;
