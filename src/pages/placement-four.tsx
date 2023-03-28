import React from 'react'
import style from '../scss/style.module.scss'

const Placement4: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_4}`}>
            <div>
                <div className={style.three_static_card_dark}>
                    <div className={style.card_long_text}>
                        <p>
                            <em>Transitions Drivewear </em>
                            the only polarized lens for driving with color and light adaptation.
                        </p>
                    </div>
                    <div className={style.three_card_main}>
                        <div className={`${style.card} ${style.static_dark_card} ${style.dark_card_brown}`}>
                            <div>
                                <h2 className={style.static_card_header}>68%</h2>
                                <div className={style.static_dark_content}>
                                    <div>
                                        <p>of consumer want their sunwear to respond to their driving needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} ${style.static_dark_card} ${style.dark_card_brown}`}>    
                            <div>
                                <h2 className={style.static_card_header}>70%</h2>
                                <div className={style.static_dark_content}>
                                    <div>
                                        <p>of consumers are bothered by glare.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.card} ${style.static_dark_card} ${style.dark_card_brown}`}>
                            <div>
                                <h2 className={style.static_card_header}>74%</h2>
                                <div className={style.static_dark_content}>
                                    <div>
                                        <p>of wearers feel safer on the road when wearing 
                                            <em>Transitions Drivewear</em>
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement4