import React from 'react';
import './styles/Main.css';
import {Navigation} from "./ui_components/Navigation";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Create} from "./pages/Create";
import {Home} from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.css'
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {Notification} from "./ui_components/Notifications";

function Main(): ReactJSXElement {
    return (
        <div>
            <BrowserRouter>
                <Navigation position={'sticky'}/>
                <Notification variant={'outlined'}/>
                <Routes>
                    <Route path={''} element={<Home/>}/>
                    <Route path={'/create'} element={<Create/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;
