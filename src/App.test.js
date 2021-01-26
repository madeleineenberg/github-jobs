
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


describe("Test App.js" ,()=> {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
} )