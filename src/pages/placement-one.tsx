import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../scss/style.module.scss'
import { gql, useQuery } from '@apollo/client';

const GET_ALL_PLACEMENT_DATA = gql`
    query GetData{
        placementOneDataQuery {
            id
            bannerBackground
            bannerLogo
            firstText
            placementButtons {
              id
              buttonText
            }
            sideText
          }
    }
`

const PlacementOne: React.FC = () => {
    const { loading, error, data } = useQuery(GET_ALL_PLACEMENT_DATA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const editText = (text: string) => {
        return (
            <h1>
                {text.split(' ').map((data: string, index: number) => (
                    <React.Fragment key={index}>
                        {data === 'any' ? (
                            <>
                                {data}
                                <br />
                            </>

                        ) : (
                            data + ' '
                        )}
                    </React.Fragment>
                ))}
            </h1>
        );
    };

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_1}`}>
            <div>
                <div className={style.generic_row_banner}>
                    <div className={`${style.banner_wrapper} ${style.banner_dark}`}>
                        <div className={`${style.banner_background} ${style.background}`}>
                            <div className={style.background_wrapper}>
                                <div className={style.image_holder}>
                                    <img src={data.placementOneDataQuery[0].bannerBackground} alt="front background" loading="lazy" className={style.hero_banner_background} />
                                </div>
                            </div>
                        </div>
                        <div className={style.banner_gradient}>
                            <div className={style.gradient_1}></div>
                            <div className={style.gradient_2}></div>
                            <div className={style.gradient_3}></div>
                            <div className={style.gradient_4}></div>
                            <div className={style.gradient_5}></div>
                            <div className={style.gradient_6}></div>
                            <div className={style.gradient_7}></div>
                            <div className={style.gradient_8}></div>
                        </div>
                        <div className={style.content_left_bottom}>
                            <div className={style.banner_content_logo}>
                                <img src={data.placementOneDataQuery[0].bannerLogo} alt="content logo" loading="lazy" className={style.img} />
                            </div>
                            <div className={style.banner_content_space}></div>
                            {editText(data.placementOneDataQuery[0].firstText)}
                            <div className={style.banner_button}>
                                <button className={style.square_button}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={style.svg}>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                    </svg>
                                    <label className={style.banner_label} htmlFor="button-text">
                                        {data.placementOneDataQuery[0].placementButtons[0].buttonText}
                                    </label>
                                </button>
                            </div>
                            <div className={style.long_text}>
                                <div>
                                    <p>{data.placementOneDataQuery[0].sideText}</p>
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

