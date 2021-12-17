import axios from 'axios';

export const getUsersByName = async (url, params) => {
    try {
        const response = await axios.get(url, {
            params,
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getOneUserByName = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const getUserRepos = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
    }
}