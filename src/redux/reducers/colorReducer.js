const estadoInicial = {
    type: 'modoAzul',
};

const colorReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case 'CAMBIAR_COLOR':
            return {
                ...state,
                type: action.payload
            };

        default:
            return state;
    }
};

export default colorReducer;