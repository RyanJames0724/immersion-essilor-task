import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../scss/style.module.scss'
import { addBreak, addSuperScripted } from '../logic/edit-text';


interface IDataPlacementOne {
    id: number
    background: string
    logo: string
    firstText: string
    buttonText: string
    sideText: string
}

const PlacementOne: React.FC<IDataPlacementOne> = ({ id, background, logo, firstText, buttonText, sideText }) => {

    const opacities = [1, 0.9, 0.75, 0.6, 0.45, 0.3, 0.2, 0.1]

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_1}`}>
            <div>
                <div className={style.generic_row_banner}>
                    <div className={`${style.banner_wrapper} ${style.banner_dark}`}>
                        <div className={`${style.banner_background} ${style.background}`}>
                            <div className={style.background_wrapper}>
                                <div className={style.image_holder}>
                                    <img src={background} alt="front background" loading="lazy" className={style.hero_banner_background} />
                                </div>
                            </div>
                        </div>
                        <div className={style.banner_gradient}>
                            {opacities.map((opacity: number) =>
                                <div key={opacity} className={`${style.gradient} ${style.gradient_Width}`} style={{ 'opacity': `${opacity}` }}></div>
                            )}
                        </div>


                        <div className={style.content_left_bottom}>
                            <div className={style.banner_content_logo}>
                                <img src={logo} alt="content logo" loading="lazy" className={style.img} />
                            </div>
                            <div className={style.banner_content_space}></div>
                            {addBreak(firstText)}
                            <div className={style.banner_button}>
                                <button className={style.square_button}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={style.svg}>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                    </svg>
                                    <label className={style.banner_label} htmlFor="button-text">
                                        {addSuperScripted(buttonText)}
                                    </label>
                                </button>
                            </div>
                            <div className={style.long_text}>
                                <div>
                                    <p>{sideText}</p>
                                </div>
                            </div>
                            <a href="#">
                                <div className={`${style.icon_arrow_bottom} ${style.icon_arrow}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1px" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacementOne

