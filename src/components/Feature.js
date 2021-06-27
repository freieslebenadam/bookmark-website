import React from 'react'

import Button from './Button'

import tab1 from '../images/illustration-features-tab-1.svg'
import tab2 from '../images/illustration-features-tab-2.svg'
import tab3 from '../images/illustration-features-tab-3.svg'

function Feature({index}) {
    const tabs = [
        {
            img: tab1,
            hText: "Bookmark in one click",
            pText: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        },
        {
            img: tab2,
            hText: "Intelligent search",
            pText: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
        {
            img: tab3,
            hText: "Share your bookmarks",
            pText: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        }
    ]

    return (
        <div className="feature">
            <div className="feature-pic">
                <img src={tabs[index].img} />
            </div>
            <div className="feature-text">
                <h2>{tabs[index].hText}</h2>
                <p>{tabs[index].pText}</p>
                <Button>More Info</Button>
            </div>
        </div>
    )
}

Feature.defaultProps = {
    index: 0
}

export default Feature