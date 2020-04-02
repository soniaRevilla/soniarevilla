//const configENV = require('./configLocator');
const fs = require('fs');

function fnGetPais(data, Pais) {
  for (var x in data.locator.selectPais) {
    if (x == Pais) {
      return data.locator.selectPais[x];
    }
  }
}

function fnGetPaisSoporte(data, Pais) {
  for (var x in data.locator.selectPaisSoporte) {
    if (x == Pais) {
      return data.locator.selectPaisSoporte[x];
    }
  }
}

function fnGetConfig(Entorno) {
  let config = '';
  switch (Entorno) {
    case 'DEV':
      // code block
      config = configENV.QAS;
      break;
    case 'QAS':
      // code block
      config = configENV.QAS;
      break;
    case 'PPR':
      // code block
      config = configENV.PPR;
      break;
    case 'PRD':
      // code block
      config = configENV.PRD;
      break;
    //default:
    // code block
  }
  return config;
}

function fnGetFiles(dir, filter = '', files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      fnGetFiles(name, filter, files_);
    } else if (name.indexOf(filter) >= 0) {
      files_.push(name);
    }
  }
  return files_;
}

module.exports.fnGetConfig = fnGetConfig;
module.exports.fnGetPais = fnGetPais;
module.exports.fnGetPaisSoporte = fnGetPaisSoporte;
module.exports.fnGetFiles = fnGetFiles;
