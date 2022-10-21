import { put , takeEvery, takeLatest} from 'redux-saga/effects'
import { ItemAction } from '../actions'
import  { itemActions } from '../contants'
import { testApi } from '../api'



function* handleGetListItems() {

    try {
        // const res = "an cuc"

        const res = yield testApi.getList()
        console.log("ressss", res.listItem);
        yield put(ItemAction.getListSuccess({
            list : res.listItem,
        }))
       
    } catch (error) {
        yield put(ItemAction.getListFailure({
            message: error.message
        }))
     console.log(error)
    }
}


function* handleCreateItem({ payload }) {
   
    try {
        // yield itemApi.createList(null, null, payload)
    const resCreate =   yield testApi.createList(null, null, payload)
    console.log("resCreate", resCreate)
        yield put(ItemAction.createListSuccess())
        yield put (ItemAction.getListRequest())
    } catch (error) {
        yield put(ItemAction.createListFailure({
            message: error.message
        }))
    }
}

function* handleDeleteItem({ payload }) {
   
    try {
        yield testApi.deleteList(null, null, payload)
        yield put(ItemAction.deleteListSuccess())
        yield put (ItemAction.getListRequest())
    } catch (error) {
        yield put(ItemAction.deleteListFailure({
            message: error.message
        }))
    }
}


function* handleUpdateItem({ payload }) {
    console.log("djcdjcdjndsjncd",payload)
    try {
        yield testApi.updateList(null, null, payload)
        yield put(ItemAction.updateListSuccess())
        yield put (ItemAction.getListRequest())
    } catch (error) {
        yield put(ItemAction.updateListFailure({
            message: error.message
        }))
    }
}
const itemSaga = [
    takeEvery(itemActions.itemActions.GET_ITEM_REQUEST , handleGetListItems),
    takeEvery(itemActions.itemActions.CREATE_ITEM_REQUEST, handleCreateItem),
    takeEvery(itemActions.itemActions.DELETE_ITEM_REQUEST, handleDeleteItem),
    takeEvery(itemActions.itemActions.UPDATE_ITEM_REQUEST, handleUpdateItem),
]
export default itemSaga;