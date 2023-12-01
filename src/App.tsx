import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {MessageList} from "./components/MessageList";
import {Button, CircularProgress, FormControl, Input, TextField} from "@mui/material";
import {sendMessage} from "./services";
import {mockTest, mockTestMessages} from "./config";

function App() {

    const [currentMessage, setCurrentMessage] = useState('');
    const [messages, setMessages] = useState<Array<any>>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const handleSubmit = useCallback(()=> {
        setMessages((prevState) => {
            return [
                ...prevState,
            {type:'user', message:currentMessage}
            ]
        })
        setCurrentMessage('');
        setLoader(true);
        sendMessage(currentMessage).then((response)=> {
            setMessages((prevState) => {
                return [
                    ...prevState,
                    {type:'ai', message:response.data.message.content}
                ]
            })
            setLoader(false);
        })

    },[currentMessage]);

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
