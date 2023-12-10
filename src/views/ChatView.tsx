import React, {useCallback, useState} from 'react';
import '../App.css';
import {CircularProgress} from "@mui/material";
import {Role, TGPTMessage} from "../types";
import { sendMessage } from '../services';
import {MessageList} from "../components/MessageList";
import {SendMessageBox} from "../components/SendMessageBox";

export const ChatView: React.FC = () => {
    const [messages, setMessages] = useState<Array<TGPTMessage>>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const handleSubmit = useCallback((newMessage: string)=> {
        setMessages((prevState) => {
            return [
                ...prevState,
                {role: Role.user, content:newMessage}
            ]
        })
        setLoader(true);

        const payload = [
            ...messages,
            {role: Role.user, content:newMessage},
        ]


        sendMessage(payload).then((response)=> {
            setMessages((prevState) => {
                return [
                    ...prevState,
                    response.data.message
                ]
            })
            setLoader(false);
        })

    },[messages]);

    return (
        <div className="main">
            <div className="chat-container">
                <div className='message-container'>
                    <div className='message-box'>
                        <MessageList messages={messages}/>
                    </div>

                </div>
                <div className='loader-container'>
                    {loader && <CircularProgress color="inherit" size={'2em'} />}
                </div>
                <SendMessageBox onSubmit={handleSubmit} />
            </div>
        </div>
    );
}
