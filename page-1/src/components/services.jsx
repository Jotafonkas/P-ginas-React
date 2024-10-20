import React from "react";
import '../styles/services.css';

const Services = () => {
    return (
        <div className="vista-servicios">
            <div className="service-title">Nuestros Servicios</div>
            <div className="service-container">
                <div className="service-card">
                    <img src="img/imagen2.webp" alt="imagen-service1" className="card-imagen" />
                    <div className="card-content">
                        <p>Descripción Servicio 1</p>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="card-button">Ver Video</a>
                    </div>
                </div>
                <div className="service-card">
                    <img src="img/imagen2.webp" alt="imagen-service1" className="card-imagen" />
                    <div className="card-content">
                        <p>Descripción Servicio 2</p>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="card-button">Ver Video</a>
                    </div>
                </div>
                <div className="service-card">
                    <img src="img/imagen2.webp" alt="imagen-service1" className="card-imagen" />
                    <div className="card-content">
                        <p>Descripción Servicio 3</p>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="card-button">Ver Video</a>
                    </div>
                </div>
            </div>
            <button className="home-boton" onClick={() => window.location.href = "/"}>Ir a Home</button>
        </div>
    )
}

export default Services