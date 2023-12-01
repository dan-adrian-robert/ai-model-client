import React, {useCallback, useState} from 'react';
import './App.css';
import {MessageList} from "./components/MessageList";
import {Button, CircularProgress, TextField} from "@mui/material";
import {Role, TGPTMessage} from "./types";
import {sendMessage} from "./services";

function App() {

    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState<Array<TGPTMessage>>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const handleSubmit = useCallback(()=> {
        setMessages((prevState) => {
            return [
                ...prevState,
                {role: Role.user, content:currentMessage}
            ]
        })
        setCurrentMessage('');
        setLoader(true);

        const payload = [
            ... messages,
            {role: Role.user, content:currentMessage},
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

    },[currentMessage, messages]);

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
            <div className='message-box-container'>
                <div className='text-box-line'>
                    <TextField
                        className='chat-input'
                        placeholder="Write your name here"
                        value={currentMessage}
                        onChange={(event)=>{
                            setCurrentMessage(event.target.value)
                        }}
                    />
                    <div>
                        <Button variant='outlined' onClick={handleSubmit}>Send</Button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;
