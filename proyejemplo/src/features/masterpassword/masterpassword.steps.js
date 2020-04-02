const master = require('./masterpassword.module');
// Add in your custom step files

Given(
  'he ingresado mi {string} y he confirmado mi {string}',
  (password, repassword) => {
    master.Inicializar(password, repassword);
  }
);

When('click en el boton "ok"', () => {
  master.Ingresar();
});

Then('puedo ver realizar alguna operacion en la calculadora', () => {
  master.Validaciones();
});
