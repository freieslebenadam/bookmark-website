import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MainContent from './pages/MainContent'
import Pricing from './pages/Pricing'
import Favicon from 'react-favicon'
import fav from './images/favicon-32x32.png'

function App() {
    return (
        <>
        <Favicon url={fav} />
        <Switch>
            <Route exact path="/">
                <MainContent />
            </Route>
            <Route path="/pricing">
                <Pricing />
            </Route>
        </Switch>
        </>
    )
}

export default App