
import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from '../actions'

export const useItem = () => {
    const dispatch = useDispatch()

    const list = useSelector(state => state.itemCollection.list)


    const isFetching = useSelector(state => state.itemCollection.isFetching)
    const isError = useSelector(state => state.itemCollection.isError)
    const message = useSelector(state => state.itemCollection.message)

    const handleGet = () => dispatch(ItemAction.getListRequest())
   
    const handleCreate =(data)=> dispatch(ItemAction.createListRequest(data))
    const handleDelete =(data)=> dispatch(ItemAction.deleteListRequest(data))
    const handleUpdate =(data)=> dispatch(ItemAction.updateListRequest(data))


    return {
        list,
        isFetching,
        isError,
        message,
        handleGet,
        handleCreate,
        handleDelete,
        handleUpdate,
       
    }
}