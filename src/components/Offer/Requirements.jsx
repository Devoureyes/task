import React from "react";
import s from './offer.module.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({req}) => (
    <div className={s.reqCon}>
        <div className={s.reqConHeader}><h1>Требования</h1></div>
        <div className={s.reqConContent}>
            <div>
                <div>Возраст на момент получения</div>
                <div>от {req.age} {req.age % 10 === 1 ? 'года' : 'лет'}</div>
            </div>
            <div>
                <div>Возраст на момент погашения</div>
                <div>
                    <p>от {req.femaleAgeAtRepayment} {req.femaleAgeAtRepayment % 10 === 1 ? 'года' : 'лет'} для женщин</p>
                    <p>от {req.manAgeAtRepayment} {req.manAgeAtRepayment % 10 === 1 ? 'года' : 'лет'} для мужчин</p>
                </div>
            </div>
            <div>
                <div>Количество документов</div>
                <div>{req.documents} {req.documents < 5 ? 'документа' : 'документов'}</div>
            </div>

            <div>
                <div>Последний стаж</div>
                <div>{req.lastExperience} месяцев</div>
            </div>
            {req.fullExperience !== 0 && <div>
                <div>Общий стаж</div>
                <div>{req.fullExperience} месяцев</div>
            </div>}
        </div>
    </div>
)