import React from "react";
import style from '../scss/style.module.scss'
import animatedLogo from '../assets/images/placement-two-img/animated-details-logo.webp'
import placement2image1 from '../assets/images/placement-two-img/way.webp'
import glasses from '../assets/images/placement-two-img/glasses.gif'

const PlacementTwo: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_2}`}>
            <div>
                <div className={`${style.animated_details_light_main_white1} ${style.animated_details_light_main}`}>
                    <div className={style.animated_details_main}>
                        <div className={style.animated_details_1}>
                            <div className={style.animated_details_logo}>
                                <div className={style.logo_wrapper}>
                                    <div className={style.wrapper_image}>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" loading="lazy" />
                                    </div>
                                    <img src={animatedLogo} alt="second placement logo" className={style.logo_style} loading="lazy" />
                                </div>
                            </div>
                            <div className={`${style.animated_details_title} ${style.animated_details_light_main_white1}`}>
                                <h4 className={style.h4}>THE ONLY POLARIZED LENS FOR DRIVING WITH COLOR AND LIGHT ADAPTATION</h4>
                            </div>
                            <div className={`${style.animated_details_long_text} ${style.animated_details_light_main_white1}`}>
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
                        <div className={style.animated_details_2}>
                            <div className={style.animated_details_row1}>
                                <div className={style.first_image_wrapper}>
                                    <div className={style.wrapper_image}>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className={style.first_image_wrapper} loading="lazy" />
                                    </div>
                                    <img src={placement2image1} alt="Widget image/logo" className={style.first_image_style} loading="lazy" />
                                </div>
                            </div>
                            <div className={style.animated_details_row2}>
                                <div className={style.animated_details_gear}></div>
                                <div className={style.animated_details_glasses}>
                                    <div className={`${style.animated_details_frame} ${style.animated_details_light_main_white1}`}>
                                        <div className={style.glass_image_wrapper}>
                                            <div className={style.wrapper_image}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" loading="lazy" />
                                            </div>
                                            <img src={glasses} alt="glasses image" className={style.glass_image} loading="lazy" />
                                        </div>
                                    </div>
                                    <div className={style.animated_details_lens}></div>
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