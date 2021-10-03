import {createActions} from 'redux-actions'

export const {
    dataRequest,
    dataSuccess,
    dataFailure,
} = createActions({
    DATA_REQUEST:payload=>payload,
    DATA_SUCCESS:payload=>payload,
    DATA_FAILURE:payload=>payload,
})