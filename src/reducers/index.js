import { combineReducers } from 'redux'
import itemCollectionReducer from './ItemReducer/ItemColectionReducer'
import itemInstanceReducer from './ItemReducer/ItemInstantReducer'

export default combineReducers({
    itemCollection: itemCollectionReducer,
    itemInstance: itemInstanceReducer
})