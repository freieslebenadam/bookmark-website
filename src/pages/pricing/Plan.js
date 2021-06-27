import React from 'react'
import Button from '../../components/Button'
import './Plan.scss'

function Plan({name, price, storage, users, transfer, type}) {
    return (
        <div className={type === "special" ? "plan special" : "plan"}>
            <h2>{name}</h2>
            <h3><span className="dlr">$</span>{price}</h3>
            <p>{storage} Storage</p>
            <p>{users} Users Allowed</p>
            <p>Send up to {transfer}</p>
            <div className="button-wrapper">
                <Button type={type==="special"?"white":"primary"}>LEARN MORE</Button>
            </div>
        </div>
    )
}

Plan.defaultProps = {
    name: "Default",
    price: 0.00,
    storage: "0 GB",
    users: 0,
    transfer: "0 GB",
    type: "default"
}

export default Plan