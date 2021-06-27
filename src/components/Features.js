import React, {useState} from 'react'
import '../style/Features.scss'
import Feature from './Feature'

function Features() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <article id="features">
            <div className="container">
                <section className="features">
                    <div className="features-info">
                        <h1>Features</h1>
                        <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                    </div>
                    <div className="features-list">
                        <ul className="features-list-menu">
                            <li>
                                <a className={activeTab === 0 ? "active" : ""}
                                   onClick={() => setActiveTab(0)}
                                >
                                    Simple Bookmarking
                                </a>
                            </li>
                            <li>
                                <a className={activeTab === 1 ? "active" : ""}
                                   onClick={() => setActiveTab(1)}
                                >
                                    Speedy Searching
                                </a>
                            </li>
                            <li>
                                <a className={activeTab === 2 ? "active" : ""}
                                   onClick={() => setActiveTab(2)}
                                >
                                    Easy Sharing
                                </a>
                            </li>
                        </ul>
                        <div className="features-list-content">
                            <Feature index={activeTab} />
                        </div>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Features