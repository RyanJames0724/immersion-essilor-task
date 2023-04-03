import React from 'react'
import style from '../scss/style.module.scss'
import { addEmphasize } from '../logic/edit-text';
import { IDataPlacementSix } from '../model/placementsModel';

const Placement6: React.FC<IDataPlacementSix> = ({ id, images }) => {

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_6}`}>
            <div>
                <div className={style.two_column_drive_banner}>
                    <div className={style.column_drive_container}>
                        <div className={style.column_drive_title}></div>
                        <div className={style.column_drive_subTitle}></div>
                        <div className={style.column_drive_grid}>
                            {images.map((data: any, index: number) => (
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
                                                <p>{addEmphasize(data.imageDesc)}</p>
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