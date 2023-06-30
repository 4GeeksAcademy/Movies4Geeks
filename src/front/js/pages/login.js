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

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    fetch(process.env.BACKEND_URL + "api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const last_name = event.target.last_name.value;
    const nickname = event.target.nickname.value;
    const email = event.target.email.value;
    const birthday = event.target.birthday.value;
    const password = event.target.password.value;

    fetch(process.env.BACKEND_URL + "api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, last_name, nickname, email, birthday, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main>
      <div className="container__todo">
        <div className="caja__trasera">
          <div className="caja__trasera__login">
            <h3>Already have an account?</h3>
            <p>Log in to access the page</p>
            <button id="btn__iniciar-sesion" onClick={handleLoginClick}>
              Log in
            </button>
          </div>
          <div className="caja__trasera-register">
            <h3>Don't have an account yet?</h3>
            <p>Register and enjoy the benefits</p>
            <button id="btn__registrarse" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        </div>
        {/* Login and registration form */}
        <div className="container__login-register">
          <form
            action=""
            className={`formulario__login ${
              showLoginForm ? "active" : "inactive"
            }`}
            onSubmit={handleLogin}
          >
            <h2>Log in</h2>
            <input type="text" name="email" placeholder="Email" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <button type="submit">Enter</button>
          </form>
          <form
            action=""
            className={`formulario__register ${
              showLoginForm ? "inactive" : "active"
            }`}
            onSubmit={handleRegister}
          >
            <h2>Register</h2>
            <input type="text" name="name" placeholder="Name" />
            <br />
            <input type="text" name="last_name" placeholder="Last Name" />
            <br />
            <input type="text" name="nickname" placeholder="Nickname" />
            <br />
            <input type="text" name="email" placeholder="Email" />
            <br />
            <input type="text" name="birthday" placeholder="Birthday" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </main>
  );
};