import {combineReducers} from 'redux';
import reducerCurrency from './reducerCurrency.js';

const allReducers = combineReducers({
    currency: reducerCurrency,
});

export default allReducers
