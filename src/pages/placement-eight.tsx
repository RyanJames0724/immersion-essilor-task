import React from "react";
import style from '../scss/style.module.scss'
import FlushExample from "./accordion";

const Placement8: React.FC = () => {
    return (
        <div className={`${style.one_column_layout_row} ${style.main_placement_8}`}>
            <div>
                <div>
                    <div className={style.FAQ_container}>
                        <div className={style.FAQ_content}>
                            <h2 className={style.FAQ_title}>Frequently asked questions</h2>
                            <FlushExample />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement8