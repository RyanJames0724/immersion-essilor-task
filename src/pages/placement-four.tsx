import React from 'react'
import '../scss/style.scss'

const Placement4: React.FC = () => {
    return (
        <div className='one-column-layout-row main-placement-4'>
            <div>
                <div className="three-static-card-dark">
                    <div className="card-long-text">
                        <p>
                            <em>Transitions Drivewear </em>
                            the only polarized lens for driving with color and light adaptation.
                        </p>
                    </div>
                    <div className="three-card-main">
                        <div className="card static-dark-card dark-card-brown">
                            <div>
                                <h2 className="static-card-header">68%</h2>
                                <div className="static-dark-content">
                                    <div>
                                        <p>of consumer want their sunwear to respond to their driving needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card static-dark-card dark-card-brown">
                            <div>
                                <h2 className="static-card-header">70%</h2>
                                <div className="static-dark-content">
                                    <div>
                                        <p>of consumers are bothered by glare.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card static-dark-card dark-card-brown">
                            <div>
                                <h2 className="static-card-header">74%</h2>
                                <div className="static-dark-content">
                                    <div>
                                        <p>of wearers feel safer on the road when wearing 
                                            <em>Transitions Drivewear</em>
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement4