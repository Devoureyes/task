import React from "react";
import s from './offer.module.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({con}) => (
    <div className={s.reqCon}>
        <div className={s.reqConHeader}><h1>Условия</h1></div>
        <div className={s.reqConContent}>
            <div>
                <div>Сумма</div>
                <div>{con.creditAmount.from} ₽ {!!con.creditAmount.to && ` - ${con.creditAmount.to} ₽`}</div>
            </div>
            <div>
                <div>Первоначальный взнос</div>
                <div>от {con.initialAmount?.from}%{!!con.initialAmount.to && ` до ${con.initialAmount.to}%`}</div>
            </div>
            <div>
                <div>Срок</div>
                <div>от {con.periods[0].term.from} до {con.periods[0].term.to} месяцев </div>
            </div>
            <div>
                <div>Процентная ставка</div>
                <div>{con.periods[0].rate.from}%{con.periods[0].rate.from !== con.periods[0].rate.to && ` - ${con.periods[0].rate.to}%`}</div>
            </div>
        </div>
    </div>
)