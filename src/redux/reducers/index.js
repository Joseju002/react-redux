import { combineReducers } from 'redux';
import colorReducer from './colorReducer';
import seguidorReducer from './otroReducer';

const reducers = combineReducers({
    color: colorReducer,
    seguidor: seguidorReducer
});

export default reducers;