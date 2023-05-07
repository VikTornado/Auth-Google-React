import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main'
import LogOut from "./Components/LogOut";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import Account from "./Components/Account";
import {AuthContextProvider} from "./Context/AuthContext";

const App = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
            <Header/>
            <Routes>
                <Route path={"/main"} element={<Main />} />
                <Route path={"/logout"} element={<LogOut />} />
                <Route path={"/signin"} element={<SignIn />} />
                <Route path={"/account"} element={<Account />} />
            </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
