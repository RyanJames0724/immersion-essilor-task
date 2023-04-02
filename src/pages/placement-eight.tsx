import React from "react";
import style from '../scss/style.module.scss'
import FlushExample from "./accordion";
import { gql, useQuery } from "@apollo/client";
import { GET_PLACEMENT_EIGHT_DATA } from "../query/placementAllQuery";

interface IDataPlacementEight {
    id: number
    firstText: string
}

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