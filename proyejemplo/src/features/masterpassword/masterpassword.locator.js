let mainConfig = require('../index');
const byId = '#' + mainConfig.appPackage;

let config = {
  appPackage: mainConfig.appPackage,
  locator: {
    txtText1:
      '//android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.EditText[1]',
    txtText2:
      '//android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.EditText[2]',
    btnOk:
      '//android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button',
    btnDelete: '~delete',
    btnDivide: '~divide',
    btnTimes: '~times',
    btnMinus: '~minus',
    btnPlus: '~plus',
    btnEquals: '~equals',
  },
};

module.exports = {
  config: config,
  locator: config.locator,
};
