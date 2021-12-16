import axios from 'axios';

export const getUsersByName = async (url, params) => {
   try {
    const response = await axios.get(url, {
        params,
    });
    return response ;
   } catch (error) {
       console.error(error);
   }
}

export const hetOneUserByName = async () => {
    try {
        
    } catch (error) {
        console.error(error);
    }
}