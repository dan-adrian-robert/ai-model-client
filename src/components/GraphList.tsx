import * as React from 'react';
import { MessageBox } from "./MessageBox";
import { Role, TGPTChartMessage } from "../types";
import Box from "@mui/material/Box";
import { BarComponent } from "./BarComponent";

interface IProps {
  messages: Array<TGPTChartMessage>,
}

export const GraphList: React.FC<IProps> = (props) => {
  const {messages} = props;

  return (
    <Box display={'flex'} gap={2} flexDirection={'column'}>
      {messages.map((message, index)=> {
        const {content, role} = message;

        if (role === Role.user && typeof content === 'string') {
          return <MessageBox content={content} role={role} key={index}/>
        }

        if (typeof content === 'object'){
          return <BarComponent data={content.data} options={content.options}/>
        }
      })}
    </Box>
  );
}