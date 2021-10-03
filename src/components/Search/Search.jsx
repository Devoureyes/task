import React, {useEffect, useState} from "react";
import {getData, getErrorMsg, getFetch, getLimit, getPage, getSort} from "../../redux/data_reducer";
import {dataRequest} from "../../actions/data_actions";
import {connect} from 'react-redux';
import Loader from "../Loader/Loader";
import OfferItem from "../OfferItem/OfferItem";
import ErrorMessage from "../errors/ErrorMessage";
import s from './search.module.css'
import st from '../OfferItem/offerItem.module.css'

const Search = ({data,page,sort,limit,fetch, errorMsg, dataRequest}) => {
    useEffect(() => {
        if (data.length === 0) {
            dataRequest({page,limit,sort})
        }
        setFetchNew(false)
    }, [dataRequest, data])

    const setSort = (str) => {
        if (sort !== str) {
            setFetchNew(true)
            dataRequest({page, limit, sort: str})
        }
    }
    const [fetchNew,setFetchNew] = useState(false)
    if (errorMsg) {
        return <ErrorMessage errorMsg={errorMsg}/>
    }

    const moreData = (e) => {
        e.preventDefault()
        dataRequest({page:page+1,limit,sort})
    }

    return <React.Fragment>
        <div className={s.block}/>
        <div className={s.searchResultBlock}>
            <div className={s.searchResultInner}>
                <div className={s.searchResultHeader}>
                    <p>Сортировать:</p>
                    <p className={sort==='bid' ? s.sortBtnChoose : s.sortBtn} onClick={() => setSort('bid')}>по ставке</p>
                    <p className={sort==='sum' ? s.sortBtnChoose : s.sortBtn} onClick={() => setSort('sum')}>по сумме</p>
                </div>
                {data.map((el, i) => fetchNew ? <Loader /> : <OfferItem key={i} i={i} offer={el}/>)}
                {fetch && <Loader />}
                <button className={s.button} onClick={moreData}>Ещё</button>
            </div>
        </div>
    </React.Fragment>
}

const mstp = state => ({
    data: getData(state),
    errorMsg: getErrorMsg(state),
    fetch: getFetch(state),
    page: getPage(state),
    limit: getLimit(state),
    sort: getSort(state)
})

const mdtp = {
    dataRequest,
}
export default connect(mstp, mdtp)(Search);