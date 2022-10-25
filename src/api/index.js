import { Helpers } from '../utils'
import ApiScheme from './@scheme'



export const testApi = {
    getList: Helpers.createApi(ApiScheme.ITEMS.GET_LIST),
    createList: Helpers.createApi(ApiScheme.ITEMS.CREATE),
    deleteList: Helpers.createApi(ApiScheme.ITEMS.DELETE),
    updateList: Helpers.createApi(ApiScheme.ITEMS.UPDATE),
   
}