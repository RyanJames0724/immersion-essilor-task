import React from "react";
import style from '../scss/style.module.scss'
import FlushExample from "./accordion";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_PLACEMENT_DATA = gql`
    query GetData{
        placementEightDataQuery {
            id
            firstText
        }
    }
`

const Placement8: React.FC = () => {

    const { loading, error, data } = useQuery(GET_ALL_PLACEMENT_DATA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_8}`}>
            <div>
                <div>
                    <div className={style.FAQ_container}>
                        <div className={style.FAQ_content}>
                            <h2 className={style.FAQ_title}>{data.placementEightDataQuery[0].firstText}</h2>
                            <FlushExample />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement8