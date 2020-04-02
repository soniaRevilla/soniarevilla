@adicion
Feature: adición
  Para evitar hacer errores tontos
  Como un ser humano
  Quiero saber la suma de los números

Scenario Outline: Sumar dos números
  Given que he introducido <numero_1> en la calculadora
  When oprimo el "<boton>"
  And que he introducido el <numero_2> en la calculadora
  Then el resultado debe ser <resultado> en la pantalla

Examples:
  | numero_1 | numero_2 | boton | resultado |
  | 9       |7      | add  | 16    |
  | 2         | 5         | times   | 47         |
  #| 0         | 40        | add   | 40        |
