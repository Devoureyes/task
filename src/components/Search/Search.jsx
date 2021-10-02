import React, {useEffect} from "react";
import {getData, getErrorMsg, getFetch} from "../../redux/data_reducer";
import {dataRequest} from "../../actions/data_actions";
import {connect} from 'react-redux';
import Loader from "../Loader/Loader";
import OfferItem from "../OfferItem/OfferItem";
import ErrorMessage from "../errors/ErrorMessage";
import s from './search.module.css'

const Search = ({data, fetch, errorMsg, dataRequest}) => {

    useEffect(() => {
        if (data.length === 0) {
            dataRequest()
        }
    }, [dataRequest, data.length])

    if (fetch) {
        return <Loader/>
    }
    if (errorMsg) {
        return <ErrorMessage errorMsg={errorMsg}/>
    }
    return <React.Fragment>
        <div className={s.block}/>
        <div className={s.searchResultBlock}>
            <div className={s.searchResultInner}>
                <div className={s.searchResultHeader}>
                    <p>Сортировать:</p>
                    <p>по ставке</p>
                    <p>по сумме</p>
                </div>
                {data.map((el, i) => <OfferItem key={i} i={i} offer={el}/>)}
            </div>
        </div>
    </React.Fragment>
}

const mstp = state => ({
    data: getData(state),
    errorMsg: getErrorMsg(state),
    fetch: getFetch(state)
})

const mdtp = {
    dataRequest
}
export default connect(mstp, mdtp)(Search);