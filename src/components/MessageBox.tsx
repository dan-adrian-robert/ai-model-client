import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {Avatar, CardContent, Typography} from "@mui/material";
import {TGPTMessage} from "../types";
import {blue, deepOrange} from '@mui/material/colors';
import {useCallback} from "react";

export const MessageBox: React.FC<TGPTMessage> = (props) => {
    const {content, role} = props;

    const getStyles = useCallback(()=> {
        return {
            bgcolor: role === 'user'? deepOrange[500]: blue[500]
        }
    }, [role]);

    return (
        <Box sx={{ minWidth: '45em' , maxWidth:'45em'}}>
            <Card variant="outlined">
                <Avatar sx={getStyles()}>{role === 'user'? 'AD':'AI'}</Avatar>
                <CardContent><Typography sx={{whiteSpace: 'pre-line'}}>{content}</Typography></CardContent>
            </Card>
        </Box>
    );
}