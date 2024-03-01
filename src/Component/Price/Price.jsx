import './Price.css'

function Price() {
    return (
        <div className='price'>
            <div className='overlay'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='top'>
                                <h6 className='sub-title'>OUR PRICING PLANS</h6>
                                <h2>Our Pricing Strategy</h2>
                                <span className='line'></span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='box'>
                                <span>PREMIUM</span>
                                <div className='sub-box'>
                                    <p>$7.99</p>
                                    <span>Monthly</span>
                                </div>
                                <ul>
                                    <li>
                                        <div className='text'>
                                            Video quality
                                            <span>Good</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='text'>
                                            Resolution
                                            <span>480P</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='text'>
                                            Screens you can watch
                                            <span>1</span>
                                        </div>
                                    </li>
                                    <li>
                                        Cancel anytime
                                    </li>
                                </ul>
                                <button className='btn'>Buy Now</button>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='box'>
                                <span>STANDARD</span>
                                <div className='sub-box'>
                                    <p>$9.99</p>
                                    <span>Monthly</span>
                                </div>
                                <ul>
                                    <li>
                                        <div className='text'>
                                            Video quality
                                            <span>Better</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='text'>
                                            Resolution
                                            <span>1080P</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='text'>
                                            Screens you can watch
                                            <span>2</span>
                                        </div>
                                    </li>
                                    <li>
                                        Cancel anytime
                                    </li>
                                </ul>
                                <button className='btn'>Buy Now</button>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12'>
                            <div className='box'>
                                <span>PREMIUM</span>
                                <div className='sub-box'>
                                    <p>$7.99</p>
                                    <span>Monthly</span>
                                </div>
                                <ul>
                                    <li>
                                        <div className='text'>
                                            Video quality
                                            <span>Best</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='text'>
                                            Resolution
                                            <span>4K+HDR</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='text'>
                                            Screens you can watch
                                            <span>4</span>
                                        </div>
                                    </li>
                                    <li>
                                            Cancel anytime
                                    </li>
                                </ul>
                                <button className='btn'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
