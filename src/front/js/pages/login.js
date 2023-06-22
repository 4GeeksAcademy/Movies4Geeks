import React from "react";
import "../../styles/login.css";
import { register } from "./register";

export const Login = () => {
    return (
    <main>
            <div className="container__todo">
                <div className="caja__trasera">
                    <div className="caja__trasera__login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar sesión</button>
                    </div>
                    <div className="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate y disfruta de las ventajas</p>
                        <button id="btn__registrarse">Registrarse</button>
                    </div>
                </div>
                {/* formulario de login y registro */}
                <div className="container__login-register">
                    <form action="" className="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Correo Electrónico" /><br/>
                        <input type="password" placeholder="Contraseña" /><br/>
                        <button>Entrar</button>
                    </form>
                    <form action="" className="formulario__register">
                        <h2>Regístrate</h2>
                        <input type="text" placeholder="Nombre completo" /><br/>
                        <input type="text" placeholder="Correo Electrónico" /><br/>
                        <input type="text" placeholder="Nickname" /><br/>
                        <input type="password" placeholder="Contraseña" />
                        <button>Registrarse</button>
                    </form>
                </div>
            </div>
            <register /> 
    </main>
    );
}