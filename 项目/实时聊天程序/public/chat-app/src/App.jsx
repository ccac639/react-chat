import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Chat,Register,Login,SetAvatar} from './pages/index'
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Chat/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/setAvatar" element={<SetAvatar/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;