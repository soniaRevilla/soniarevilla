const I = actor()
let wait = {retries: 2, minTimeout:2000}
// Add in your custom step files
let config = require('./operaciones.locator');
let locator = config.locator;
const assert = require('assert');

module.exports ={

  setNumero1(numero1){

    I.retry(wait).tap(this.findLocator(numero1))

  },

  setNumero2(numero2){

    I.retry(wait).tap(this.findLocator(numero2))
  },

  execBtn(boton){
    I.retry(wait).tap(this.findLocator(boton))
  },

  async validar(resultado){
    //let result = parseInt(await I.retry(wait).grabTextFrom(locator.txtResult));
    //console.log(result)

    //I.retry(wait).seeInField(locator.txtResult, resultado);
    I.retry(wait).see(resultado);

   /* if((assert(result - resultado))==true){
      console.log('Es Verdadero')
    }else{
      console.log('Es Falso')
    }*/

  },

  findLocator(numero){

    let valuelocator=''
    switch(numero){
      case 1 :
        valuelocator= locator[1]
      break;
      case 2 :{
        valuelocator= locator[2]
      break;
      }
      case 3 :{
        valuelocator= locator[3]
      break;
      }
      case 4 :{
        valuelocator= locator[4]
      break;
      }
      case 5 :{
        valuelocator= locator[5]
      break;
      }
      case 6 :{
        valuelocator= locator[6]
      break;
      }
      case 7 :{
        valuelocator= locator[7]
      break;
      }
      case 8 :{
        valuelocator= locator[8]
      break;
      }
      case 9 :{
        valuelocator= locator[9]
      break;
      }
      case 0 :{
        valuelocator= locator[0]
      break;
      }
      case "add":{
        valuelocator= locator.btnPlus
      break;
      }
      case "minus" :{
        valuelocator= locator.btnMinus
      break;
      }
      case "times" :{
        valuelocator= locator.btnTimes
      break;
      }
      case "divide" :{
        valuelocator= locator.btnDivide
      break;
      }
      default :
      {
        valuelocator= locator[0]
      }
      break;
    }

    return valuelocator

  }

}
