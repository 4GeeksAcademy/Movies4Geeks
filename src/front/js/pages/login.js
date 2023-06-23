import React, { useState } from "react";
import "../../styles/login.css";

export const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    document
      .querySelector(".container__login-register")
      .classList.add("formulario__register-active");
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    document
      .querySelector(".container__login-register")
      .classList.remove("formulario__register-active");
  };

  return (
    <main>
      <div className="container__todo">
        <div className="caja__trasera">
          <div className="caja__trasera__login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar en la página</p>
            <button id="btn__iniciar-sesion" onClick={handleLoginClick}>
              Iniciar sesión
            </button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate y disfruta de las ventajas</p>
            <button id="btn__registrarse" onClick={handleRegisterClick}>
              Registrarse
            </button>
          </div>
        </div>
        {/* formulario de login y registro */}
        <div className="container__login-register">
          <form
            action=""
            className={`formulario__login ${
              showLoginForm ? "active" : "inactive"
            }`}
          >
            <h2>Iniciar Sesión</h2>
            <input type="text" placeholder="Correo Electrónico" />
            <br />
            <input type="password" placeholder="Contraseña" />
            <br />
            <button>Entrar</button>
          </form>
          <form
            action=""
            className={`formulario__register ${
              showLoginForm ? "inactive" : "active"
            }`}
          >
            <h2>Regístrate</h2>
            <input type="text" placeholder="Nombre completo" />
            <br />
            <input type="text" placeholder="Correo Electrónico" />
            <br />
            <input type="text" placeholder="Nickname" />
            <br />
            <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
          </form>
        </div>
      </div>
    </main>
  );
};