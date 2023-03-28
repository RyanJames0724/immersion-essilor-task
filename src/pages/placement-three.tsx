import React, { useState } from "react";
import '../scss/style.scss'
import sunWithGlass from '../assets/images/sun-with-glass.webp'
import sunWithGlassBackground from '../assets/images/sun-with-glass-background.webp'

const Placement3: React.FC = () => {

    const [isHovering, setIsHovering] = useState<boolean>(false)

    return (
        <div className='one-column-layout-row main-placement-3'>
            <div>
                <div className='two-layer-card-main'>
                    <div className='card-light-wrapper'>
                        <div>
                            <div className='layer-banner-wrapper layer-wrapper'>
                                <div
                                    className={`second-layer ${isHovering ? 'second-layer-show' : 'second-layer-hide'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className="content-container">
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className='image-sun-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`layer-banner-content ${isHovering ? 'banner-content-show' : 'banner-content-hide'}`}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        >
                                            <div>
                                                <div>
                                                    <p>The color varies according to the weather conditions you are expecting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`first-layer ${isHovering ? 'first-layer-hide' : 'first-layer-show'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className='background-image'>
                                        <div className='background-wrapper'>
                                            <img src={sunWithGlassBackground} alt="An empty way" className='background-sun-with-glass' />
                                        </div>
                                    </div>
                                    <video loop className="background-video" preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className='content-container'>
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" className='sun-with-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='layer-banner-content'>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`state-icon ${isHovering ? 'state-icon-show' : ''}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='layer-banner-wrapper layer-wrapper'>
                                <div
                                    className={`second-layer ${isHovering ? 'second-layer-show' : 'second-layer-hide'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className="content-container">
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className='image-sun-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`layer-banner-content ${isHovering ? 'banner-content-show' : 'banner-content-hide'}`}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        >
                                            <div>
                                                <div>
                                                    <p>The color varies according to the weather conditions you are expecting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`first-layer ${isHovering ? 'first-layer-hide' : 'first-layer-show'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className='background-image'>
                                        <div className='background-wrapper'>
                                            <img src={sunWithGlassBackground} alt="An empty way" className='background-sun-with-glass' />
                                        </div>
                                    </div>
                                    <video loop className="background-video" preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className='content-container'>
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" className='sun-with-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='layer-banner-content'>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`state-icon ${isHovering ? 'state-icon-show' : ''}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='layer-banner-wrapper layer-wrapper'>
                                <div
                                    className={`second-layer ${isHovering ? 'second-layer-show' : 'second-layer-hide'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className="content-container">
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className='image-sun-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`layer-banner-content ${isHovering ? 'banner-content-show' : 'banner-content-hide'}`}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        >
                                            <div>
                                                <div>
                                                    <p>The color varies according to the weather conditions you are expecting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`first-layer ${isHovering ? 'first-layer-hide' : 'first-layer-show'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className='background-image'>
                                        <div className='background-wrapper'>
                                            <img src={sunWithGlassBackground} alt="An empty way" className='background-sun-with-glass' />
                                        </div>
                                    </div>
                                    <video loop className="background-video" preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className='content-container'>
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" className='sun-with-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='layer-banner-content'>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`state-icon ${isHovering ? 'state-icon-show' : ''}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='layer-banner-wrapper layer-wrapper'>
                                <div
                                    className={`second-layer ${isHovering ? 'second-layer-show' : 'second-layer-hide'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className="content-container">
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className='image-sun-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`layer-banner-content ${isHovering ? 'banner-content-show' : 'banner-content-hide'}`}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        >
                                            <div>
                                                <div>
                                                    <p>The color varies according to the weather conditions you are expecting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`first-layer ${isHovering ? 'first-layer-hide' : 'first-layer-show'}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className='background-image'>
                                        <div className='background-wrapper'>
                                            <img src={sunWithGlassBackground} alt="An empty way" className='background-sun-with-glass' />
                                        </div>
                                    </div>
                                    <video loop className="background-video" preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className='content-container'>
                                        <div className='logo-wrapper'>
                                            <div className='icon-wrapper'>
                                                <div className='image-wrapper'>
                                                    <img src={sunWithGlass} alt="sun with glass" className='sun-with-glass' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='layer-banner-content'>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`state-icon ${isHovering ? 'state-icon-show' : ''}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement3