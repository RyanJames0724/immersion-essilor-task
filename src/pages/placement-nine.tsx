import React from 'react'
import style from '../scss/style.module.scss'
import { gql, useQuery } from "@apollo/client";
import { GET_PLACEMENT_NINE_DATA } from '../query/placementAllQuery';
import { IDataPlacementNine } from '../model/placementsModel';


const Placement9: React.FC<IDataPlacementNine> = ({id, placementText}) => {

    const editText = (text: string) => {
        return (
            <>
                {text.split(' ').map((data: string, index: number) => (
                    <React.Fragment key={index}>
                        {data === '®' ? (
                            <sup>{data} </sup>
                        ) : (
                            data + ' '
                        )}
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_9}`}>
            <div>
                <div className={style.disclaimer}>
                    {placementText.map((data: any, index: number) => (
                        <span key={index}>
                            <div>
                                <p>{editText(data.firstText)}</p>
                            </div>
                        </span>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Placement9