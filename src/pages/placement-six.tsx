import React from 'react'
import threeGlassLens from '../assets/images/placement-six-img/three-glass-lens.webp'
import sunGlass from '../assets/images/placement-six-img/sunglass.webp'
import style from '../scss/style.module.scss'

const Placement6: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_6}`}>
            <div>
                <div className={style.two_column_drive_banner}>
                    <div className={style.column_drive_container}>
                        <div className={style.column_drive_title}></div>
                        <div className={style.column_drive_subTitle}></div>
                        <div className={style.column_drive_grid}>
                            <div>
                                <div className={style.column_drive_box}>
                                    <img src={threeGlassLens} alt="three glass lens" className={style.three_lens} />
                                </div>
                                <div className={style.column_drive_text}>
                                    <h2>polarization technology.</h2>
                                    <h3>
                                        <div>
                                            <p>The polarization technology of <em>Transitions Drivewear</em> lenses represent a significant breakthrough. <em>Transitions Drivewear</em> lenses feature a high efficiency polarizing filter that blocks the bad light (glare) and lets the maximum amount of good light through the lens.</p>
                                        </div>
                                        <img className={style.default_image} />
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <div className={style.column_drive_box}>
                                    <img src={sunGlass} alt="sun glass" className={style.sun_glass} />
                                </div>
                                <div className={style.column_drive_text}>
                                    <h2>photochromic technology.</h2>
                                    <h3>
                                        <div>
                                            <p>The photochromic properties of <em>Transitions Drivewear</em> lenses offer a significant advancement. Transitions Optical developed special UV and visible light sensitive photochromic dyes.</p>
                                        </div>
                                        <img className={style.default_image} />
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