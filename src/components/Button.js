import React from 'react'
import '../style/Button.scss'

function Button({children, link, type}) {
    return (
        <div style={{backgroundColor: `$soft-blue`}} 
             className={`button ${type}`}>
            <a href={link}>
                {children}
            </a>
        </div>
    )
}

Button.defaultProps = {
    link: "",
    type: "primary"
}

export default Button