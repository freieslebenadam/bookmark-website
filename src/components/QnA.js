import React, {useState} from 'react'

function QnA({q, a}) {
    const [hidden, setHidden] = useState(true)
    const hiddenStyle = {
        display: hidden ? "none" : "block"
    }
    const iconClass = hidden ? "fa-chevron-down" : "fa-chevron-up active"
    return (
        <div className="qna">
            <div onClick={() => setHidden(prev => !prev)}
                 className="qna-question">
                <p>{q}</p>
                <i className={`fas ${iconClass}`}></i>
            </div>
            <div style={hiddenStyle}
                 className={`qna-answer `}>
                <p>{a}</p>
            </div>
        </div>
    )
}

QnA.defaultProps = {
    q: "What?",
    a: "Nothing."
}

export default QnA