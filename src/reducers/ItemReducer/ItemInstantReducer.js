import { itemActions } from '../../contants/actionsType'

const INITIAL_STATE = {
    item: {
        id: null
    },
    isFetching: false,
    isError: false,
    message: ''
}

export default function itemInstanceReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        // case itemActions.DETAIL_ITEM_REQUEST:
        case itemActions.CREATE_ITEM_REQUEST:
        case itemActions.DELETE_ITEM_REQUEST:
        case itemActions.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case itemActions.DELETE_ITEM_FAILURE:
        case itemActions.CREATE_ITEM_FAILURE:
        case itemActions.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        case itemActions.CREATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case itemActions.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case itemActions.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case itemActions.CLEAR_ITEM: 
            return INITIAL_STATE
        default:
            return state
    }
}