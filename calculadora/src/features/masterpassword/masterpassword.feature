@config
Feature: Configurar mi clave maestra
  Como usuario
  Yo configurar mi clave maestra
  para poder realizar operaciones con la calculadora

Scenario Outline:  Configurar mi clave
  Given he ingresado mi "<password>" y he confirmado mi "<re-password>"
  When  click en el boton "ok"
  Then  puedo ver realizar alguna operacion en la calculadora

Examples:
  |password      |re-password     |
  | 123456       |123456       |
