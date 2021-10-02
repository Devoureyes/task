import React from "react";
import st from './loader.module.css'

const s = {
    userSelect: 'none',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(108,108,108,0)',
    display: 'flex',
    justifyContent: 'center',
}

export default () => {
    return <div style={s}>
        <div className={st.hourglass}/>
    </div>
}
