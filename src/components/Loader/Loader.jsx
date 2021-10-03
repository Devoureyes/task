import React from "react";
import s from './loader.module.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className={s.main}>
        <div className={s.hourglass}/>
    </div>
}
