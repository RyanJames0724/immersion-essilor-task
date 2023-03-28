import React from "react";
import style from '../scss/style.module.scss'
import protectionImage from '../assets/images/placement-seven-img/protection-image.webp'
import comfortImage from '../assets/images/placement-seven-img/comfort-image.webp'
import visionImage from '../assets/images/placement-seven-img/vision-image.webp'

const Placement7: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_7}`}>
            <div>
                <div className={style.placement_7_title}>comfort & safety while driving.</div>
                <div className={style.three_column_icon}>
                    <div className={`${style.three_column_item} ${style.column_item}`}>
                        <div className={style.item_icon}>
                            <div className={style.icon_wrapper}>
                                <div className={style.empty_image_wrapper}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className={style.empty_image} />
                                </div>
                                <img src={protectionImage} alt="protection image" className={style.protection_image} />
                            </div>
                        </div>
                        <h3 className={style.three_column_item_title}>protection</h3>
                        <div className={style.three_column_icon_message}>
                            <div>
                                <p>Protection against rapidly changing bright
                                    <br />
                                    light conditions &amp; reflective glare in any weather conditions.</p>
                            </div>
                        </div>
                    </div>


                    <div className={`${style.three_column_item} ${style.column_item}`}>
                        <div className={style.item_icon}>
                            <div className={style.icon_wrapper}>
                                <div className={style.empty_image_wrapper}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className={style.empty_image} />
                                </div>
                                <img src={comfortImage} alt="comfort image" className={style.protection_image} />
                            </div>
                        </div>
                        <h3 className={style.three_column_item_title}>comfort</h3>
                        <div className={style.three_column_icon_message}>
                            <div>
                                <p>No need to change lenses while driving<br />Safer driving experience: faster recognition<br />and quicker reaction times.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${style.three_column_item} ${style.column_item}`}>
                        <div className={style.item_icon}>
                            <div className={style.icon_wrapper}>
                                <div className={style.empty_image_wrapper}>
                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className={style.empty_image} />
                                </div>
                                <img src={visionImage} alt="vision image" className={style.protection_image} />
                            </div>
                        </div>
                        <h3 className={style.three_column_item_title}>vision</h3>
                        <div className={style.three_column_icon_message}>
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