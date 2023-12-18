import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {ChatView} from "./views/ChatView";
import {SchemaViewer} from "./views/SchemaViewer";
import {PostView} from "./views/PostView";

export const ROUTES = {
    chat:'/chat',
    schema:'/schema',
    posts:'/posts',
}

function App() {

    return (
        <Routes>
            <Route index  element={<PostView/>} />
            <Route path={ROUTES.schema} element={<SchemaViewer />}/>
            <Route path={ROUTES.chat} element={<ChatView />}/>
            <Route path={ROUTES.posts} element={<PostView />}/>
        </Routes>
    )
}

export default App;
