import React, {useCallback, useEffect, useState} from 'react';
import '../App.css';
import {Button, TextField} from "@mui/material";

interface IProps {
    onSubmit: any;
}

export const SendMessageBox: React.FC<IProps> = ({onSubmit}) => {
    const [currentMessage, setCurrentMessage] = useState('');

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [])

    const handleKeyPress = useCallback((event: any)=> {
        if (event.key === 'Enter') {
            onSubmit(currentMessage);
        }
    }, [])

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
