document.addEventListener("DOMContentLoaded", function() {
  var btnRegistrarse = document.getElementById("btn__registrarse");
  btnRegistrarse.addEventListener("click", register);

  var btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
  btnIniciarSesion.addEventListener("click", iniciarSesion);
});

function iniciarSesion() {
  var formulario_login = document.querySelector(".formulario__login");
  var formulario_register = document.querySelector(".formulario__register");
  var container_login_register = document.querySelector(".container__login-register");

  formulario_register.style.display = "none";
  container_login_register.classList.remove("formulario__register-active");
  formulario_login.style.display = "block";
}

function register() {
  var formulario_login = document.querySelector(".formulario__login");
  var formulario_register = document.querySelector(".formulario__register");
  var container_login_register = document.querySelector(".container__login-register");

  formulario_register.style.display = "block";
  container_login_register.classList.add("formulario__register-active");
  formulario_login.style.display = "none";
}
  
  
  
  
  