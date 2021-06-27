import React, {useState} from 'react'
import './Pricing.scss'
import Plan from './Plan'

function PricingMain() {
    const [pricePeriod, setPricePeriod] = useState(true)
    // false = annually | true = monthly

    return (
        <article>
            <div className="container">
                <section className="pricing">
                    <div className="pricing-header">
                        <h1>Our Pricing</h1>
                        <div className="time-interval">
                            <p>Annually</p>
                            <label className="switch">
                                <input type="checkbox"
                                       checked={pricePeriod} 
                                       onChange={() => setPricePeriod(prev => !prev)}
                                />
                                <span className="slider"></span>
                            </label>
                            <p>Monthly</p>
                        </div>
                    </div>
                    <div className="pricing-plans">
                        <Plan 
                            name="Basic"
                            price={pricePeriod ? 19.99 : 199.99}
                            storage={"500 GB"}
                            users={2}
                            transfer={"3 GB"}
                        />
                        <Plan 
                            name="Professional"
                            price={pricePeriod ? 24.99 : 249.99}
                            storage={"1 TB"}
                            users={5}
                            transfer={"10 GB"}
                            type="special"
                        />
                        <Plan 
                            name="Master"
                            price={pricePeriod ? 39.99 : 399.99}
                            storage={"2 TB"}
                            users={10}
                            transfer={"20 GB"}
                        />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default PricingMain