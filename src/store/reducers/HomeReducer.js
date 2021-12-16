import { CLOSE_ALERT, DISPLAY_ALERT, RECEIVED_USERS_RESULT, SEARCH_INPUT_VALUE_CHANGED, START_SEARCH_USERS_BY_NAME } from "../action/Type";

/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
    searchInputValue: '',
    alertOpen: false,
    usersResult: [],
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY_ALERT:
            return {
                ...state,
                alertOpen: true,
            };
        case CLOSE_ALERT:
            return {
                ...state,
                alertOpen: false,
            };
        case SEARCH_INPUT_VALUE_CHANGED:
            return {
                ...state,
                searchInputValue: action.payload,
            };
        case START_SEARCH_USERS_BY_NAME:
            return {
                ...state,
                loading: true,
            }
        case RECEIVED_USERS_RESULT:
            return {
                ...state,
                usersResult: action.payload,
            }
        default:
            return state;
    }
}