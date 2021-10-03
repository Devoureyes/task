import {handleActions} from 'redux-actions';
import {dataFailure, dataRequest, dataSuccess} from "../actions/data_actions";

const initialState = {
    data: [],
    fetch: false,
    errorMsg: '',
    page: 1,
    limit: 10,
    sort: 'bid',
    length: null
}

const data_reducer = handleActions({
    [dataRequest]: (state, {payload}) => ({
        ...state,
        fetch: true,
        page: payload.page,
        limit: payload.limit,
        sort: payload.sort
    }),
    [dataSuccess]: (state, {payload}) => ({
        ...state,
        fetch: false,
        data: payload.data,
        length: payload.length
    }),
    [dataFailure]: (state, {payload}) => ({
        ...state,
        fetch: false,
        errorMsg: payload
    }),

}, initialState)

export const getData = state => state.data_reducer.data
export const getFetch = state => state.data_reducer.fetch
export const getErrorMsg = state => state.data_reducer.errorMsg
export const getPage = state => state.data_reducer.page
export const getLimit = state => state.data_reducer.limit
export const getSort = state => state.data_reducer.sort
export const getLength = state => state.data_reducer.length

export default data_reducer;