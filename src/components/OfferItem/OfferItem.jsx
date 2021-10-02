import React, {memo} from "react";
import s from './offerItem.module.css'
import {Link} from "react-router-dom";

const OfferItem = memo(({i, offer}) => {
    console.log(offer)
    const {
        name: mainName,
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
            <p className={s.mainName}>{mainName}</p>
        </div>
        <div className={s.price}>
            <p className={s.creditAmount}>{creditAmount.from} ₽ {!!creditAmount.to && ` - ${creditAmount.to} ₽`}</p>
            <p className={s.creditTerm}>до {term.to/12} лет</p>
        </div>
        <div>3</div>
        <div><Link to={`/${i}`}>goto</Link></div>

    </div>
})

export default OfferItem;