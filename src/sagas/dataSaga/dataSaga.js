import {put, takeLatest} from "redux-saga/effects";
import {dataFailure, dataRequest, dataSuccess} from "../../actions/data_actions";
import {dataAPI} from "../../api/api";

export default function* dataSagaWatcher() {
    yield takeLatest(dataRequest,dataSaga)
}

function* dataSaga({payload}) {
    try {
        const res = yield dataAPI.getData(payload)
        if (res.status >= 200 && res.status < 400) {
            yield put(dataSuccess({data:res.data.payload,length: res.data.length}))
        } else {
            yield put(dataFailure('Error 1'))
        }
    } catch (e) {
        console.log(e)
        yield put(dataFailure('Error 2'))
    }
}