import React, { useState } from "react";
import style from '../scss/style.module.scss'
import sunWithGlass from '../assets/images/placement-three-img/animation-one/sun-with-glass.webp'
import sunWithGlassBackground from '../assets/images/placement-three-img/animation-one/sun-with-glass-background.webp'

const Placement3: React.FC = () => {

    const [isHovering, setIsHovering] = useState<boolean>(false)

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_3}`}>
            <div>
                <div className={style.two_layer_card_main}>
                    <div className={style.card_light_wrapper}>
                        <div>
                            <div className={`${style.layer_banner_wrapper} ${style.layer_wrapper}`}>
                                <div
                                    className={`${style.second_layer} ${isHovering ? style.second_layer_show : style.second_layer_hide}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className={`${style.image_sun_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${style.layer_banner_content} ${isHovering ? style.banner_content_show : style.banner_content_hide}`}
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
                                    className={`${style.first_layer} ${isHovering ? style.first_layer_hide : style.first_layer_show}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.background_image}>
                                        <div className={style.background_wrapper}>
                                            <img src={sunWithGlassBackground} alt="An empty way" className={`${style.background_sun_with_glass} ${style.img}`} />
                                        </div>
                                    </div>
                                    <video loop className={style.background_video} preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" className={`${style.sun_with_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.layer_banner_content}>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${style.state_icon} ${isHovering ? style.state_icon_show : ''}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className={`${style.layer_banner_wrapper} ${style.layer_wrapper}`}>
                                <div
                                    className={`${style.second_layer} ${isHovering ? style.second_layer_show : style.second_layer_hide}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className={`${style.image_sun_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${style.layer_banner_content} ${isHovering ? style.banner_content_show : style.banner_content_hide}`}
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
                                    className={`${style.first_layer} ${isHovering ? style.first_layer_hide : style.first_layer_show}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.background_image}>
                                        <div className={style.background_wrapper}>
                                            <img src={sunWithGlassBackground} alt="An empty way" className={`${style.background_sun_with_glass} ${style.img}`} />
                                        </div>
                                    </div>
                                    <video loop className={style.background_video} preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" className={`${style.sun_with_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.layer_banner_content}>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${style.state_icon} ${isHovering ? style.state_icon_show : ''}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className={`${style.layer_banner_wrapper} ${style.layer_wrapper}`}>
                                <div
                                    className={`${style.second_layer} ${isHovering ? style.second_layer_show : style.second_layer_hide}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className={`${style.image_sun_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${style.layer_banner_content} ${isHovering ? style.banner_content_show : style.banner_content_hide}`}
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
                                    className={`${style.first_layer} ${isHovering ? style.first_layer_hide : style.first_layer_show}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.background_image}>
                                        <div className={style.background_wrapper}>
                                            <img src={sunWithGlassBackground} alt="An empty way" className={`${style.background_sun_with_glass} ${style.img}`} />
                                        </div>
                                    </div>
                                    <video loop className={style.background_video} preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" className={`${style.sun_with_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.layer_banner_content}>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${style.state_icon} ${isHovering ? style.state_icon_show : ''}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className={`${style.layer_banner_wrapper} ${style.layer_wrapper}`}>
                                <div
                                    className={`${style.second_layer} ${isHovering ? style.second_layer_show : style.second_layer_hide}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" loading='lazy' className={`${style.image_sun_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${style.layer_banner_content} ${isHovering ? style.banner_content_show : style.banner_content_hide}`}
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
                                    className={`${style.first_layer} ${isHovering ? style.first_layer_hide : style.first_layer_show}`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={style.background_image}>
                                        <div className={style.background_wrapper}>
                                            <img src={sunWithGlassBackground} alt="An empty way" className={`${style.background_sun_with_glass} ${style.img}`} />
                                        </div>
                                    </div>
                                    <video loop className={style.background_video} preload="none" playsInline>
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className={style.content_container}>
                                        <div className={style.logo_wrapper}>
                                            <div className={style.icon_wrapper}>
                                                <div className={style.image_wrapper}>
                                                    <img src={sunWithGlass} alt="sun with glass" className={`${style.sun_with_glass} ${style.img}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.layer_banner_content}>
                                            <h4>COLOUR VARIES WITH LIGHT INTENSITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${style.state_icon} ${isHovering ? style.state_icon_show : ''}`}
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