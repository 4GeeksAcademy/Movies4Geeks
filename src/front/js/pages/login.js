import React from "react";
import "../../styles/login.css";

export const Login = () => {
    return (
            <div className="container">
                <div className="caja-trasera">
                    <div className="caja-trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia la sesión para entrar en la pagina</p>
                        <button id="btn__iniciar-sesion">Iniciar sesión</button>
                    </div>
                    <div className="caja-trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Registrate y disfruta de las ventajas</p>
                        <button id="btn__iniciar-sesion">Iniciar sesión</button>
                    </div>
                </div>
            </div>
    );
}