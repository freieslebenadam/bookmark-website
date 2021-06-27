import React from 'react'
import '../style/Extension.scss'
import Browser from './Browser'

function Extension() {
    return (
        <article>
            <div className="container">
                <section className="extension">
                    <div className="extension-info">
                        <h1>Download the extension</h1>
                        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                    </div>
                    <div className="extension-browsers">
                        <Browser name="chrome" />
                        <Browser name="firefox" />
                        <Browser name="opera" />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Extension