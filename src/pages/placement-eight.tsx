import React from "react";
import '../scss/style.scss'
import FlushExample from "./accordion";

const Placement8: React.FC = () => {
    return (
        <div className='one-column-layout-row main-placement-8'>
            <div>
                <div>
                    <div className="FAQ-container">
                        <div className="FAQ-content">
                            <h2 className="FAQ-title">Frequently asked questions</h2>
                            {/* <div className="accordion-main">
                                <div className="accordion-fullWidth">
                                    <div className="accordion-content-wrapper accordion-hide">
                                        <div className="accordion-header accordion-hide">
                                            <p>Can <em>Transitions Drivewear</em> be used at night?</p>
                                            <div className="accordion-icon">
                                                <div className="accordion-line accordion-one"></div>
                                                <div className="accordion-line accordion-two accordion-hide"></div>
                                            </div>
                                        </div>
                                        <div className="accordion-hide accordion-collapse accordion-collapse-style">
                                            <div>
                                                <div>
                                                    <p>It is not recommended to use <em>Transitions Drivewear</em> lenses at night. <em>Drivewear </em>lenses are optimized for day light situation, and since <em>Transitions Drivewear</em> is always tinted, (min category 2, max category 3), it can be too dark to wear after dusk. Many Vision &amp; Highway Safety experts believe that NO tint should ever be used at night.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-main"></div>
                            <div className="accordion-main"></div>
                            <div className="accordion-main"></div>
                            <div className="accordion-main"></div> */}

                            <FlushExample />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement8