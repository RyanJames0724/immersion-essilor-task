import React from 'react'
import style from '../scss/style.module.scss'
import firstSunGlassDrive from '../assets/images/placement-five-img/first-sunglass-drive.webp'
import secondSunGlassDrive from '../assets/images/placement-five-img/second-sunglass-drive.webp'
import thirdSunGlassDrive from '../assets/images/placement-five-img/third-sunglass-drive.webp'

const Placement5: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_5}`}>
            <div>
                <div className={style.three_column_drive_banner}>
                    <div className={style.column_drive_container}>
                        <h2>Transitions drivewear lens color.</h2>
                        <div className={style.column_drive_grid}>
                            <div>
                                <div className={style.column_drive_box_1}>
                                    <img src={firstSunGlassDrive} alt="first sun glass drive" />
                                    <div className={style.column_drive_box_title_1}>
                                        <span>overcast</span>
                                    </div>
                                </div>
                                <div className={style.column_drive_content_text}>
                                    <div className={style.drive_content_title}>olive green</div>
                                    <div className={style.drive_content_description}>
                                        <div>
                                            <p>To remove glare that would otherwise impact vision in low light conditions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={style.column_drive_box_2}>
                                    <img src={secondSunGlassDrive} alt="second sun glass drive" />
                                    <div className={style.column_drive_box_title_2}>
                                        <span>daylight</span>
                                    </div>
                                </div>
                                <div className={style.column_drive_content_text}>
                                    <div className={style.drive_content_title}>copper</div>
                                    <div className={style.drive_content_description}>
                                        <div>
                                            <p>To remove glare for safe driving vision.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={style.column_drive_box_3}>
                                    <img src={thirdSunGlassDrive} alt="third sun glass drive" />
                                    <div className={style.column_drive_box_title_3}>
                                        <span>intense bright light</span>
                                    </div>
                                </div>
                                <div className={style.column_drive_content_text}>
                                    <div className={style.drive_content_title}>brown</div>
                                    <div className={style.drive_content_description}>
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

