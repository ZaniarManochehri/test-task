import { RECEIVED_ONE_USER_DETAILS, START_GETTING_USER_DETAILS } from "../action/Type";

/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
    userDetails: undefined,
    userRepos: [],
    loading: false,
}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case START_GETTING_USER_DETAILS:
            return{
                ...state,
                loading: true,
            };
        case RECEIVED_ONE_USER_DETAILS:
            return{
                ...state,
                userDetails: action.payload.details,
                userRepos: action.payload.repos,
                loading: false,
            };
    
        default:
            return state;
    }
}