import React from 'react'
import '../assets/css/fifth-placement.css'
import firstSunGlassDrive from '../assets/images/first-sunglass-drive.webp'
import secondSunGlassDrive from '../assets/images/second-sunglass-drive.webp'
import thirdSunGlassDrive from '../assets/images/third-sunglass-drive.webp'

const Placement5: React.FC = () => {
    return (
        <div className='one-column-layout-row main-placement-5'>
            <div>
                <div className="three-column-drive-banner">
                    <div className="column-drive-container">
                        <h2>Transitions drivewear lens color.</h2>
                        <div className="column-drive-grid">
                            <div>
                                <div className="column-drive-box-1">
                                    <img src={firstSunGlassDrive} alt="first sun glass drive" />
                                    <div className="column-drive-box-title-1">
                                        <span>overcast</span>
                                    </div>
                                </div>
                                <div className="column-drive-content-text">
                                    <div className="drive-content-title">olive green</div>
                                    <div className="drive-content-description">
                                        <div>
                                            <p>To remove glare that would otherwise impact vision in low light conditions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="column-drive-box-2">
                                    <img src={secondSunGlassDrive} alt="second sun glass drive" />
                                    <div className="column-drive-box-title-2">
                                        <span>daylight</span>
                                    </div>
                                </div>
                                <div className="column-drive-content-text">
                                    <div className="drive-content-title">copper</div>
                                    <div className="drive-content-description">
                                        <div>
                                            <p>To remove glare for safe driving vision.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="column-drive-box-3">
                                    <img src={thirdSunGlassDrive} alt="third sun glass drive" />
                                    <div className="column-drive-box-title-3">
                                        <span>intense bright light</span>
                                    </div>
                                </div>
                                <div className="column-drive-content-text">
                                    <div className="drive-content-title">brown</div>
                                    <div className="drive-content-description">
                                        <div>
                                            <p>To provide maximum comfort in high light conditions.</p>
                                        </div>
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

export default Placement5

