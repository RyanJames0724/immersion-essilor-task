import React from "react";
import style from '../scss/style.module.scss'
import protectionImage from '../assets/images/placement-seven-img/protection-image.webp'
import comfortImage from '../assets/images/placement-seven-img/comfort-image.webp'
import visionImage from '../assets/images/placement-seven-img/vision-image.webp'
import { useQuery } from '@apollo/client';
import { GET_PLACEMENT_SEVEN_DATA } from "../query/placementAllQuery";


const Placement7: React.FC = () => {

    const { loading, error, data } = useQuery(GET_PLACEMENT_SEVEN_DATA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const editText = (text: string) => {
        return (
            <>
                {text.split(' ').map((data: string, index: number) => (
                    <React.Fragment key={index}>
                        {(data === 'bright' && index === 4)
                            || data === 'weather'
                            || (data === 'driving' && index === 6)
                            || data === 'recognition'
                            || data === 'greatest' ? (
                            <>
                                {data}
                                <br />
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
        <div className={`${style.one_column_layout_row} ${style.main_placement_7}`}>
            <div>
                <div className={style.placement_7_title}>comfort & safety while driving.</div>
                <div className={style.three_column_icon}>
                    {data.placementSevenDataQuery[0].images.map((data: any, index: number) => (
                        <div className={`${style.three_column_item} ${style.column_item}`} key={index}>
                            <div className={style.item_icon}>
                                <div className={style.icon_wrapper}>
                                    <div className={style.empty_image_wrapper}>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className={style.empty_image} />
                                    </div>
                                    <img src={data.imageSrc} alt="protection image" className={style.protection_image} />
                                </div>
                            </div>
                            <h3 className={style.three_column_item_title}>{data.imageTitle}</h3>
                            <div className={style.three_column_icon_message}>
                                <div>
                                    <p>{
                                        data.id === 3
                                            ? editText(data.imageDesc)
                                            : data.id === 4
                                                ? editText(data.imageDesc)
                                                : data.id === 5
                                                    ? editText(data.imageDesc)
                                                    : editText(data.imageDesc)
                                    }</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Placement7