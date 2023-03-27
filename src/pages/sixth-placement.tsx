import React from 'react'
import threeGlassLens from '../assets/images/three-glass-lens.webp'
import sunGlass from '../assets/images/sunglass.webp'
import '../assets/css/sixth-placement.css'

const Placement6: React.FC = () => {
    return (
        <div className='one-column-layout-row main-placement-6'>
            <div>
                <div className="two-column-drive-banner">
                    <div className="column-drive-container">
                        <div className="column-drive-title"></div>
                        <div className="column-drive-subTitle"></div>
                        <div className="column-drive-grid">
                            <div>
                                <div className="column-drive-box">
                                    <img src={threeGlassLens} alt="three glass lens" className='three-lens' />
                                </div>
                                <div className="column-drive-text">
                                    <h2>polarization technology.</h2>
                                    <h3>
                                        <div>
                                            <p>The polarization technology of <em>Transitions Drivewear</em> lenses represent a significant breakthrough. <em>Transitions Drivewear</em> lenses feature a high efficiency polarizing filter that blocks the bad light (glare) and lets the maximum amount of good light through the lens.</p>
                                        </div>
                                        <img className='default-image' />
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <div className="column-drive-box">
                                    <img src={sunGlass} alt="sun glass" className='sun-glass' />
                                </div>
                                <div className="column-drive-text">
                                    <h2>photochromic technology.</h2>
                                    <h3>
                                        <div>
                                            <p>The photochromic properties of <em>Transitions Drivewear</em> lenses offer a significant advancement. Transitions Optical developed special UV and visible light sensitive photochromic dyes.</p>
                                        </div>
                                        <img className='default-image' />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Placement6