import React, { createContext, useContext } from 'react';

import { useSelector } from 'react-redux';
import store from '../redux/store';
import { cambiarColor } from '../redux/actions/acciones';

const ModoContext = createContext();

export const usoGlobal = () => useContext(ModoContext);

export const ModoProvider = ({ children }) => {

    const estado = useSelector(state => state.color.type)

    const cambiar = () => {
        const nuevoEstado = estado === 'modoAzul' ? 'modoRojo' : 'modoAzul';

        store.dispatch(cambiarColor(nuevoEstado));
        console.log('Nuevo Estado:', nuevoEstado);

    }

    return (
        <ModoContext.Provider value={{ estado, cambiar }}>
            {children}
        </ModoContext.Provider>
    )
}