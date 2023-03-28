import React from 'react'
import style from '../scss/style.module.scss'

const Placement9: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_9}`}>
            <div>
                <div className={style.disclaimer}>
                    <span>
                        <div>
                            <p>1. Source: EcoOptics Limited - Prof. Nicholas Roberts, Quantitative study measuring experimentally how Drivewear increases the achromatic contrast (change in perceived brightness) of moving objects.</p>
                        </div>
                    </span>
                    <span>
                        <div>
                            <p>2. Source: Transitions<sup>®</sup> Drivewear<sup>®</sup> consumer survey (N=205)</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Placement9