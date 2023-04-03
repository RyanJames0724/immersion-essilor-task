import React from 'react'
import style from '../scss/style.module.scss'
import { addEmphasize } from '../logic/edit-text';
import { IDataPlacementFour } from '../model/placementsModel';


const Placement4: React.FC<IDataPlacementFour> = ({id, firstText, card}) => {

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_4}`}>
            <div>
                <div className={style.three_static_card_dark}>
                    <div className={style.card_long_text}>
                        <p>
                            {addEmphasize(firstText)}
                        </p>
                    </div>
                    <div className={style.three_card_main}>
                        {card.map((card: any) => (
                            <div className={`${style.card} ${style.static_dark_card} ${style.dark_card_brown}`} key={card.id}>
                                <div>
                                    <h2 className={style.static_card_header}>{card.cardHeader}</h2>
                                    <div className={style.static_dark_content}>
                                        <div>
                                            <p>{card.id === 3 ? addEmphasize(card.cardContent) : card.cardContent}</p>
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