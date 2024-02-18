import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from '../../node_modules/react-router-dom';
import EstadisticasUsuario from './EstadisticasUsuario';
import ImagenVideoAudio from './ImagenVideoAudio';
import InfoUsuario from './InfoUsuario';
import BotonModo from './BotonModo';
import { usoGlobal } from './Global';

function Header() {
  const { estado } = usoGlobal();
  return (
    <Router>
      <div className="fondo1">
        <nav className={`navbar navbar-expand-sm ${estado === 'modoAzul' ? 'bg-primary' : 'bg-danger'} navbar-dark`}>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Usuario</Link>
              </li>
              <li className="nav-item">
                <Link to="/estadisticas" className="nav-link">Estadisticas</Link>
              </li>
              <li className="nav-item">
                <Link to="/multimedia" className="nav-link">Multimedia</Link>
              </li>
            </ul>
            <form className="d-flex">
              <BotonModo />
            </form>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<InfoUsuario nombre="Rana Pepe" edad="33" ubicacion="Españita" descripcion="cuenta en decadencia"></InfoUsuario>} />
            <Route path="/estadisticas" element={<EstadisticasUsuario seguidores="123" seguidos="456" publicaciones="789"></EstadisticasUsuario>} />
            <Route path="/multimedia" element={<ImagenVideoAudio />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Header
