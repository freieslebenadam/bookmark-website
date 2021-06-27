import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {NavContextProvider} from './NavContext'

ReactDOM.render(
    <NavContextProvider>
        <Router>            
            <App />
        </Router>
    </NavContextProvider>
, document.querySelector('#root'))