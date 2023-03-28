import React from 'react'
import style from '../scss/style.module.scss'

const Placement10: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_10}`}>
            <div>
                <div className={style.back_to_top}>
                    <div className={style.back_to_top_wrapper}>
                        <div className={style.back_to_top_action}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={style.back_to_top_arrow_up}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="16 12 12 8 8 12"></polyline>
                                <line x1="12" y1="16" x2="12" y2="8"></line>
                            </svg>
                            <p className={style.back_to_top_label}>Back to Top</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement10