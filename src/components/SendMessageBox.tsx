import React, {useState} from 'react';
import '../App.css';
import {Button, TextField} from "@mui/material";

interface IProps {
    onSubmit: any;
}

export const SendMessageBox: React.FC<IProps> = ({onSubmit}) => {
    const [currentMessage, setCurrentMessage] = useState('');

    return (
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
                    <Button variant='outlined' onClick={()=> {
                        onSubmit(currentMessage);
                        setCurrentMessage('');
                    }}>Send</Button>
                </div>
            </div>
        </div>
    );
}
