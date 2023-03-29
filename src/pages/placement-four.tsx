import React from 'react'
import style from '../scss/style.module.scss'
import { gql, useQuery } from '@apollo/client';

const GET_ALL_PLACEMENT_DATA = gql`
    query GetData{
        placementFourDataQuery {
            id
            firstText
            card {
              id
              cardHeader
              cardContent
            }
        }
    }
`

const Placement4: React.FC = () => {

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
        <div className={`${style.one_column_layout_row} ${style.main_placement_4}`}>
            <div>
                <div className={style.three_static_card_dark}>
                    <div className={style.card_long_text}>
                        <p>
                            {editText(data.placementFourDataQuery[0].firstText)}
                        </p>
                    </div>
                    <div className={style.three_card_main}>
                        {data.placementFourDataQuery[0].card.map((card: any) => (
                            <div className={`${style.card} ${style.static_dark_card} ${style.dark_card_brown}`} key={card.id}>
                                <div>
                                    <h2 className={style.static_card_header}>{card.cardHeader}</h2>
                                    <div className={style.static_dark_content}>
                                        <div>
                                            <p>{card.id === 3 ? editText(card.cardContent) : card.cardContent}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement4