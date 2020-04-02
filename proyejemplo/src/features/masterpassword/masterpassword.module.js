const I = actor();
const utils = require('../../utils/utils');
let wait = { retries: 2, minTimeout: 2000 };
// Add in your custom step files
let config = require('./masterpassword.locator');
let locator = config.locator;

module.exports = {
  Inicializar(password, repassword) {
    I.retry(wait).seeAppIsInstalled(config.config.appPackage);
    I.retry(wait).fillField(locator.txtText1, password);
    I.retry(wait).fillField(locator.txtText2, repassword);
  },

  Ingresar() {
    I.retry(wait).tap(locator.btnOk);
    I.retry(wait).tap(locator.btnOk);
    I.wait(5);
  },

  Validaciones() {
    I.retry(wait).seeElement(locator.btnDelete);
    I.retry(wait).seeElement(locator.btnDivide);
  },
};
