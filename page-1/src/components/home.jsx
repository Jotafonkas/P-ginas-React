import React from "react";
import '../styles/home.css';

const Home = () => {
    return (
        <div className="vista-home">
            <div className="home-container">
                <h1 className="home-title">Bienvenido a tu Página Web</h1>
                <img src="img/imagen.webp" alt="imagen-home" className="home-imagen" />
                <div className="home-columnas">
                    <div className="columna-1">
                        <p>Columna 1: Aquí va la primera columna de texto.</p>
                    </div>
                    <div className="columna-2">
                        <img src="img/imagen2.webp" alt="imagen-columna2-home" className="home-columna2-imagen" />
                    </div>
                    <div className="columna-3">
                        <p>Columna 3: Aquí va la tercera columna de texto.</p>
                        <button onClick={() => window.location.href = "/servicios"} type="button" className="home-boton">Ir a la página 2</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;