const master= require('./../masterpassword/masterpassword.module')
const operacion= require('./operaciones.module')

Given('que he introducido {int} en la calculadora',(numero1)=>{
  master.Inicializar('123456','123456')
  master.Ingresar()
  master.Validaciones()
  operacion.setNumero1(numero1)
})

When('oprimo el {string}',(boton)=>{
  operacion.execBtn(boton)
})

When('que he introducido el {int} en la calculadora',(numero2)=>{
  operacion.setNumero2(numero2)
})

Then('el resultado debe ser {int} en la pantalla',async (resultado)=>{
  operacion.validar(resultado)
})
