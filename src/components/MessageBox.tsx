import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {Avatar, CardContent, Typography} from "@mui/material";
import {IMessage} from "../types";
import {blue, deepOrange} from '@mui/material/colors';

export const MessageBox: React.FC<IMessage> = (props) => {
    const {message, type} = props;

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <Avatar sx={{ bgcolor: type === 'user'? deepOrange[500]: blue[500] }}>{type === 'user'? 'AD':'AI'}</Avatar>
                <CardContent><Typography sx={{whiteSpace: 'pre-line'}}>{message}</Typography></CardContent>
            </Card>
        </Box>
    );
}