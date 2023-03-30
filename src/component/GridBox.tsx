import React, { useState } from "react";
import style from '../scss/style.module.scss';

const GridBox = ({ data, index }: any) => {
    const [isHovering, setIsHovering] = useState(false);


    const editText = (text: string) => {
        return (
            <>
                {text.split(' ').map((data: string, index: number) => (
                    <React.Fragment key={index}>
                        {data === '+27%' ? (
                            <>
                                {data}
                                <sup>1</sup>
                                <span>.</span>
                            </>

                        ) : (
                            data + ' '
                        )}
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <div key={index}>
            <div className={`${style.layer_banner_wrapper} ${style.layer_wrapper}`}>
                <div
                    className={`${style.second_layer} ${data.id === 1 ? isHovering ? style.second_layer_show_1 : style.second_layer_hide_1
                        : data.id === 2 ? isHovering ? style.second_layer_show_2 : style.second_layer_hide_2
                            : data.id === 3 ? isHovering ? style.second_layer_show_3 : style.second_layer_hide_3
                                : data.id === 4 ? isHovering ? style.second_layer_show_4 : style.second_layer_hide_4
                                    : ''
                        }`}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className={style.content_container}>
                        <div className={style.logo_wrapper}>
                            <div className={style.icon_wrapper}>
                                <div className={style.image_wrapper}>
                                    <img src={`${data.imageSrc}`} alt="sun with glass" loading='lazy' className={`${style.image_sun_glass} ${style.img}`} />
                                </div>
                            </div>
                        </div>
                        <div className={`${style.layer_banner_content} ${isHovering ? style.banner_content_show : style.banner_content_hide}`}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <div>
                                <div>
                                    <p>{index === 2 ? editText(data.textHoverShow) : data.textHoverShow}</p>
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
                            <img src={data.imageBackgroundSrc} alt="An empty way" className={`${style.background_sun_with_glass} ${style.img}`} />
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
                                    <img src={data.imageSrc} alt="sun with glass" className={`${style.sun_with_glass} ${style.img}`} />
                                </div>
                            </div>
                        </div>
                        <div className={style.layer_banner_content}>
                            <h4>{data.textDefaultShow}</h4>
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
        </div>)
}

export default GridBox;