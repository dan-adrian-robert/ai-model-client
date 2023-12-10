import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {ChatView} from "./views/ChatView";
import {SchemaViewer} from "./views/SchemaViewer";

export const ROUTES = {
    chat:'/chat',
    schema:'/schema',
}

function App() {

    return (
        <Routes>
            <Route index  element={<SchemaViewer/>} />
            <Route path={ROUTES.schema} element={<SchemaViewer />}/>
            <Route path={ROUTES.chat} element={<ChatView />}/>
        </Routes>
    )
}

export default App;
