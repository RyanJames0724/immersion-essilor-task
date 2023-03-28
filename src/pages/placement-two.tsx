import React from "react";
import '../scss/style.scss'
import animatedLogo from '../assets/images/animated-details-logo.webp'
import placement2image1 from '../assets/images/placement-2-image-1.webp'
import glasses from '../assets/images/glasses.gif'

const PlacementTwo: React.FC = () => {
    return (
        <div className='one-column-layout-row main-placement-2'>
            <div>
                <div className='animated-details-light-main-white1 animated-details-light-main'>
                    <div className='animated-details-main'>
                        <div className='animated-details-1'>
                            <div className='animated-details-logo'>
                                <div className='logo-wrapper'>
                                    <div className='wrapper-image'>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" loading="lazy" />
                                    </div>
                                    <img src={animatedLogo} alt="second placement logo" className='logo-style' loading="lazy" />
                                </div>
                            </div>
                            <div className='animated-details-title animated-details-light-main-white1'>
                                <h4 className='h4'>THE ONLY POLARIZED LENS FOR DRIVING WITH COLOR AND LIGHT ADAPTATION</h4>
                            </div>
                            <div className='animated-details-long-text animated-details-light-main-white1'>
                                <div>
                                    <p>
                                        Combining the benefits of photochromic and fixed polarization,
                                        <em>Transitions</em>
                                        <sup>®</sup>
                                        <em> Drivewear</em>
                                        <sup>®</sup>
                                        provide you with the optimal vision experience and color contrast while you are driving, reacting to both UV and visible light. The lens color and the level of darkness adapt to light conditions while driving.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='animated-details-2'>
                            <div className='animated-details-row1'>
                                <div className='first-image-wrapper'>
                                    <div className='wrapper-image'>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className='first-image-wrapper' loading="lazy" />
                                    </div>
                                    <img src={placement2image1} alt="Widget image/logo" className='first-image-style' loading="lazy" />
                                </div>
                            </div>
                            <div className='animated-details-row2'>
                                <div className='animated-details-gear'></div>
                                <div className='animated-details-glasses'>
                                    <div className='animated-details-frame animated-details-light-main-white1'>
                                        <div className='glass-image-wrapper'>
                                            <div className='wrapper-image'>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" loading="lazy" />
                                            </div>
                                            <img src={glasses} alt="glasses image" className='glass-image' loading="lazy" />
                                        </div>
                                    </div>
                                    <div className='animated-details-lens'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacementTwo