import React from 'react'
import { useSelector} from 'react-redux';
import { usoGlobal } from './Global';
import store from '../redux/store';
import { subirSeguidor, quitarSeguidor } from '../redux/actions/acciones';

function EstadisticasUsuario({ seguidores, seguidos, publicaciones }) {
  const { estado } = usoGlobal();
  
  const estaSiguiendo = useSelector(state => state.seguidor);

  const seguirClick = () => {
    const nuevoEstado = estaSiguiendo

    if (nuevoEstado) {
      store.dispatch(quitarSeguidor);
    } else {
      store.dispatch(subirSeguidor);
    }
  }
  
  const calcularSeguidoresMostrar = estaSiguiendo ? parseInt(seguidores) + 1 : seguidores;

  return (
    <div>
      <div className={`container-fluid ${estado === 'modoAzul' ? 'titulos-color1' : 'titulos-color2'} p-5 mb-1 text-center`}>
        <h1>Estadísticas del usuario</h1>
      </div>
      <div className="text-center">
        <button type="button" className={`btn ${estaSiguiendo ? 'btn-danger' : 'btn-success'} mb-3`} onClick={seguirClick}>
          {estaSiguiendo ? 'Dejar de seguir' : 'Seguir'}
        </button>
      </div>
      <div className="card  text-center mb-5 mx-5 pt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <h4>Seguidores</h4>
              <p>{calcularSeguidoresMostrar}</p>
            </div>
            <div className="col-sm-4">
              <h4>Seguidos</h4>
              <p>{seguidos}</p>
            </div>
            <div className="col-sm-4">
              <h4>Publicaciones</h4>
              <p>{publicaciones}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstadisticasUsuario
