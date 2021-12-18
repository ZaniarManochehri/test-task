import { getOneUserByName, getUserRepos, getUsersByName } from "../../services/Connections";
import { GET_ONE_USER_BY_NAME, GET_USERS_BY_NAME } from "../../services/Constants";
import {
    CLEAR_USERS_RESULT,
    CLOSE_ALERT,
    DISPLAY_ALERT,
    RECEIVED_ONE_USER_DETAILS,
    RECEIVED_USERS_RESULT,
    SEARCH_INPUT_VALUE_CHANGED,
    START_GETTING_USER_DETAILS,
    START_SEARCH_USERS_BY_NAME,
} from "./Type";

export const handleSearchForUsers = inputValue => async dispatch => {
    try {
        console.log('inputValue');
        if (inputValue === '') {
            dispatch({ type: DISPLAY_ALERT });
            setTimeout(() => {
                dispatch({ type: CLOSE_ALERT });
            }, 1000);

            return;
        }

        dispatch({ type: START_SEARCH_USERS_BY_NAME });
        let params = {
            q: inputValue,
        }
        getUsersByName(GET_USERS_BY_NAME, params)
            .then(response => {
                let data = response?.data.items;
                dispatch({ type: RECEIVED_USERS_RESULT, payload: data })
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

export const handleGetUserDetails = userName => async dispatch => {
    try {
        dispatch({type: START_GETTING_USER_DETAILS})
        let userDetails = await getOneUserByName(`${GET_ONE_USER_BY_NAME}/${userName}`);
        let userRepos = await getUserRepos(`${GET_ONE_USER_BY_NAME}/${userName}/repos`);
        let details = userDetails?.data;
        let repos = userRepos?.data;
        console.log(repos)
        dispatch({ type: RECEIVED_ONE_USER_DETAILS, payload: { details, repos } });
    } catch (error) {
        console.error(error);
    }
}