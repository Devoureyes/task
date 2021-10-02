import {fork} from 'redux-saga/effects'
import dataSagaWatcher from "./dataSaga/dataSaga";


// eslint-disable-next-line import/no-anonymous-default-export
export default function*() {
    yield fork(dataSagaWatcher)
}


