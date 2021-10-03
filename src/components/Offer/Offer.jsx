import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getData, getFetch, getLimit, getPage, getSort} from "../../redux/data_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {dataRequest} from "../../actions/data_actions";
import Loader from "../Loader/Loader";
import s from './offer.module.css'
import st from '../OfferItem/offerItem.module.css'
import Conditions from "./Conditions";
import Requirements from "./Requirements";

const Offer = ({data, fetch, page, limit, sort, dataRequest, match}) => {
    useEffect(() => {
        if (data.length === 0) {
            dataRequest({page, limit, sort})
        }
    }, [dataRequest, data])
    const [view,setView] = useState(true)
    const offer = data[match.params.id]
    console.log(offer)
    return data.length === 0 ? <Loader type={2}/> : <div className={s.offerParent}>
        <div className={s.offer}>
            <div>
                <div>
                    <img src={offer.organization.logo} alt=""/>
                    <p className={s.license}>Лицензия № {offer.organization.license}</p>
                </div>
                <div>
                    <p>{offer.rate.periods[0].rate.from}%{offer.rate.periods[0].rate.from !== offer.rate.periods[0].rate.to && ` - ${offer.rate.periods[0].rate.to}%`}</p>
                    <p>«{offer.name}»</p>
                </div>
                <div>
                    <p>{offer.rate.creditAmount.from} ₽ {!!offer.rate.creditAmount.to && ` - ${offer.rate.creditAmount.to} ₽`}</p>
                    <p>до {offer.rate.periods[0].term.to / 12} лет</p>
                </div>
            </div>
            <div>
                <div className={s.header}>
                    <div><button onClick={() => setView(true)} className={st.button}>Условия</button></div>
                    <div><button onClick={() => setView(false)} className={st.button}>Требования</button></div>
                </div>
                <div className={s.content}>
                    {view
                        ? <Conditions lol={1}/>
                        : <Requirements lol={2}/>}
                </div>
            </div>
        </div>
    </div>
}

const mstp = state => ({
    data: getData(state),
    page: getPage(state),
    limit: getLimit(state),
    sort: getSort(state),
    fetch: getFetch(state)
})

export default compose(
    connect(mstp, {dataRequest}),
    withRouter)(Offer);