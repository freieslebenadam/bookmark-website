import React, {useEffect, useContext} from 'react'
import {Context} from '../NavContext'
import Navbar from '../components/Navbar'
import PricingMain from './pricing/PricingMain'

function Pricing() {
    const {navShown, toggleNav} = useContext(Context)

    useEffect(() => {
        if (navShown) {
            toggleNav()
            document.body.style.overflow = "scroll"
        }
    }, [])

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <PricingMain />
            </main>
        </>
    )
}

export default Pricing