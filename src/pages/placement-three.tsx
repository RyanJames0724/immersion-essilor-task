import React, { useState } from "react";
import style from '../scss/style.module.scss'
import GridBox from "../component/GridBox";
import { IDataPlacementThree } from "../model/placementsModel";


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