import * as React from 'react';
import {MessageBox} from "./MessageBox";
import {TGPTMessage} from "../types";
import Box from "@mui/material/Box";

interface IProps {
    messages: Array<TGPTMessage>,
}

export const MessageList: React.FC<IProps> = (props) => {
    const {messages} = props;

    return (
        <Box display={'flex'} gap={2} flexDirection={'column'}>
            {messages.map((message, index)=> {
                const {content, role} = message;
                return <MessageBox content={content} role={role} key={index}/>
            })}
        </Box>
    );
}