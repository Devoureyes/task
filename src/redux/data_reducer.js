import {handleActions} from 'redux-actions';
import {dataFailure, dataRequest, dataSuccess} from "../actions/data_actions";

const initialState = {
    data: [],
    fetch: false,
    errorMsg: ''
}

const data_reducer = handleActions({
    [dataRequest]: (state, action) => ({
        ...state,
        fetch: true
    }),
    [dataSuccess]: (state,action) => ({
        ...state,
        fetch: false,
        data: action.payload
    }),
    [dataFailure]: (state,action) => ({
        ...state,
        fetch: false,
        errorMsg: action.payload
    })

}, initialState)

export const getData = state => state.data_reducer.data
export const getFetch = state => state.data_reducer.fetch
export const getErrorMsg = state => state.data_reducer.errorMsg

export default data_reducer;