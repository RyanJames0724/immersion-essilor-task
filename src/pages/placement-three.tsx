import React, { useState } from "react";
import style from '../scss/style.module.scss'
import { gql, useQuery } from '@apollo/client';
import GridBox from "../component/GridBox";
import { GET_PLACEMENT_THREE_DATA } from "../query/placementAllQuery";

interface IDataImages {
    imageSrc: string
    imageBackgroundSrc: string
    textDefaultShow: string
    textHoverShow: string
}

interface IDataPlacementThree {
    id: number
    images: [IDataImages]
}

const PlacementThree: React.FC<IDataPlacementThree> = ({ id, images }) => {

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_3}`}>
            <div>
                <div className={style.two_layer_card_main}>
                    <div className={style.card_light_wrapper}>

                        {images.map((data: any, index: number) => (
                            <GridBox key={index} data={data} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacementThree