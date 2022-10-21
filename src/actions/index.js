import { createAction } from "@reduxjs/toolkit"
import { itemActions } from "../contants/actionsType"
export const ItemAction = {
    getListRequest: createAction(itemActions.GET_ITEM_REQUEST),
    getListSuccess: createAction(itemActions.GET_ITEM_SUCCESS),
    getListFailure: createAction(itemActions.GET_ITEM_FAILURE),
    
    createListRequest: createAction(itemActions.CREATE_ITEM_REQUEST),
    createListSuccess: createAction(itemActions.CREATE_ITEM_SUCCESS),
    createListFailure: createAction(itemActions.CREATE_ITEM_FAILURE),



    deleteListRequest: createAction(itemActions.DELETE_ITEM_REQUEST), 
    deleteListSuccess: createAction(itemActions.DELETE_ITEM_SUCCESS),
    deleteListFailure: createAction(itemActions.DELETE_ITEM_FAILURE),



    updateListRequest: createAction(itemActions.UPDATE_ITEM_REQUEST),
    updateListSuccess: createAction(itemActions.UPDATE_ITEM_SUCCESS),
    updateListFailure: createAction(itemActions.UPDATE_ITEM_FAILURE),




    searchListRequest: createAction(itemActions.SEARCH_ITEM_REQUEST),
    searchListSuccess: createAction(itemActions.SEARCH_ITEM_SUCCESS),
    searchListFailure: createAction(itemActions.SEARCH_ITEM_FAILURE),
}
