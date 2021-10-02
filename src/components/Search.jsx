import React, {useEffect} from "react";
import {getData, getErrorMsg, getFetch} from "../redux/data_reducer";
import {dataRequest} from "../actions/data_actions";
import {connect} from 'react-redux';
import Loader from "./Loader/Loader";
import {Link} from "react-router-dom";

const Search = ({data,fetch,errorMessage, dataRequest}) => {
    useEffect(() => {
        dataRequest()
    }, [dataRequest,data])
    console.log(data)

    return !fetch ? <Loader /> : <div>
        {data.map((el,i)=><Link to={`/${i}`} key={i}>{el.name}</Link>)}
    </div>
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