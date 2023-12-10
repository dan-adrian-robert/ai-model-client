import React, {useCallback, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {BarComponent} from "../components/BarComponent";
import {SendMessageBox} from "../components/SendMessageBox";
import {sendChartMessage} from "../services";
import {Role, TGPTChartMessage, TGPTMessage} from '../types';
import {CircularProgress} from "@mui/material";
import {GraphList} from "../components/GraphList";
import {MessageList} from "../components/MessageList";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const SchemaViewer: React.FC = () => {
    const [messages, setMessages] = useState<Array<TGPTChartMessage>>([]);

    const [loader, setLoader] = useState<boolean>(false);
    const handleSubmit = useCallback((newMessage: string)=> {
        setLoader(true);

        const payload= {
                role: Role.user,
                content: newMessage,
        };
        const messageList = [...messages, payload];

        console.log(messageList);

        setMessages((prevState)=> {
          return [...prevState, payload];
        })

        sendChartMessage(messageList)
          .then((response)=> {
            setMessages((prevState)=> {
              return [...prevState, response.data.message];
            })
            setLoader(false);
          })
          .catch(() => {
            setLoader(false);
          });
    },[messages]);


    return (
      <div className="main">
        <div className="chat-container">
          <div className='message-container'>
            <div className='message-box'>
              <GraphList messages={messages}/>
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
