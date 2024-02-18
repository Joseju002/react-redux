export const cambiarColor = nuevoEstado => {
    return {
        type: 'CAMBIAR_COLOR',
        payload: nuevoEstado
    }
}

export const subirSeguidor = {
    type: 'SUBIR_SEGUIDOR'
}

export const quitarSeguidor = {
    type: 'QUITAR_SEGUIDOR'
}