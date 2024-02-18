const estadoInicial = false;

const seguidorReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case 'SUBIR_SEGUIDOR':
            return true;
        case 'QUITAR_SEGUIDOR':
            return false;
        default:
            return state;
    }
}

export default seguidorReducer;