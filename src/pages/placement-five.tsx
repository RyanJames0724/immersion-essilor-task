import React from 'react'
import style from '../scss/style.module.scss'
import { IDataPlacementFive } from '../model/placementsModel'

const Placement5: React.FC<IDataPlacementFive> = ({ id, images, firstText }) => {

    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_5}`}>
            <div>
                <div className={style.three_column_drive_banner}>
                    <div className={style.column_drive_container}>
                        <h2>{firstText}</h2>
                        <div className={style.column_drive_grid}>
                            {images.map((data: any) => (
                                <div key={data.id}>
                                    <div className={style.column_drive_box_1}>
                                        <img src={data.imageSrc} alt="first sun glass drive" />
                                        <div className={
                                            data.id === 1 ? style.column_drive_box_title_1
                                                : data.id === 2 ? style.column_drive_box_title_2
                                                    : data.id === 3 ? style.column_drive_box_title_3
                                                        : style.column_drive_box_title_1
                                        }>
                                            <span>{data.imageTitle}</span>
                                        </div>
                                    </div>
                                    <div className={style.column_drive_content_text}>
                                        <div className={style.drive_content_title}>{data.imageDescTitle}</div>
                                        <div className={style.drive_content_description}>
                                            <div>
                                                <p>{data.imageDesc}</p>
                                            </div>
                                        </div>
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

export default Placement5

