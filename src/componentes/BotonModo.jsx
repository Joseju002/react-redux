import React from 'react';
import { usoGlobal } from '../componentes/Global';
import store from '../redux/store';
import { cambiarColor } from '../redux/actions/acciones';

const BotonModo = () => {
    const cambiarModo = () => {
        const nuevoEstado = store.getState().color.type === 'modoAzul' ? 'modoRojo' : 'modoAzul';
        store.dispatch(cambiarColor(nuevoEstado));
        console.log('Nuevo Estado:', nuevoEstado); // Llamamos a la función cambiar del ModoContext
    }

    return (
        <button
            className="btn btn-success"
            type="button"
            onClick={cambiarModo}
        >
            Cambio de estado
        </button>
    )
}

export default BotonModo;