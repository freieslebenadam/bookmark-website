import React, {useState} from 'react'
import '../style/Contact.scss'
import Button from './Button'

function Contact() {
    const emailRE = /^[A-Za-z0-9]+(\.[A-Za-z0-9]*)?@[a-z]*\.[a-z0-9]{2,3}$/
    const [email, setEmail] = useState("")
    let valid = emailRE.test(email)
    const validClass = valid ? "valid" : "not-valid"

    return (
        <div id="contact">
            <div className="container">
                <div className="contact">
                    <div className="contact-info">
                        <p>35,000+ already joined</p>
                        <h1>Stay up-to-date with what we're doing</h1>
                    </div>
                    <form className="contact-form">
                        <input 
                            className={validClass}
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button link="#contact" type="red">
                            Contact Us
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact