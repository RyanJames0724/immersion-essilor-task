import React from "react";
import style from '../scss/style.module.scss'
import FlushExample from "./accordion";
import { IDataPlacementEight } from "../model/placementsModel";



const Placement8: React.FC<IDataPlacementEight> = ({id, firstText}) => {

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_8}`}>
            <div>
                <div>
                    <div className={style.FAQ_container}>
                        <div className={style.FAQ_content}>
                            <h2 className={style.FAQ_title}>{firstText}</h2>
                            <FlushExample />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement8