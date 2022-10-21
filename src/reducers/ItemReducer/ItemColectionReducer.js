import { itemActions } from '../../contants/actionsType'


const INITIAL_STATE = {
    list: [],
    isFetching: false,
    isError: false,
    message: ''
}

export default function itemCollectionReducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case itemActions.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case itemActions.GET_ITEM_SUCCESS:

            return {
                ...state,
                isFetching: false,
                list: payload.list,
                isError: false
            }
        case itemActions.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        default:
            return state
    }
}