import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getData} from "../redux/data_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {dataRequest} from "../actions/data_actions";

const Offer = ({data, dataRequest, match}) => {

    useEffect(() => {
        if(data.length === 0) {
            dataRequest()
        }
    },[dataRequest,data])

    return data.length > 0 && <div>
        {data[match.params.id].name}
    </div>
}

const mstp = state => ({
    data: getData(state)
})

export default compose(
    connect(mstp, {dataRequest}),
    withRouter)(Offer);