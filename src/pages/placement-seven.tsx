import React from "react";
import '../scss/style.scss'
import protectionImage from '../assets/images/protection-image.webp'
import comfortImage from '../assets/images/comfort-image.webp'
import visionImage from '../assets/images/vision-image.webp'

const Placement7: React.FC = () => {
    return (
        <div className='one-column-layout-row main-placement-7'>
            <div>
                <div className="placement-7-title">comfort & safety while driving.</div>
                <div className="three-column-icon">
                    <div className="three-column-item column-item">
                        <div className="item-icon">
                            <div className="icon-wrapper">
                                <div className="empty-image-wrapper">
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className="empty-image" />
                                </div>
                                <img src={protectionImage} alt="protection image" className="protection-image" />
                            </div>
                        </div>
                        <h3 className="three-column-item-title">protection</h3>
                        <div className="three-column-icon-message">
                            <div>
                                <p>Protection against rapidly changing bright
                                    <br />
                                    light conditions &amp; reflective glare in any weather conditions.</p>
                            </div>
                        </div>
                    </div>


                    <div className="three-column-item column-item">
                        <div className="item-icon">
                            <div className="icon-wrapper">
                                <div className="empty-image-wrapper">
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className="empty-image" />
                                </div>
                                <img src={comfortImage} alt="comfort image" className="protection-image" />
                            </div>
                        </div>
                        <h3 className="three-column-item-title">comfort</h3>
                        <div className="three-column-icon-message">
                            <div>
                                <p>No need to change lenses while driving<br />Safer driving experience: faster recognition<br />and quicker reaction times.</p>
                            </div>
                        </div>
                    </div>

                    <div className="three-column-item column-item">
                        <div className="item-icon">
                            <div className="icon-wrapper">
                                <div className="empty-image-wrapper">
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className="empty-image" />
                                </div>
                                <img src={visionImage} alt="vision image" className="protection-image" />
                            </div>
                        </div>
                        <h3 className="three-column-item-title">vision</h3>
                        <div className="three-column-icon-message">
                            <div>
                                <p>In 90% cases wearers indicate noticing the greatest benefit of&nbsp;<em>Drivewear&nbsp;</em>in bright sunshine<sup>2</sup>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement7