import { getUsersByName } from "../../services/Connections";
import { GET_USERS_BY_NAME } from "../../services/Constants";
import { CLEAR_USERS_RESULT, CLOSE_ALERT, DISPLAY_ALERT, RECEIVED_USERS_RESULT, SEARCH_INPUT_VALUE_CHANGED, START_SEARCH_USERS_BY_NAME } from "./Type";

export const handleSearchForUsers = inputValue => async dispatch => {
    try {
        if (inputValue === '') {
            dispatch({type: DISPLAY_ALERT});
            setTimeout(() => {
                dispatch({type: CLOSE_ALERT});
            }, 1000);

            return;
        }

        dispatch({type: START_SEARCH_USERS_BY_NAME});
        let params = {
            q: inputValue,
        }
        getUsersByName(GET_USERS_BY_NAME, params)
        .then(response => {
            let data = response?.data.items;
            dispatch({type: RECEIVED_USERS_RESULT, payload: data})
        });
    } catch (error) {
        console.error(error);
    }
}

export const handleChangeSearchInputValue = event => {
    return {
        type: SEARCH_INPUT_VALUE_CHANGED,
        payload: event.target.value,
    }
}

export const handleClearUsersResult = () => {
    return {
        type: CLEAR_USERS_RESULT,
    }
}