import React from "react";
import s from './loader.module.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({type = 1}) => {
    if (type === 2) {
        return <div>
            <div className={s.hourglass}/>
        </div>
    }
    if (type === 1) {
        return <div className={s.main}>
            <div className={s.hourglass}/>
        </div>
    }
}
