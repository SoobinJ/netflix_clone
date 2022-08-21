import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from './Start';
import Login from "./Login";
import User from "./User";
import Main from "./Main";

function App(){
    return( 
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/User" element={<User/>}></Route>
                    <Route path="/Main" element={<Main/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;