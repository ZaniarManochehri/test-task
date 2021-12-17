import { combineReducers } from 'redux';

//Component
import HomeReducer from './HomeReducer';
import UserPageReducer from './UserPageReducer';

export default combineReducers({
    home: HomeReducer,
    user: UserPageReducer,
})