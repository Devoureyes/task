import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension';
import data_reducer from "./data_reducer";
import rootSaga from "../sagas/rootSaga";

let reducers = combineReducers({
    data_reducer
})
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga)
window.store = store
export default store;