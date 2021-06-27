import React from 'react'
import '../style/Intro.scss'
import illustrationHero from '../images/illustration-hero.svg'
import Button from '../components/Button'

function Intro() {
    return (
        <article id="intro">
            <div className="container">
                <section className="intro">
                    <div className="intro-pic">
                        <img src={illustrationHero} alt="Picture not found" />
                    </div>
                    <div className="intro-info">
                        <h1>A Simple Bookmark Manager</h1>
                        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                        <div className="intro-info-buttons">
                            <Button>
                                Get it on Chrome
                            </Button>
                            <Button type="secondary">
                                Get it on Firefox
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Intro