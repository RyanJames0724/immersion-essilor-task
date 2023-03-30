import React, { useState } from "react";
import style from '../scss/style.module.scss'
import { gql, useQuery } from '@apollo/client';
import GridBox from "../component/GridBox";
import { GET_PLACEMENT_THREE_DATA } from "../query/placementAllQuery";

type IData = {
    __typename: string,
    id: number
    data: [
        { title: string, id: number }
    ]
}

const Placement3: React.FC = () => {

    const [isHovering, setIsHovering] = useState<boolean>(false)

    const { loading, error, data } = useQuery(GET_PLACEMENT_THREE_DATA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const sampleData = data.placementThreeDataQuery[0].images.map((data: IData) => data);
    console.log(sampleData);


    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_3}`}>
            <div>
                <div className={style.two_layer_card_main}>
                    <div className={style.card_light_wrapper}>

                        {data.placementThreeDataQuery[0].images.map((data: any, index: number) => (
                            <GridBox key={index} data={data} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement3