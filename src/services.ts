import axios from 'axios';
import {TGPTChartMessage, TGPTMessage} from "./types";

export const sendMessage = (messages: Array<TGPTMessage>): Promise<any> => {
    return axios.post('/messages', {messages})
}

export const sendChartMessage = (messages: Array<TGPTChartMessage>): Promise<any> => {
    return axios.post('/chart', {messages:messages.map(item => {return {...item, content:JSON.stringify(item.content)}})})
}

export const sendPostMessage = (messages: Array<TGPTMessage>): Promise<any> => {
    return Promise.resolve();
}