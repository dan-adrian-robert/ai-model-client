import * as React from 'react';
import {MessageBox} from "./MessageBox";
import {IMessage} from "../types";
import Box from "@mui/material/Box";

interface IProps {
    messages: Array<IMessage>,
}

export const MessageList: React.FC<IProps> = (props) => {
    const {messages} = props;

    return (
        <Box display={'flex'} gap={2} flexDirection={'column'}>
            {messages.map((message, index)=> {
                return <MessageBox type={message.type} message={message.message} key={index}/>
            })}
        </Box>
    );
}