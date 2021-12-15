import { combineReducers } from 'redux';

//Component
import HomeReducer from './HomeReducer';

export default combineReducers({
    home: HomeReducer,
})