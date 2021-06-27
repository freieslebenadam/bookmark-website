import React, {useContext} from 'react'
import '../style/App.scss'

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Features from '../components/Features'
import Padder from '../components/Padder'
import Extension from '../components/Extension'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import {Context} from '../NavContext'

function MainContent() {
    const {navShown} = useContext(Context)
    if (navShown) {
        window.scrollTo(0, 0)
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "scroll"
    }

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div style={{width: "100%", height: "100px"}}></div>
            <main>
                <Intro />
                <Padder />
                <Features />
                <Padder />
                <Extension />
                <Padder />
                <FAQ />
            </main>
            <Padder />
            <footer>
                <Contact />
                <Footer />
            </footer>
        </>
    )
}

export default MainContent