import React, {useCallback, useState} from 'react';
import '../App.css';
import {CircularProgress} from "@mui/material";
import {TGPTMessage} from "../types";
import {SendMessageBox} from "../components/SendMessageBox";

export const PostView: React.FC = () => {
  const [messages, setMessages] = useState<Array<TGPTMessage>>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = useCallback((newMessage: string)=> {
      console.log(newMessage)

  },[messages]);

  return (
    <div className="main">
      <div className="chat-container">
        <div className='message-container'>
          <div className='message-box'>
            test
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
