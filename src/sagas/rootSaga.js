import {fork,put} from 'redux-saga/effects'
import {dataAPI} from "../api/api";
import {dataFailure, dataRequest, dataSuccess} from "../actions/data_actions";


// eslint-disable-next-line import/no-anonymous-default-export
export default function*() {
    yield fork(dataSaga,dataRequest)
}

function* dataSaga() {
    try {
        const res = yield dataAPI.getData()
        if (res.status >= 200 && res.status < 400) {
            yield put(dataSuccess(res.data))
        } else {
            yield put(dataFailure('Error 1'))
        }
    } catch (e) {
        console.log(e)
        yield put(dataFailure('Error 2'))
    }
}

