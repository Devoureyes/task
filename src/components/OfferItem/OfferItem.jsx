import React, {memo} from "react";
import s from './offerItem.module.css'
import {Link} from "react-router-dom";

const OfferItem = memo(({i, offer}) => {
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
            periods: [{
                rate: {
                    from,
                    to
                },
                term,
            }]
        }
    } = offer

    return <div className={s.offerItem}>
        <div className={s.desktopOfferItem}>
            <div className={s.organization}>
                <img className={s.organizationLogo} src={logo} alt={''}/>
                <p>{name}</p>
            </div>
            <div className={s.percentBlock}>
                <p className={s.percentValue}>{from}%{from !== to && ` - ${to}%`}</p>
                <p className={s.mainName}>«{mainName}»</p>
            </div>
            <div className={s.price}>
                <p className={s.creditAmount}>{creditAmount.from} ₽ {!!creditAmount.to && ` - ${creditAmount.to} ₽`}</p>
                <p className={s.creditTerm}>до {term.to / 12} лет</p>
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
        <div className={s.mobileOfferItem}>
            <div className={s.mobHeader}>
                <div className={s.mobHeaderLeft}>
                    <img className={s.organizationLogo} src={logo} alt={''}/>
                    <p className={s.mobHeaderLeftP}>{name}</p>
                </div>
                <div>
                    <p>«{mainName}»</p>
                </div>
            </div>
            <div className={s.mobLicense}>
                <div className={s.mobLicenseLine}/>
                <p>Лиц. № {license}</p>
            </div>
            <div className={s.mobContent}>
                <div className={s.mobContentLeft}>
                    <p>Ставка</p>
                    <p className={s.percentValue}>{from !== to ? `от ${from}%` : `${from}%`}</p>
                </div>
                <div className={s.mobContentRight}>
                    <div className={s.mobContentRightTop}>
                        <p className={s.creditAmount}>
                            до {(!!creditAmount.to ? creditAmount.to : creditAmount.from)/1000000} млн ₽
                        </p>
                    </div>
                    <div className={s.mobContentRightBtm}>
                        <Link to={`/${i}`}>
                            <button className={s.button}>Подробнее</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
})

export default OfferItem;