import React from 'react'
import style from '../scss/style.module.scss'
import { gql, useQuery } from '@apollo/client';

const GET_ALL_PLACEMENT_DATA = gql`
    query GetData{
        placementSixDataQuery {
            id
            images {
                id
                imageSrc
                imageTitle
                imageDesc
            }
        }
    }
`

const Placement6: React.FC = () => {

    const { loading, error, data } = useQuery(GET_ALL_PLACEMENT_DATA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const editText = (text: string) => {
        return (
            <>
                {text.split(' ').map((data: string, index: number) => (
                    <React.Fragment key={index}>
                        {data === 'Transitions' || data === 'Drivewear' ? (
                            <em>{data} </em>
                        ) : (
                            data + ' '
                        )}
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_6}`}>
            <div>
                <div className={style.two_column_drive_banner}>
                    <div className={style.column_drive_container}>
                        <div className={style.column_drive_title}></div>
                        <div className={style.column_drive_subTitle}></div>
                        <div className={style.column_drive_grid}>
                            {data.placementSixDataQuery[0].images.map((data: any, index: number) => (
                                <div key={index}>
                                    <div className={style.column_drive_box}>
                                        <img
                                            src={data.imageSrc}
                                            alt={`${data.id === 1 ? 'three glass lens'
                                                : data.id === 2 ? 'sunglass' : ''}`}
                                            className={
                                                data.id === 1 ? style.three_lens
                                                    : data.id === 2 ? style.sun_glass : style.sun_glass
                                            } />
                                    </div>
                                    <div className={style.column_drive_text}>
                                        <h2>{data.imageTitle}</h2>
                                        <h3>
                                            <div>
                                                <p>{editText(data.imageDesc)}</p>
                                            </div>
                                            <img className={style.default_image} />
                                        </h3>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement6