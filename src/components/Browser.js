import React from 'react'

import Button from './Button'

import iconChrome from '../images/logo-chrome.svg'
import iconFirefox from '../images/logo-firefox.svg'
import iconOpera from '../images/logo-opera.svg'

function Browser({name}) {
    let browserContent
    if (name === "chrome") {
        browserContent = {name: "Chrome", icon: iconChrome, minVersion: 62}
    } else if (name === "firefox") {
        browserContent = {name: "Firefox", icon: iconFirefox, minVersion: 55}
    } else if (name === "opera") {
        browserContent = {name: "Opera", icon: iconOpera, minVersion: 46}
    }

    return (
        <div className="browser">
            <div className="browser-info">
                <img src={browserContent.icon} />
                <h2>Add to {browserContent.name}</h2>
                <p>Minimum version {browserContent.minVersion}</p>
            </div>
            <div className="browser-install">
                <Button link="#extension">
                    Add & Install Extension
                </Button>
            </div>
        </div>
    )
}

Browser.defaultProps = {
    name: "chrome"
}

export default Browser