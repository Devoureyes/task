import React, {memo} from "react";
import s from './offerItem.module.css'
import {Link} from "react-router-dom";

const OfferItem = memo(({i, offer}) => {
    if (i>20){
        //console.log(offer.rate.creditAmount)
    }
    const {
        name: mainName,
        customerRequirements,
        organization: {
            logo,
            name,
            license
        },
        rate: {
            creditAmount,
            currency,
            initialAmount,
            periods: [{
                isFloatingRate,
                rate: {
                    from,
                    to
                },
                term,
                termUnit
            }]
        }
    } = offer
    return <div className={s.offerItem}>
        <div className={s.organization}>
            <img className={s.organizationLogo} src={logo} alt={''}/>
            <p>{name}</p>
            {/*<div className={s.organizationLogo} style={{backgroundImage: `url(${offer.organization.logo})`}} />*/}
        </div>
        <div className={s.percentBlock}>
            <p className={s.percentValue}>{from}%{from !== to && ` - ${to}%`}</p>
            <p className={s.mainName}>«{mainName}»</p>
        </div>
        <div className={s.price}>
            <p className={s.creditAmount}>{creditAmount.from} ₽ {!!creditAmount.to && ` - ${creditAmount.to} ₽`}</p>
            <p className={s.creditTerm}>до {term.to/12} лет</p>
        </div>
        <div className={s.customRequirements}>
            <p>Возраст от {customerRequirements.age} {customerRequirements.age % 10 === 1 ? 'года' : 'лет'}</p>
            <p>Стаж от {customerRequirements.lastExperience} месяцев</p>
            <p>{customerRequirements.documents} {customerRequirements.documents < 5 ? 'документа' : 'документов'}</p>
        </div>
        <div className={s.goTo}>
            <p>Лицензия № {license}</p>
            <Link to={`/${i}`}>
                <button className={s.button}>Подробнее</button>
            </Link>
        </div>
    </div>
})

export default OfferItem;