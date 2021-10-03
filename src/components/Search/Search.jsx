import React, {useEffect, useState} from "react";
import {getData, getErrorMsg, getFetch, getLength, getLimit, getPage, getSort} from "../../redux/data_reducer";
import {dataRequest} from "../../actions/data_actions";
import {connect} from 'react-redux';
import Loader from "../Loader/Loader";
import OfferItem from "../OfferItem/OfferItem";
import ErrorMessage from "../errors/ErrorMessage";
import s from './search.module.css'


const Search = ({data,page,sort,limit,length,fetch, errorMsg, dataRequest}) => {
    const [fetchNew,setFetchNew] = useState(false)
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
    const moreData = (e) => {
        e.preventDefault()
        dataRequest({page:page+1,limit,sort})
    }
    const dataLength = length-data.length >= 10 ? 10 : length-data.length
    return errorMsg ? <ErrorMessage errorMsg={errorMsg}/>
        : <React.Fragment>
        <div className={s.block}/>
        <div className={s.searchResultBlock}>
            <div className={s.searchResultInner}>
                <div className={s.searchResultHeader}>
                    <select className={s.select} onChange={(e)=>setSort(e.target.value)}>
                        <option value="bid">По ставке</option>
                        <option value="sum">По сумме</option>
                    </select>
                    <p className={s.sortText}>Сортировать:</p>
                    <p className={sort==='bid' ? s.sortBtnChoose : s.sortBtn} onClick={() => setSort('bid')}>по ставке</p>
                    <p className={sort==='sum' ? s.sortBtnChoose : s.sortBtn} onClick={() => setSort('sum')}>по сумме</p>
                </div>
                <div className={s.items}>
                    {data.map((el, i) => fetchNew ? <Loader/> : <OfferItem key={i} i={i} offer={el}/>)}
                    {fetch && <Loader/>}
                    {data.length !== length &&<button className={s.button} onClick={moreData}>Ещё +{dataLength}/{length-data.length}</button>}
                </div>
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
    sort: getSort(state),
    length: getLength(state)
})

const mdtp = {
    dataRequest,
}
export default connect(mstp, mdtp)(Search);