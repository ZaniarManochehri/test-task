import { RECEIVED_ONE_USER_DETAILS } from "../action/Type";

/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
    userDetails: undefined,
    userRepos: [],
}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case RECEIVED_ONE_USER_DETAILS:
            
            return{
                ...state,
                userDetails: action.payload.details,
                userRepos: action.payload.repos,
            };
    
        default:
            return state;
    }
}