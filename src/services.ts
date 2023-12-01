import axios from 'axios';
import {TGPTMessage} from "./types";

export const sendMessage = (messages: Array<TGPTMessage>): Promise<any> => {
    return axios.post('/', {messages})
}