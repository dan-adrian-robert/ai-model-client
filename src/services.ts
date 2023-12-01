import axios from 'axios';

export const sendMessage = (currentMessage: string): Promise<any> => {
    console.log(currentMessage);
    return axios.post('/', {message: currentMessage})
}